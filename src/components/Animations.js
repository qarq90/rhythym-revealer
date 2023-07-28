export const scaleUp = {
  initial: {
    scale: 0.75,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.5,
    },
  },
  exit: {
    scale: 0.75,
    opacity: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.5,
    },
  },
};

export const fadeLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeRight = {
  initial: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
