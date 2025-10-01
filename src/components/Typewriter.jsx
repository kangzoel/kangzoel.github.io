import { useState, useEffect } from "react";

const TYPEWRITER_STATE = {
  INSERTING: 0,
  PAUSING: 1,
  DELETING: 2,
};

const Typewriter = ({ texts, speed = 100, pause = 1000 }) => {
  const [state, setState] = useState(TYPEWRITER_STATE.INSERTING);
  const [textIndex, setTextIndex] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(0);

  useEffect(() => {
    let inserting, deleting;

    switch (state) {
      // INSERTING ==========================================================
      case TYPEWRITER_STATE.INSERTING:
        clearInterval(deleting);

        inserting = setInterval(() => {
          setCursorIndex((prev) => {
            if (prev == texts[textIndex].length) {
              setState(TYPEWRITER_STATE.PAUSING);
              return prev;
            } else {
              return prev + 1;
            }
          });
        }, speed);
        break;

      // PAUSING ===============================================================
      case TYPEWRITER_STATE.PAUSING:
        clearInterval(inserting);

        setTimeout(() => {
          setState(TYPEWRITER_STATE.DELETING);
        }, pause);
        break;

      // DELETING ==============================================================
      case TYPEWRITER_STATE.DELETING:
        deleting = setInterval(() => {
          setCursorIndex((prevCursor) => {
            if (prevCursor == 0) {
              setTextIndex((prevTextIndex) => {
                setState(TYPEWRITER_STATE.INSERTING);

                if (prevTextIndex + 1 < texts.length) {
                  return prevTextIndex + 1;
                } else {
                  return 0;
                }
              });
              return prevCursor;
            } else {
              return prevCursor - 1;
            }
          });
        }, speed);
        break;
    }

    return () => {
      clearInterval(inserting);
      clearInterval(deleting);
    };
  }, [state]);

  return (
    <div className="whitespace-pre-line">
      {texts[textIndex].slice(0, cursorIndex)}
      <span className="animate-ping">|</span>
    </div>
  );
};

export default Typewriter;
