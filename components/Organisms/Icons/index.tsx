import { IconsArray } from "@/components/Atoms/Icons";
import { IconsProps } from "@/core/types/iconProps";

export const Icons = ({ className }: IconsProps) => {
  return IconsArray.map((Icon) => {
    return <Icon key={Icon.displayName} />;
  });
};
