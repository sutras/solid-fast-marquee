import { HashRouter } from "@solidjs/router";
import { routes } from "./router";

export default function App() {
  return <HashRouter>{routes}</HashRouter>;
}
