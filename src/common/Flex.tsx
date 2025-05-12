import { cn } from "@/helpers/classname";
import { FlexProps } from "@/types/common/Flex";

export default function Flex(props: FlexProps) {
  const {
    justifyContent,
    justifyItems,
    justifySelf,
    alignContent,
    alignItems,
    direction,
    alignSelf,
    wrap,
    gap,
    classname,
    children,
    ...rest
  } = props;
  return (
    <div
      className={`flex ${cn(
        justifyContent && `justify-${justifyContent}`,
        alignItems && `items-${alignItems}`,
        direction && `flex-${direction}`,
        wrap && `flex-${wrap}`,
        gap && gap,
        justifyItems && `justify-items-${justifyItems}`,
        justifySelf && `justify-self-${justifySelf}`,
        alignContent && `content-${alignContent}`,
        alignSelf && `self-${alignSelf}`,
        classname && classname
      )}`}
      {...rest}
    >
      {children}
    </div>
  );
}
