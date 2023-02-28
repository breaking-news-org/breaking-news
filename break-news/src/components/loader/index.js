import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loader() {
  return <Skeleton count={20} />; // Simple, single-line loading skeleton)
}

export default Loader;