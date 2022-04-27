export const imagesVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1,
      display: "none",
    };
  },
  center: {
    x: 0,
    opacity: 1,
    display: "flex",
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1,
      display: "none",
    };
  },
};

export const carouselVariants = {
  selected: { scale: 1.1 },
  notSelected: { scale: 1 },
};
