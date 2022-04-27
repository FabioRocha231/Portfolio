import { ReactNode } from "react";
import { ICarouselGestures } from "../../interfaces/carouselGestures";

export type ValidRightProps = {
  page: number;
  limit: number;
  iconLeft: ReactNode;
  iconRight: ReactNode;
};

export type CarouselFormatterProps = {
  width: number;
  setBounds: Function;
  setLimit: Function;
  state: unknown[];
};

export type CarouselReset = {
  setPage: Function;
  direction: number;
};

export class CarouselGestures implements ICarouselGestures {
  ValidRight(
    page: number,
    limit: number,
    iconLeft: ReactNode,
    iconRight: ReactNode
  ): ReactNode {
    if (page !== limit - 1) return iconLeft;
    return iconRight;
  }

  ValidLeft(
    page: number,
    iconLeft: ReactNode,
    iconRight: ReactNode
  ): ReactNode {
    if (page !== 0) return iconLeft;
    return iconRight;
  }

  CaroulselFormatter({
    width,
    setBounds,
    setLimit,
    state,
  }: CarouselFormatterProps): void {
    if (!width) return;

    let calculatedValue = 0;
    width > 1600
      ? (calculatedValue = 5)
      : (calculatedValue = +(width / 400).toFixed(0));

    width < 650 ? (calculatedValue = 1) : calculatedValue;

    setBounds({
      upper: calculatedValue,
      limit: calculatedValue,
    });

    setLimit(
      +(state?.length / calculatedValue).toFixed(0) <
        +(state?.length / calculatedValue)
        ? +(state?.length / calculatedValue).toFixed(0) + 1
        : +(state?.length / calculatedValue).toFixed(0)
    );
  }

  CarouselReset({ setPage, direction }: CarouselReset): void {
    // reset the carousel if the user changes device width
    setPage([0, direction]);
  }
}
