import { Background, Border, Sizing, Spacing, Text } from "./Core";

/**
 * Description placeholder
 *
 * @export
 * @interface ContainerProps
 * @typedef {ContainerProps}
 * @template T
 * @extends {Spacing}
 * @extends {Sizing}
 * @extends {Background}
 * @extends {Border}
 * @extends {Text}
 */
export interface ContainerProps<T>
  extends Spacing,
    Sizing,
    Background,
    Border,
    Text {
  // classname: Set Custom className using tailwindCSS styling
  classname?: string;

  // zIndex: Positioning display for Container
  zIndex?: string | number;

  // boxShadow: Set box-shadow for Container using tailwindcss styling
  boxShadow?: string;

  // children: Set content contained inside the Container
  children: T;
}
