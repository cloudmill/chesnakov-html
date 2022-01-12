import { delay } from "./delay";

const FPS = 15;
const FRAME_RATE = 1000 / FPS;

const getScrollbarWidth = async () => {
  // without scrollbar
  const container = document.createElement("div");
  const content = document.createElement("div");
  container.style.cssText = `
    position: fixed;
    top: -100px;
    left: -100px;

    width: 100px;
    height: 100px;
    overflow: hidden;
    pointer-events: none;
    box-sizing: border-box;

    opacity: 0;
  `;
  container.append(content);
  document.body.append(container);

  await delay(FRAME_RATE);

  const widthWithoutScrollbar = content.getBoundingClientRect().width;

  // with scrollbar
  container.style.overflow = "scroll";

  await delay(FRAME_RATE);

  const widthWithScrollbar = content.getBoundingClientRect().width;

  container.remove();

  return widthWithoutScrollbar - widthWithScrollbar;
};

export { getScrollbarWidth };
