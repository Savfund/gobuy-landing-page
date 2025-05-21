import { ButtonProps } from "@/types/common/Button";
import { cva } from "class-variance-authority";
import Link from "next/link";
import Flex from "./Flex";
import { UrlObject } from "url";

export const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-black text-white hover:shadow-sm hover:shadow-black"],
      secondary: [
        "bg-[#3b83ac] text-white hover:shadow-sm hover:shadow-eminence",
      ],
      tertiary: [
        "bg-white text-[#3b83ac] hover:shadow-sm hover:shadow-eminence",
      ],
      outline: [
        "bg-transparent border border-[#572978] text-[#572978] hover:bg-[#572978] hover:text-white transition",
      ],
      danger: ["bg-red-500 text-white hover:shadow-sm hover:shadow-eminence"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2", "rounded-sm"],
      medium: ["text-base", "py-2", "px-4", "rounded-md"],
      large: ["text-lg", "py-4", "px-8", "rounded-lg"],
    },
  },
  defaultVariants: {
    disabled: false,
    intent: "secondary",
    size: "medium",
  },
});

export default function Button(props: ButtonProps) {
  const { intent, size, disabled, className } = props;

  const previewIcon = () => {
    return (
      <>
        {props.prefixIcon && (
          <Flex
            direction="row"
            gap="space-x-2"
            alignItems="center"
            justifyContent="center"
          >
            <div>{props.prefixIcon}</div>
            <div>{props.children}</div>
          </Flex>
        )}
        {props.suffixIcon && (
          <Flex
            direction="row"
            gap="space-x-2"
            alignItems="center"
            justifyContent="center"
          >
            <div>{props.children}</div>
            <div>{props.suffixIcon}</div>
          </Flex>
        )}
      </>
    );
  };

  const linkButtonProperties = () => {
    return (
      <button className={button({ intent, size, disabled, className })}>
        <Link href={props.url as string | UrlObject}>
          {defaultButtonChildren()}
        </Link>
      </button>
    );
  };

  const defaultButtonProperties = () => {
    return (
      <button
        className={button({ intent, size, disabled, className })}
        onClick={props.onClick}
      >
        {defaultButtonChildren()}
      </button>
    );
  };

  const defaultButtonChildren = () =>
    props.prefixIcon || props.suffixIcon ? previewIcon() : props.children;

  if (props.asLink) {
    return linkButtonProperties();
  } else {
    return defaultButtonProperties();
  }
}
