declare module "*.png";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: any;
  const src: string;
  export default src;
}

declare type Optional<T> = T | undefined;
declare type Nullable<T> = T | null;
