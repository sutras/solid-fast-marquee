import { JSX } from "solid-js";
import { Portal } from "solid-js/web";

import "./index.css";

interface DrawerProps {
  children?: JSX.Element;
  open?: boolean;
  onClose?: () => void;
}

function Drawer(props: DrawerProps) {
  return (
    <Portal>
      <div class="drawer" classList={{ open: props.open }}>
        <div class="drawer-backdrop" onClick={props.onClose}></div>
        <div class="drawer-paper">{props.children}</div>
      </div>
    </Portal>
  );
}

export default Drawer;
