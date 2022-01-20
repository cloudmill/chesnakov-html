import BezierEasing from "bezier-easing";

const DURATION = 1500;
const DELAY = 0;
const TIMING_FUNCTION = BezierEasing(0.33, 1, 0.68, 1);

$(() => {
  const allWord = $(".word");

  if (allWord.length) {
    allWord.each(function () {
      const word = $(this);

      function startWord() {
        const allLetter = word.find(".word__letter");

        allLetter.css("transition-duration", `${DURATION / 2}ms`);

        setTimeout(() => {
          const startTime = performance.now();

          const allLetterCount = allLetter.length;
          // const progressLetter = 1 / (allLetterCount - 1);
          const progressLetter = 1 / allLetterCount;

          requestAnimationFrame(function frame() {
            const curTime = performance.now();
            const spentTime = curTime - startTime;

            const originalProgress = spentTime / (DURATION / 2);
            const progress = TIMING_FUNCTION(originalProgress);
            const progressCount = Math.floor(progress / progressLetter) + 1;

            for (let i = 0; i < progressCount && i < allLetterCount; i++) {
              allLetter[i].classList.add("word__letter--active");
            }

            if (progress < 1) {
              requestAnimationFrame(frame);
            }
          });
        });
      }

      setTimeout(() => {
        startWord();
      }, DELAY);
    });
  }
});
