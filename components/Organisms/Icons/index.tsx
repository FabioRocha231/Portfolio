import { IconsArray } from "@/components/Atoms/Icons";

import { Fragment } from "react";

export const Icons = () => {
  return IconsArray.map((Icon, index) => (
    <Fragment key={index.toString()}>
      <Icon />
    </Fragment>
  ));
};
