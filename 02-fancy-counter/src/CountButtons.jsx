import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CountButtons({ type, setCount,locked }) {
  const handClick = (event) => {
    setCount((prev) => {
      if (type === "min") {
        const newPrev = prev - 1;
        if (newPrev < 0) {
          return 0;
        }
        return newPrev;
      }
      const newPrev = prev + 1;
      if (newPrev > 5) {
        return 5;
      }
      return newPrev;
    });
    event.currentTarget.blur()
  };
  return (
    <button disabled={locked} className="count-btn">
      {type === "min" ? (
        <MinusIcon className="count-btn-icon" onClick={handClick} />
      ) : (
        <PlusIcon className="count-btn-icon" onClick={handClick} />
      )}
    </button>
  );
}
