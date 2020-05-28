import React from "react";

const Landing = React.lazy(() => import("../Container/landing"));
const Amazon = React.lazy(() => import("../Container/amazon"));

export const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/amazon",
    component: Amazon,
  },
];
