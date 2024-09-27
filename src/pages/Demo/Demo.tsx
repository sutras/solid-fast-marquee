import { SliderItems } from "../Home/SliderItems";
import { WelcomeText } from "../Home/WelcomeText";
import Marquee, { MarqueeProps } from "@/components/Marquee";
import { createSignal } from "solid-js";
import images from "@/images";

import avatar from "@/assets/images/avatar-369-456321.png";

function Demo() {
  const [index, setIndex] = createSignal(0);
  const [play, setPlay] = createSignal(true);
  const [pauseOnHover, setPauseOnHover] = createSignal(false);
  const [pauseOnClick, setPauseOnClick] = createSignal(false);
  const [autofill, setAutofill] = createSignal(true);
  const [direction, setDirection] =
    createSignal<MarqueeProps["direction"]>("left");
  const [speed, setSpeed] = createSignal(30);
  const [delay, setDelay] = createSignal(0);
  const [loop, setLoop] = createSignal(0);
  const [gradient, setGradient] = createSignal(true);
  const [gradientColor, setGradientColor] = createSignal([248, 251, 253]);
  const [gradientWidth, setGradientWidth] = createSignal(200);

  return (
    <div style={{ "margin-top": "100px" }}>
      <div
        style={{
          "font-weight": "bold",
          "text-align": "center",
          "font-size": "24px",
          "margin-bottom": "20px",
        }}
      >
        <button
          class={index() === 0 ? "marquee-button-selected" : "marquee-button"}
          onClick={() => setIndex(0)}
        >
          <h1>Images</h1>
        </button>
        <button
          class={index() === 1 ? "marquee-button-selected" : "marquee-button"}
          onClick={() => setIndex(1)}
        >
          <h1>Text</h1>
        </button>
        <button
          class={index() === 2 ? "marquee-button-selected" : "marquee-button"}
          onClick={() => setIndex(2)}
        >
          <h1>Cards</h1>
        </button>
      </div>
      <div class="demo-marquee">
        <Marquee
          autoFill={autofill()}
          play={play()}
          pauseOnHover={pauseOnHover()}
          pauseOnClick={pauseOnClick()}
          speed={speed()}
          direction={direction()}
          delay={delay()}
          loop={loop()}
          gradient={gradient()}
          gradientColor={gradientColor()}
          gradientWidth={`${gradientWidth()}px`}
        >
          {index() === 0 &&
            SliderItems.map((item) => {
              return (
                <img
                  src={images[item.src]}
                  height={50}
                  style={{ margin: "0 40px", "margin-top": "80px" }}
                  alt={item.alt}
                />
              );
            })}
          {index() === 1 &&
            WelcomeText.map((item, index) => {
              if (index % 2 === 0)
                return (
                  <h1
                    class="welcome-text"
                    style={{ color: "#444d54", "margin-top": "80px" }}
                  >
                    {item.text}
                  </h1>
                );
              else
                return (
                  <h1
                    class="welcome-text"
                    style={{ color: "#89939c", "margin-top": "80px" }}
                  >
                    {item.text}
                  </h1>
                );
            })}
          {index() === 2 && (
            <>
              <div
                class="card"
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                  "text-align": "center",
                }}
              >
                <img
                  alt=""
                  src={avatar}
                  width={100}
                  height={100}
                  style={{ "border-radius": "15px" }}
                />
                <p style={{ "margin-top": "5px", "margin-bottom": "0px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </>
          )}
        </Marquee>
      </div>

      <div class="playground">
        <div class="playground-buttons">
          {index() === 2 && (
            <button
              style={{ width: "160px" }}
              class="button"
              onClick={() => setAutofill(!autofill())}
            >
              <p>{autofill() ? "Remove autofill" : "Autofill"}</p>
            </button>
          )}
          <button
            style={{ width: "80px" }}
            class="button"
            onClick={() => setPlay(!play())}
          >
            <p>{play() ? "Pause" : "Play"}</p>
          </button>
          <button
            style={{ width: "180px" }}
            class="button"
            onClick={() => setPauseOnHover(!pauseOnHover())}
          >
            <p>{pauseOnHover() ? "Don't pause on hover" : "Pause on hover"}</p>
          </button>
          <button
            style={{ width: "170px" }}
            class="button"
            onClick={() => setPauseOnClick(!pauseOnClick())}
          >
            <p>{pauseOnClick() ? "Don't pause on click" : "Pause on click"}</p>
          </button>
          <button
            style={{ width: "120px" }}
            class="button"
            onClick={() =>
              setDirection(direction() === "left" ? "right" : "left")
            }
          >
            <p>Direction: {direction()}</p>
          </button>
          <button
            style={{ width: "120px" }}
            class="button"
            onClick={() => setGradient(!gradient())}
          >
            <p>{gradient() ? "No gradient" : "Gradient"}</p>
          </button>
        </div>

        <div class="playground-input">
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
            }}
          >
            <h3 style={{ "margin-top": "30px", "margin-bottom": "-20px" }}>
              Speed (px/s):
            </h3>
            <input
              style={{ "margin-top": "30px" }}
              value={speed()}
              onChange={(e) => setSpeed(+e.target.value)}
              class="input"
            />
          </div>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
            }}
          >
            <h3 style={{ "margin-top": "30px", "margin-bottom": "-20px" }}>
              Delay (s):
            </h3>
            <input
              style={{ "margin-top": "30px" }}
              value={delay()}
              onChange={(e) => setDelay(+e.target.value)}
              class="input"
            />
          </div>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
            }}
          >
            <h3 style={{ "margin-top": "30px", "margin-bottom": "-20px" }}>
              Loop (#):
            </h3>
            <input
              style={{ "margin-top": "30px" }}
              value={loop()}
              onChange={(e) => setLoop(+e.target.value)}
              class="input"
            />
          </div>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
            }}
          >
            <h3 style={{ "margin-top": "30px", "margin-bottom": "-20px" }}>
              Gradient color (rgb):
            </h3>
            <div
              style={{
                display: "flex",
                width: "180px",
                "justify-content": "space-between",
                margin: "auto",
                "margin-top": "30px",
              }}
            >
              <input
                value={gradientColor()[0]}
                onChange={(e) =>
                  setGradientColor([
                    +e.target.value,
                    gradientColor()[1],
                    gradientColor()[2],
                  ])
                }
                class="input"
              />
              <input
                value={gradientColor()[1]}
                onChange={(e) =>
                  setGradientColor([
                    gradientColor()[0],
                    +e.target.value,
                    gradientColor()[2],
                  ])
                }
                class="input"
              />
              <input
                value={gradientColor()[2]}
                onChange={(e) =>
                  setGradientColor([
                    gradientColor()[0],
                    gradientColor()[1],
                    +e.target.value,
                  ])
                }
                class="input"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
            }}
          >
            <h3 style={{ "margin-top": "30px", "margin-bottom": "-20px" }}>
              Gradient width (px):
            </h3>
            <input
              style={{ "margin-top": "30px" }}
              value={gradientWidth()}
              onChange={(e) => setGradientWidth(+e.target.value)}
              class="input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
