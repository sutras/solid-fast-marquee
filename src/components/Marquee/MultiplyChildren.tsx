import { For, type JSX } from "solid-js";
import WrapChildren from "./WrapChildren";

export interface MultiplyChildrenProps {
  children: JSX.Element;
  style: JSX.CSSProperties;
  multiplier: number;
}

const MultiplyChildren = (props: MultiplyChildrenProps) => {
  return (
    <For each={Array.from({ length: props.multiplier })}>
      {() => <WrapChildren style={props.style}>{props.children}</WrapChildren>}
    </For>
  );
};

export default MultiplyChildren;
