import { IconsProps } from "@/core/types/iconProps";
import { IconsArray } from "../atoms/Icons";

export const Icons = ({ className }: IconsProps) => {
  return (
    <article id="slider-wrapper" className={`${className}`}>
      {IconsArray.map((Icon) => {
        return <Icon />;
      })}
    </article>
  );
};
