export const fadeUp = (reducedMotion, delay = 0) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
      }

export const fadeIn = (reducedMotion, delay = 0) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.45, delay, ease: 'easeOut' },
      }

export const staggerContainer = (reducedMotion, stagger = 0.08) =>
  reducedMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-40px' },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: stagger } },
        },
      }

export const staggerItem = (reducedMotion) =>
  reducedMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          },
        },
      }

export const hoverLift = (reducedMotion) =>
  reducedMotion ? {} : { whileHover: { y: -4 }, transition: { duration: 0.2 } }
