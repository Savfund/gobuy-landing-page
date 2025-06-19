import { Border, Sizing, Spacing, Text } from "./Core";

export interface ContainerProps<T>
  extends Spacing,
    Sizing,
    Border,
    Text {

  background?: string; 
  classname?: string;
  zIndex?: string | number;
  boxShadow?: string;
  children: T;
}
