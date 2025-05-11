import { cn } from "@/helpers/classname";
import { ContainerProps } from "@/types/common/Container";
import React from "react";

export default function Container<T extends React.ReactNode>(
  props: ContainerProps<T>
) {
  return (
    <div
      className={cn(
        props.background && `${props.background}`,
        props.boxShadow && `${props.boxShadow}`,
        props.size && props.size,
        props.min && props.min,
        props.max && props.max,
        props.border && props.border,
        props.outline && props.outline,
        props.style && props.style,
        props.margin && `${props.margin}`,
        props.padding && `${props.padding}`,
        props.classname && props.classname
      )}
    >
      {props.children}
    </div>
  );
}
