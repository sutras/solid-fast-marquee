import { type RouteDefinition } from "@solidjs/router";

import Layout from "@/layout/index";
import Home from "@/pages/Home/Home";
import Documentation from "@/pages/Documentation/Documentation";
import Demo from "@/pages/Demo/Demo";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/documentation",
        component: Documentation,
      },
      {
        path: "/demo",
        component: Demo,
      },
    ],
  },
];
