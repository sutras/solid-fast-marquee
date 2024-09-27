import { children, For, type JSX } from "solid-js";

export interface WrapChildrenProps {
  children: JSX.Element;
  style: JSX.CSSProperties;
}

const WrapChildren = (props: WrapChildrenProps) => {
  const resolvedChildren = children(() => props.children);

  return (
    <For each={resolvedChildren.toArray()}>
      {(child) => (
        <div style={props.style} class="sfm-child">
          {child}
        </div>
      )}
    </For>
  );
};

export default WrapChildren;
