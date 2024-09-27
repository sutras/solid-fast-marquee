import {
  type JSX,
  mergeProps,
  createSignal,
  onMount,
  createMemo,
  createEffect,
  on,
  children,
  Show,
  onCleanup,
} from "solid-js";
import MultiplyChildren from "./MultiplyChildren";

import "./index.css";

export type MarqueeProps = {
  /**
   * @description Inline style for the container div
   * @type {JSX.CSSProperties}
   * @default {}
   */
  style?: JSX.CSSProperties;
  /**
   * @description Class name to style the container div
   * @type {string}
   * @default ""
   */
  class?: string;
  /**
   * @description Whether to automatically fill blank space in the marquee with copies of the children or not
   * @type {boolean}
   * @default false
   */
  autoFill?: boolean;
  /**
   * @description Whether to play or pause the marquee
   * @type {boolean}
   * @default true
   */
  play?: boolean;
  /**
   * @description Whether to pause the marquee when hovered
   * @type {boolean}
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * @description Whether to pause the marquee when clicked
   * @type {boolean}
   * @default false
   */
  pauseOnClick?: boolean;
  /**
   * @description The direction the marquee is sliding
   * @type {"left" | "right" | "up" | "down"}
   * @default "left"
   */
  direction?: "left" | "right" | "up" | "down";
  /**
   * @description Speed calculated as pixels/second
   * @type {number}
   * @default 50
   */
  speed?: number;
  /**
   * @description Duration to delay the animation after render, in seconds
   * @type {number}
   * @default 0
   */
  delay?: number;
  /**
   * @description The number of times the marquee should loop, 0 is equivalent to infinite
   * @type {number}
   * @default 0
   */
  loop?: number;
  /**
   * @description Whether to show the gradient or not
   * @type {boolean}
   * @default false
   */
  gradient?: boolean;
  /**
   * @description The color of the gradient
   * @type {string}
   * @default "white"
   */
  gradientColor?: string | (number | string)[];
  /**
   * @description The width of the gradient on either side
   * @type {number | string}
   * @default 200
   */
  gradientWidth?: number | string;
  /**
   * @description A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.
   * @type {() => void}
   * @default null
   */
  onFinish?: () => void;
  /**
   * @description A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
   * @type {() => void}
   * @default null
   */
  onCycleComplete?: () => void;
  /**
   * @description: A callback function that is invoked once the marquee has finished mounting. It can be utilized to recalculate the page size, if necessary.
   * @type {() => void}
   * @default null
   */
  onMount?: () => void;
  /**
   * @description The children rendered inside the marquee
   * @type {JSX.Element}
   * @default null
   */
  children?: JSX.Element;

  /**
   * @description root HTMLDivElement
   * @type {HTMLDivElement}
   * @default null
   */
  ref?: HTMLDivElement;
};

const defaultMarqueeProps = {
  autoFill: false,
  play: true,
  pauseOnHover: false,
  pauseOnClick: false,
  direction: "left" as MarqueeProps["direction"],
  speed: 50,
  delay: 0,
  loop: 0,
  gradient: false,
  gradientColor: "white",
  gradientWidth: 200,
};

