const FPS = 15
const FRAME_RATE = 1000 / FPS

const delay = (duration = FRAME_RATE) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

export { delay };
