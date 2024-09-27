import { createEffect, createSignal, JSX, on } from "solid-js";

import { useLocation, A } from "@solidjs/router";

import Menu from "@/assets/images/menu.svg";
import Cross from "@/assets/images/cross.svg";

import "./index.css";
import Drawer from "@/components/Drawer";

function ScrollToTop() {
  const location = useLocation();

  createEffect(
    on(
      () => location.pathname,
      () => {
        window.scrollTo(0, 0);
      }
    )
  );

  return null;
}

interface LayoutProps {
  children?: JSX.Element;
}

function Layout(props: LayoutProps) {
  const [menu, setMenu] = createSignal(false);

  return (
    <div>
      <ScrollToTop />
      <div>
        <nav
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            "z-index": 100,
          }}
        >
          <ul class="nav">
            <li class="logo">
              <A href="/" class="links">
                Solid <span style={{ "font-style": "italic" }}>FAST</span>{" "}
                Marquee
              </A>
            </li>
            <li>
              <A href="/documentation" class="links">
                Documentation
              </A>
            </li>
            <li>
              <A href="/demo" class="links">
                Demo
              </A>
            </li>

            <li class="statement">(Adapted from react-fast-marquee)</li>

            <li style={{ float: "right" }}>
              <a
                class="website-links"
                href="https://yarnpkg.com/package/solid-fast-marquee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yarn
              </a>
            </li>
            <li style={{ float: "right" }}>
              <a
                class="website-links"
                href="http://npmjs.com/package/solid-fast-marquee"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm
              </a>
            </li>
            <li style={{ float: "right" }}>
              <a
                class="website-links"
                href="https://github.com/sutras/solid-fast-marquee"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <button
              type="button"
              style={{ "margin-right": "10px" }}
              class="mobile-button"
              onClick={() => setMenu(true)}
            >
              <img alt="" src={Menu} height={22} />
            </button>
          </ul>

          <Drawer open={menu()} onClose={() => setMenu(false)}>
            <div
              style={{
                width: "200px",
                display: "flex",
                "flex-direction": "column",
                padding: "40px 30px",
              }}
            >
              <button
                style={{
                  "margin-top": "-20px",
                  "margin-left": "-7px",
                  "margin-bottom": "20px",
                }}
                class="mobile-button"
                onClick={() => setMenu(false)}
              >
                <img alt="" src={Cross} height={20} />
              </button>
              <A
                onClick={() => setMenu(false)}
                style={{ "font-size": "20px", "margin-bottom": "10px" }}
                href="/"
                class="links"
              >
                Home
              </A>
              <A
                onClick={() => setMenu(false)}
                style={{ "font-size": "20px", "margin-bottom": "10px" }}
                href="/documentation"
                class="links"
              >
                Documentation
              </A>
              <A
                onClick={() => setMenu(false)}
                style={{ "font-size": "20px" }}
                href="/demo"
                class="links"
              >
                Demo
              </A>

              <div
                style={{
                  "border-top": "1.5px solid #2e353b",
                  margin: "20px 0",
                }}
              />
              <a
                onClick={() => setMenu(false)}
                style={{ "font-size": "20px", "margin-bottom": "10px" }}
                class="website-links"
                href="https://github.com/sutras/solid-fast-marquee"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                onClick={() => setMenu(false)}
                style={{ "font-size": "20px", "margin-bottom": "10px" }}
                class="website-links"
                href="http://npmjs.com/package/solid-fast-marquee"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm
              </a>
              <a
                onClick={() => setMenu(false)}
                style={{ "font-size": "20px", "margin-bottom": "10px" }}
                class="website-links"
                href="https://yarnpkg.com/package/solid-fast-marquee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yarn
              </a>
            </div>
          </Drawer>
        </nav>

        {props.children}
        <footer>
          <p class="footer-text">© 2024 wuzhitao. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
