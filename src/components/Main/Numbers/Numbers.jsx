import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { content } from "./Number.config";
import arr from "./numbersArray";

import "./Numbers.scss";

function Numbers() {
  const theme = useSelector((store) => store.theme.theme);
  const language = useSelector((store) => store.language.language);
  
  const [firstElRef, setFirstElRef] = useState({});
  const [translate, setTranslate] = useState(0);
  const [numbers, setNumbers] = useState(arr);

  useEffect(() => {
    const maxTranslate = firstElRef.clientWidth + 20 || 0;
    let translate = 0;
    const interval = setInterval(() => {
      if (translate === maxTranslate) {
        setTranslate(0);
        const item = numbers[0];
        const arr = numbers.slice(1);
        setNumbers([...arr, item]);
        clearInterval(interval);
      } else {
        translate++;
        setTranslate((state) => state + 1);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [firstElRef]);

  const { title } = content[language];

  return (
    <section
      className={
        theme === "dark" ? "numbers numbers-dark" : "numbers numbers-light"
      }
    >
      <h2 className="description__title">{title}</h2>
      <div className="numbers__line-wrapper">
        <div className={theme === "dark" ? "left-shadow-dark" : "left-shadow-light"}></div>
        <div className={theme === "dark" ? "right-shadow-dark" : "right-shadow-light"}></div>
        <div
          className="numbers__line"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {numbers.map((number, index) => (
            <div
              key={number.id}
              ref={index === 0 ? setFirstElRef : undefined}
              className="line-item"
            >
              <h6 className="line-item__title">{number.title}</h6>
              {language === "RU" ? (
                <p
                  className={
                    theme === "dark"
                      ? "line-item__text-dark"
                      : "line-item__text-light"
                  }
                >
                  {number.descriptionRU}
                </p>
              ) : (
                <p
                  className={
                    theme === "dark"
                      ? "line-item__text-dark"
                      : "line-item__text-light"
                  }
                >
                  {number.descriptionEN}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Numbers;
