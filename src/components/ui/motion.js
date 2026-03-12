export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const revealSoft = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const subtleHover = {
  y: -6,
  scale: 1.01,
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 22,
  },
};

export const subtleTap = {
  scale: 0.985,
  transition: {
    type: "spring",
    stiffness: 420,
    damping: 28,
  },
};
