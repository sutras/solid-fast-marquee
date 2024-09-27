import { type RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("@/layout/index")),
    children: [
      {
        path: "/",
        component: lazy(() => import("@/pages/Home/Home")),
      },
      {
        path: "/documentation",
        component: lazy(() => import("@/pages/Documentation/Documentation")),
      },
      {
        path: "/demo",
        component: lazy(() => import("@/pages/Demo/Demo")),
      },
    ],
  },
];
