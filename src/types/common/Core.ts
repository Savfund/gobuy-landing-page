export type Spacing = {
  margin?: string | number;
  padding?: string | number;
};

export type Sizing = {
  size?: string;
  min?: string;
  max?: string;
};

export type Background = {
  background?: "primary" | "secondary" | "tertiary";
};

export type Border = {
  border?: string;
  outline?: string;
};

export type Text = {
  style?: string;
};

export type Content<T> = T;
