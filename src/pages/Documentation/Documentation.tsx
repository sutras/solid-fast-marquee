import SyntaxHighlighter from "@/components/SyntaxHighlighter";

const marqueeProps = {
  style: {
    description: "The inline style for the container div.",
    type: "CSSProperties",
    defaultValue: "{}",
    required: false,
  },
  class: {
    description: "The name of the css class to style the container div.",
    type: "string",
    defaultValue: '""',
    required: false,
  },
  autoFill: {
    description:
      "Whether to automatically fill blank space in the marquee with copies of the children or not.",
    type: "boolean",
    defaultValue: "false",
    required: false,
  },
  play: {
    description: "Whether to play or pause the marquee.",
    type: "boolean",
    defaultValue: "true",
    required: false,
  },
  pauseOnHover: {
    description: "Whether to pause the marquee when hovered.",
    type: "boolean",
    defaultValue: "false",
    required: false,
  },
  pauseOnClick: {
    description: "Whether to pause the marquee when clicked.",
    type: "boolean",
    defaultValue: "false",
    required: false,
  },
  direction: {
    description:
      "The direction the marquee is sliding. Warning: Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them ",
    type: '"left" | "right" | "up" | "down"',
    defaultValue: "left",
    required: false,
  },
  speed: {
    description: "The speed calculated as pixels/second.",
    type: "number",
    defaultValue: "50",
    required: false,
  },
  delay: {
    description:
      "The duration to delay the animation after render, in seconds.",
    type: "number",
    defaultValue: "0",
    required: false,
  },
  loop: {
    description:
      "The number of times the marquee should loop, 0 is equivalent to infinite.",
    type: "number",
    defaultValue: "0",
    required: false,
  },
  gradient: {
    description: "Whether to show the gradient or not.",
    type: "boolean",
    defaultValue: "false",
    required: false,
  },
  gradientColor: {
    description: "The color of the gradient.",
    type: "string",
    defaultValue: "white",
    required: false,
  },
  gradientWidth: {
    description: "The width of the gradient on either side.",
    type: "number | string",
    defaultValue: "200",
    required: false,
  },
  onFinish: {
    description:
      "A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.",
    type: "function",
    defaultValue: "{() => void}",
    required: false,
  },
  onCycleComplete: {
    description:
      "A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).",
    type: "{() => void}",
    defaultValue: "null",
    required: false,
  },
  children: {
    description: "The children rendered inside the marquee.",
    type: "JSX.Element",
    defaultValue: "null",
    required: true,
  },
};

const PropListItem = (name: string) => (
  <li style={{ "margin-bottom": "10px", "margin-left": "36px" }}>
    <a href={`#${name}`} style={{ "font-weight": "normal" }} class="menu-link">
      {name}
    </a>
  </li>
);

const PropDetails = ({
  name,
  description,
  type,
  defaultValue,
  required,
}: {
  name: string;
  description: string;
  type: string;
  defaultValue: string;
  required: boolean;
}) => {
  return (
    <>
      <a class="hash-link" id={name} href={`/documentation/#${name}`}>
        <h2>{name}</h2>
      </a>
      <p>{description}</p>
      <table class="props-data">
        <tbody>
          <tr style={{ "font-weight": "bold" }}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>{type}</td>
            <td>{defaultValue}</td>
            <td>{required ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

function Documentation() {
  return (
    <div
      style={{
        display: "flex",
        "margin-top": "30px",
        "margin-bottom": "-60px",
        "justify-content": "center",
      }}
    >
      <div class="side-menu">
        <ul
          style={{
            display: "flex",
            "flex-direction": "column",
            "padding-top": "70px",
          }}
        >
          <li style={{ "margin-bottom": "10px" }}>
            <a href="#installation" class="menu-link">
              Installation
            </a>
          </li>
          <li style={{ "margin-bottom": "10px" }}>
            <a href="#usage" class="menu-link">
              Usage
            </a>
          </li>
          <li style={{ "margin-bottom": "10px" }}>
            <a href="#props" class="menu-link">
              Props
            </a>
          </li>
          {Object.keys(marqueeProps).map(PropListItem)}
        </ul>
      </div>

      <div class="content">
        <a
          class="hash-link"
          id="installation"
          href="/documentation/#installation"
        >
          <h1>Installation</h1>
        </a>
        <p>
          If you're using <code>npm</code>, in the command prompt run:
        </p>
        <SyntaxHighlighter language="shell">
          npm install solid-fast-marquee --save
        </SyntaxHighlighter>
        <p>
          If you're using <code>yarn</code>, run:
        </p>
        <SyntaxHighlighter language="shell">
          yarn add solid-fast-marquee
        </SyntaxHighlighter>

        <a class="hash-link" id="usage" href="/documentation/#usage">
          <h1>Usage</h1>
        </a>
        <p>To use the component, first import it into your file:</p>
        <SyntaxHighlighter language="javascript">
          import Marquee from "solid-fast-marquee";
        </SyntaxHighlighter>
        <p>
          Then wrap the <code>{"<Marquee>"}</code> tags around any component or
          text you'd like to slide.
        </p>
        <SyntaxHighlighter language="html">
          {`<Marquee>
  I can be a Solid component, multiple Solid components, or just some text.
</Marquee>`}
        </SyntaxHighlighter>
        <p>A sample file might look like this:</p>
        <SyntaxHighlighter language="javascript">
          {`import MyComponent from "../components/MyComponent";
import Marquee from "solid-fast-marquee";

const App = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;`}
        </SyntaxHighlighter>
        <a class="hash-link" id="props" href="/documentation/#props">
          <h1>Props</h1>
        </a>
        {Object.entries(marqueeProps).map(([name, props]) => (
          <PropDetails name={name} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Documentation;
