import { ReactNode } from "react";
import {
  CarouselFormatterProps,
  CarouselReset,
} from "../class/handlers/CarouselGestures";

export interface ICarouselGestures {
  ValidRight(
    page: number,
    limit: number,
    iconLeft: ReactNode,
    iconRight: ReactNode
  ): ReactNode;

  ValidLeft(page: number, iconLeft: ReactNode, iconRight: ReactNode): ReactNode;
  CaroulselFormatter({
    width,
    setBounds,
    setLimit,
    state,
  }: CarouselFormatterProps): void;

  CarouselReset({ setPage, setIsChosen, direction }: CarouselReset): void;
}
