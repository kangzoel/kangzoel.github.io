import { useEffect, useState } from "react";

export default function Typewriter({ texts, speed = 100, pause = 1000 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(1);

  useEffect(() => {
    let inserting, deleting;

    (async () => {
      // INSERTING =============================================================
      await new Promise((resolve) => {
        inserting = setInterval(() => {
          setCursorIndex((prev) => {
            if (prev < texts[textIndex].length) {
              return prev + 1;
            } else {
              resolve(1);
              clearInterval(inserting);
              return prev;
            }
          });
        }, speed);
      });

      // PAUSING ===============================================================
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, pause);
      });

      // DELETING ==============================================================
      deleting = setInterval(() => {
        setCursorIndex((prevCursorIndex) => {
          if (prevCursorIndex > 0) return prevCursorIndex - 1;

          setCursorIndex(1);
          setTextIndex((prevTextIndex) => {
            if (prevTextIndex == texts.length - 1) return 0;
            return prevTextIndex + 1;
          });
        });
      }, speed);
    })();

    return () => {
      clearInterval(inserting);
      clearInterval(deleting);
    };
  }, [textIndex]);

  return (
    <div className="whitespace-pre-line">
      {texts[textIndex].slice(0, cursorIndex)}
    </div>
  );
}
