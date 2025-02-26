import { useEffect, useState } from "react";

export default function Typewriter({ texts, speed = 100, pause = 1000 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(1);

  useEffect(() => {
    let inserting, deleting;

    new Promise((resolve) => {
      // INSERTING =============================================================
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
    })

      // PAUSING ===============================================================
      .then(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(1);
            }, pause);
          })
      )

      // DELETING ==============================================================
      .then(() => {
        deleting = setInterval(() => {
          setCursorIndex((prevCursorIndex) => {
            if (prevCursorIndex > 0) {
              return prevCursorIndex - 1;
            } else {
              setTextIndex((prevTextIndex) => {
                setCursorIndex(1);

                if (prevTextIndex + 1 < texts.length) {
                  return prevTextIndex + 1;
                } else {
                  return 0;
                }
              });
            }
          });
        }, speed);
      });

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
