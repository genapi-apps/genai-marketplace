import React, { FC, ReactNode, useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { useSwipeable } from "react-swipeable";
import { variants } from "@/utils/animationVariants";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import PrevBtn from "@/shared/NextPrev/PrevBtn";
import NextBtn from "@/shared/NextPrev/NextBtn";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";

export interface MySliderProps<T> {
  className?: string;
  itemPerRow?: number;
  data: T[];
  renderItem?: (item: T, indx: number) => ReactNode;
  arrowBtnClass?: string;
  renderSectionHeading?: ({
    onClickNext,
    onClickPrev,
    showNext,
    showPrev,
  }: {
    onClickPrev: () => void;
    onClickNext: () => void;
    showNext: boolean;
    showPrev: boolean;
  }) => ReactNode;
  hideNextPrev?: boolean;
}

export default function MySlider<T>({
  className = "",
  itemPerRow = 5,
  data,
  renderItem = () => <div></div>,
  arrowBtnClass = "top-1/2 -translate-y-1/2",
  renderSectionHeading,
  hideNextPrev = false,
}: MySliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);

  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3 || 1);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2 || 1);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < data?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  if (!numberOfItems) {
    return <div> </div>
  }
  return (
    <div className={`nc-MySlider ${className}`}>
      {renderSectionHeading &&
        renderSectionHeading({
          onClickPrev: () => changeItemId(currentIndex - 1),
          onClickNext: () => changeItemId(currentIndex + 1),
          showNext: data && data.length > currentIndex + numberOfItems,
          showPrev: !!currentIndex,
        })}

      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden  `}>
            <motion.ul
              initial={false}
              className="relative flex whitespace-nowrap -mx-1 xl:-mx-2 "
            >
              <AnimatePresence initial={false} custom={direction}>
                {data && data.length > 0 ? data.map((item, indx) => (
                  <motion.li
                    className={`relative flex-shrink-0 inline-block px-1 xl:px-2 whitespace-normal`}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    {renderItem(item, indx)}
                  </motion.li>
                )) :
               data.length === 0 &&   [1, 1, 1, 1, 1].map((item, indx) => (
                    <div className="relative flex-shrink-0 inline-block px-1 xl:px-2 whitespace-normal  " key={item}>
                      <div className="flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 shadow bg-blue-400 rounded overflow-hidden group  ">
                        <NcImage containerClassName="" src="https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png" className="object-cover rounded z-0" fill />
                        <span className="absolute top-2 left-2 z-10 text-[10px] p-2 h-[18px] flex items-center w-fit truncate bg-gray-700 text-white rounded capitalize  ">loading...</span>
                        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity  "></span>
                      </div>
                      <div className="mt-4 flex items-center animate-fade">
                        <div className="w-[200px] animate-fade flex flex-col gap-2">
                          <h2 className="text-sm text-neutral-900 dark:text-neutral-100 font-semibold h-5 bg-gray-300 whitespace-nowrap truncate overflow-hidden overflow-ellipsis"></h2>
                          <h2 className="text-xs capitalize text-neutral-900 dark:text-neutral-100 h-5 bg-gray-300 truncate overflow-hidden"></h2>
                        </div>
                      </div>
                    </div>

                  ))

                }

              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex && !hideNextPrev ? (
            <PrevBtn
              onClick={() => changeItemId(currentIndex - 1)}
              className={`w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 z-[1] ${arrowBtnClass}`}
            />
          ) : null}

          {data && data.length > currentIndex + numberOfItems && !hideNextPrev ? (
            <NextBtn
              onClick={() => changeItemId(currentIndex + 1)}
              className={`w-9 h-9 xl:w-12 xl:h-12 text-lg absolute bg-white -right-3 xl:-right-6 z-[1] ${arrowBtnClass}`}
            />
          ) : null}
        </div>
      </MotionConfig>
    </div>
  );
}
