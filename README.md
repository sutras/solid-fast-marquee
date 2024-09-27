# Solid Fast Marquee

[Solid Fast Marquee](https://sutras.github.io/solid-fast-marquee-docs) is a lightweight Solid component that harnesses the power of CSS animations to create silky smooth marquees. (Adapted from react-fast-marquee)

[![npm](https://img.shields.io/npm/v/solid-fast-marquee.svg)](https://www.npmjs.com/package/solid-fast-marquee)
[![npm downloads](https://img.shields.io/npm/dt/solid-fast-marquee.svg)](https://www.npmjs.com/package/solid-fast-marquee)
[![npm license](https://img.shields.io/npm/l/solid-fast-marquee.svg)](https://www.npmjs.com/package/solid-fast-marquee)
[![npm type definitions](https://img.shields.io/npm/types/solid-fast-marquee.svg)](https://www.npmjs.com/package/solid-fast-marquee)

[![demogif][2]][1]

[1]: https://sutras.github.io/solid-fast-marquee-docs
[2]: https://media.giphy.com/media/6ritiN2cpvpsyz4fo6/giphy.gif "demo gif"

## Demo

Check out the demo [here](https://sutras.github.io/solid-fast-marquee-docs) and play around with some sample marquees.

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install solid-fast-marquee --save
```

If you're using `yarn`, run:

```sh
yarn add solid-fast-marquee
```

## Usage

To use the component, first import `Marquee` into your file:

```jsx
import Marquee from "solid-fast-marquee";
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```jsx
<Marquee>
  I can be a Solid component, multiple Solid components, or just some text.
</Marquee>
```

A sample file might look like this:

```jsx
import MyComponent from "../components/MyComponent";
import Marquee from "solid-fast-marquee";

const App = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;
```

## Props

| Property          | Type                                | Default  | Description                                                                                                                                                                                          |
| :---------------- | :---------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style`           | `CSSProperties`                     | `{}`     | Inline style for the container div                                                                                                                                                                   |
| `class`           | `string`                            | `""`     | Name of the css class to style the container div                                                                                                                                                     |
| `autoFill`        | `boolean`                           | `false`  | Whether to automatically fill blank space in the marquee with copies of the children or not                                                                                                          |
| `play`            | `boolean`                           | `true`   | Whether to play or pause the marquee                                                                                                                                                                 |
| `pauseOnHover`    | `boolean`                           | `false`  | Whether to pause the marquee when hovered                                                                                                                                                            |
| `pauseOnClick`    | `boolean`                           | `false`  | Whether to pause the marquee when clicked                                                                                                                                                            |
| `direction`       | `"left" \| "right"\| "up"\| "down"` | `"left"` | The direction the marquee slides <br /><br /> **Warning:** Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them |
| `speed`           | `number`                            | `50`     | Speed calculated as pixels/second                                                                                                                                                                    |
| `delay`           | `number`                            | `0`      | Duration to delay the animation after render, in seconds                                                                                                                                             |
| `loop`            | `number`                            | `0`      | The number of times the marquee should loop, 0 is equivalent to infinite                                                                                                                             |
| `gradient`        | `boolean`                           | `false`  | Whether to show the gradient or not                                                                                                                                                                  |
| `gradientColor`   | `string`                            | `white`  | The color of the gradient                                                                                                                                                                            |
| `gradientWidth`   | `number \| string`                  | `200`    | The width of the gradient on either side                                                                                                                                                             |
| `onFinish`        | `{() => void}`                      | `null`   | A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.                                                                                                        |
| `onCycleComplete` | `{() => void}`                      | `null`   | A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).                                                                                  |
| `onMount`         | `{() => void}`                      | `null`   | A callback function that is invoked once the marquee has finished mounting. It can be utilized to recalculate the page size, if necessary.                                                           |
| `children`        | `JSX.Element`                       | `null`   | The children rendered inside the marquee                                                                                                                                                             |
