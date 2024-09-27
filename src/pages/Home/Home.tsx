import Marquee from "@/components/Marquee";

import GitHub from "@/assets/images/github.png";
import npm from "@/assets/images/npm.png";
import Yarn from "@/assets/images/yarn.png";

import { WelcomeText } from "./WelcomeText";
import { SliderItems } from "./SliderItems";

import { A } from "@solidjs/router";

import images from "@/images";

import avatar1 from "@/assets/images/avatar-369-456321.png";
import avatar2 from "@/assets/images/Avatar-Face-Transparent.png";
import avatar3 from "@/assets/images/avatar-372-456324.png";
import avatar4 from "@/assets/images/829471_user_512x512.png";

function Home() {
  return (
    <div class="Home">
      <div class="introduction">
        <Marquee
          gradient
          speed={40}
          gradientColor={[248, 251, 253]}
          gradientWidth="10%"
          style={{ "margin-top": "100px" }}
        >
          {WelcomeText.map((item, index) => {
            if (index % 2 === 0)
              return (
                <h1 class="welcome-text" style={{ color: "#444d54" }}>
                  {item.text}
                </h1>
              );
            else
              return (
                <h1 class="welcome-text" style={{ color: "#89939c" }}>
                  {item.text}
                </h1>
              );
          })}
        </Marquee>
        <h1 class="title">
          Solid <span style={{ "font-style": "italic" }}>FAST</span> Marquee
        </h1>
        <p class="subtitle">
          A lightweight Solid component that harnesses the power of CSS
          animations to create silky smooth marquees.
        </p>
        <div class="button-container">
          <a
            class="button"
            href="https://github.com/sutras/solid-fast-marquee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height={40} src={GitHub} alt="GitHub" />
          </a>
          <a
            class="button"
            href="http://npmjs.com/package/solid-fast-marquee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height={40} src={npm} alt="npm" />
          </a>
          <a
            class="button"
            href="https://yarnpkg.com/package/solid-fast-marquee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height={40} src={Yarn} alt="Yarn" />
          </a>
        </div>
        <p class="sponsor-text">Sponsored by (not actually):</p>
        <Marquee
          gradient
          speed={40}
          gradientColor={[248, 251, 253]}
          gradientWidth="10%"
          style={{ "margin-top": "20px" }}
        >
          {SliderItems.map((item) => {
            return (
              <img
                src={images[item.src]}
                height={50}
                style={{ margin: "0 40px" }}
                alt={item.alt}
              />
            );
          })}
        </Marquee>
      </div>

      <div class="examples">
        <h1 class="header">Examples</h1>
        <Marquee
          speed={100}
          gradient={false}
          autoFill
          style={{ "margin-top": "50px" }}
        >
          <div class="card">
            <img
              alt=""
              src={avatar1}
              width={100}
              height={100}
              style={{ "border-radius": "15px" }}
            />
            <p style={{ "margin-top": "5px", "margin-bottom": "0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div class="card">
            <img
              alt=""
              src={avatar2}
              width={100}
              height={100}
              style={{ "border-radius": "15px" }}
            />
            <p style={{ "margin-top": "5px", "margin-bottom": "0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div class="card">
            <img
              alt=""
              src={avatar3}
              width={100}
              height={100}
              style={{ "border-radius": "15px" }}
            />
            <p style={{ "margin-top": "5px", "margin-bottom": "0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div class="card">
            <img
              alt=""
              src={avatar4}
              width={100}
              height={100}
              style={{ "border-radius": "15px" }}
            />
            <p style={{ "margin-top": "5px", "margin-bottom": "0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </Marquee>
        <Marquee
          direction="right"
          gradient={false}
          style={{ "margin-top": "80px" }}
        >
          <p style={{ width: "700px", "font-size": "20px" }}>
            This long marquee with text has no gradient and is sliding to the
            right.
          </p>
        </Marquee>
        <Marquee speed={300} gradient={false} style={{ "margin-top": "80px" }}>
          <h1
            style={{
              width: "700px",
              "font-style": "italic",
              "font-size": "40px",
              margin: 0,
            }}
          >
            FAST
          </h1>
          <h1
            style={{
              width: "700px",
              "font-style": "italic",
              "font-size": "40px",
              margin: 0,
            }}
          >
            FAST
          </h1>
          <h1
            style={{
              width: "700px",
              "font-style": "italic",
              "font-size": "40px",
              margin: 0,
            }}
          >
            FAST
          </h1>
        </Marquee>
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          style={{ "margin-top": "80px" }}
        >
          <h1 style={{ width: "700px", "font-size": "30px", margin: 0 }}>
            Hover over this marquee to pause it!
          </h1>
        </Marquee>
        <Marquee
          speed={70}
          gradient={false}
          pauseOnClick={true}
          style={{ "margin-top": "80px" }}
        >
          <h1 style={{ width: "700px", "font-size": "30px", margin: 0 }}>
            Hold your click on this one to pause it!
          </h1>
        </Marquee>
        <Marquee
          speed={70}
          gradient
          gradientColor={[255, 0, 0]}
          gradientWidth="40%"
          style={{ "margin-top": "80px" }}
        >
          <h1 style={{ width: "700px", "font-size": "30px", margin: 0 }}>
            A wider, red gradient
          </h1>
        </Marquee>
      </div>

      <div class="conclusion">
        <h1 class="header">Interested?</h1>
        <p class="conclusion-text">
          View the{" "}
          <A href="/documentation" class="conclusion-link">
            docs
          </A>{" "}
          for more information or play around with it in the{" "}
          <A href="/demo" class="conclusion-link">
            demo page
          </A>
          !
        </p>
      </div>
    </div>
  );
}

export default Home;
