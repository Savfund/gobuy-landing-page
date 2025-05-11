import React from "react";

export interface FlexProps {
  // justifyContent: Align content inside Flex box horizontally
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | "baseline"
    | "normal";

  // justifyItems: Defines the default justify-self for all items of the bo
  justifyItems?: "start" | "end" | "center" | "normal" | "stretch";

  // justifySelf:  sets the way a box is justified inside its alignment container along the appropriate axis.
  justifySelf?: "auto" | "start" | "end" | "center" | "stretch";

  // alignContent: Align content items inside Flex box vertically
  alignContent?:
    | "normal"
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "baseline"
    | "stretch";

  // alignItems: Align item vertically
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";

  // direction: Set direction of item placement
  direction?: "row" | "row-reverse" | "col" | "col-reverse";

  // alignSelf: Specifies alignment of content in grid-like contex
  alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";

  // wrap: Wrap up content in a Flex box
  wrap?: "no-wrap" | "wrap" | "wrap-reverse";

  // gap: Set spacing between items in Flex box
  gap?: string | number;

  // classname: Set Custom className using tailwindCSS styling
  classname?: string;

  // children: Set content contained inside the Flex box
  children?: React.ReactNode;
}