const Marquee = (props: MarqueeProps) => {
  const mergedProps = mergeProps(defaultMarqueeProps, props);

  let containerRef: HTMLDivElement | undefined;
  let marqueeRef: HTMLDivElement | undefined;

  const [containerWidth, setContainerWidth] = createSignal(0);
  const [marqueeWidth, setMarqueeWidth] = createSignal(0);
  const [multiplier, setMultiplier] = createSignal(1);

  const resolvedChildren = children(() => props.children);

  // Calculate width of container and marquee and set multiplier
  const calculateWidth = () => {
    if (marqueeRef && containerRef) {
      const containerRect = containerRef.getBoundingClientRect();
      const marqueeRect = marqueeRef.getBoundingClientRect();
      let containerWidth = containerRect.width;
      let marqueeWidth = marqueeRect.width;

      // Swap width and height if direction is up or down
      if (mergedProps.direction === "up" || mergedProps.direction === "down") {
        containerWidth = containerRect.height;
        marqueeWidth = marqueeRect.height;
      }

      if (mergedProps.autoFill && containerWidth && marqueeWidth) {
        setMultiplier(
          marqueeWidth < containerWidth
            ? Math.ceil(containerWidth / marqueeWidth)
            : 1
        );
      } else {
        setMultiplier(1);
      }

      setContainerWidth(containerWidth);
      setMarqueeWidth(marqueeWidth);
    }
  };

  onMount(() => {
    let resizeObserver: ResizeObserver;

    if (marqueeRef && containerRef) {
      resizeObserver = new ResizeObserver(() => {
        calculateWidth();
      });
      resizeObserver.observe(containerRef);
      resizeObserver.observe(marqueeRef);
    }

    onCleanup(() => {
      if (!resizeObserver) return;
      resizeObserver.disconnect();
    });

    mergedProps.onMount?.();
  });

  createEffect(
    on(resolvedChildren, () => {
      calculateWidth();
    })
  );

  const duration = createMemo(() => {
    if (mergedProps.autoFill) {
      return (marqueeWidth() * multiplier()) / mergedProps.speed;
    } else {
      return marqueeWidth() < containerWidth()
        ? containerWidth() / mergedProps.speed
        : marqueeWidth() / mergedProps.speed;
    }
  });

  const containerStyle = createMemo(() => ({
    ...mergedProps.style,
    ["--pause-on-hover" as string]:
      !mergedProps.play || mergedProps.pauseOnHover ? "paused" : "running",
    ["--pause-on-click" as string]:
      !mergedProps.play ||
      (mergedProps.pauseOnHover && !mergedProps.pauseOnClick) ||
      mergedProps.pauseOnClick
        ? "paused"
        : "running",
    ["--width" as string]:
      mergedProps.direction === "up" || mergedProps.direction === "down"
        ? `100vh`
        : "100%",
    ["--transform" as string]:
      mergedProps.direction === "up"
        ? "rotate(-90deg)"
        : mergedProps.direction === "down"
        ? "rotate(90deg)"
        : "none",
  }));

  const gradientStyle = createMemo(() => ({
    ["--gradient-color" as string]: Array.isArray(mergedProps.gradientColor)
      ? `rgb(${mergedProps.gradientColor})`
      : mergedProps.gradientColor,
    ["--gradient-width" as string]:
      typeof mergedProps.gradientWidth === "number"
        ? `${mergedProps.gradientWidth}px`
        : mergedProps.gradientWidth,
  }));

  const marqueeStyle = createMemo(() => ({
    ["--play" as string]: mergedProps.play ? "running" : "paused",
    ["--direction" as string]:
      mergedProps.direction === "left" ? "normal" : "reverse",
    ["--duration" as string]: `${duration()}s`,
    ["--delay" as string]: `${mergedProps.delay}s`,
    ["--iteration-count" as string]: !!mergedProps.loop
      ? `${mergedProps.loop}`
      : "infinite",
    ["--min-width" as string]: mergedProps.autoFill ? `auto` : "100%",
  }));

  const childStyle = createMemo(() => ({
    ["--transform" as string]:
      mergedProps.direction === "up"
        ? "rotate(90deg)"
        : mergedProps.direction === "down"
        ? "rotate(-90deg)"
        : "none",
  }));

  return (
    <div
      ref={(el) => (props.ref = containerRef = el)}
      style={containerStyle()}
      class="sfm-marquee-container"
      classList={{
        [mergedProps.class || ""]: !!mergedProps.class,
      }}
    >
      <Show when={mergedProps.gradient}>
        <div style={gradientStyle()} class="sfm-overlay" />
      </Show>
      <div
        class="sfm-marquee"
        style={marqueeStyle()}
        onAnimationIteration={mergedProps.onCycleComplete}
        onAnimationEnd={mergedProps.onFinish}
      >
        <div class="sfm-initial-child-container" ref={marqueeRef}>
          <MultiplyChildren multiplier={1} style={childStyle()}>
            {props.children}
          </MultiplyChildren>
        </div>
        <MultiplyChildren multiplier={multiplier() - 1} style={childStyle()}>
          {props.children}
        </MultiplyChildren>
      </div>
      <div class="sfm-marquee" style={marqueeStyle()}>
        <MultiplyChildren multiplier={multiplier()} style={childStyle()}>
          {props.children}
        </MultiplyChildren>
      </div>
    </div>
  );
};

export default Marquee;
