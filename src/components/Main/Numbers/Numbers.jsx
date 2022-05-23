import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import arr from './numbersArray';

import './Numbers.scss';

function Numbers() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [numbers, setNumbers] = useState(arr)

    useEffect(() => {

        setTimeout(() => {
            const result = []
            let firstItem = null
            let count = 0
            numbers.map((number)=> {
                count++
                if (count === 1) {
                    firstItem = number
                } else {
                    result.push(number)
                }
            })
            count = 0
            result.push(firstItem)
            setNumbers(result)
        }, 8000);

    },[numbers])
    
    return(
        <section className={theme === "dark" ? "numbers numbers-dark" : "numbers numbers-light"}>
            <h2 className="description__title">
                {language === "RU"
                ? "Мы в цифрах"
                : "We are in numbers"
                }
            </h2>
            <div className="numbers__line-wrapper">
                <div className="numbers__line" >
                    {numbers.map((number)=>(
                        <div className="line-item" >
                            <h6 className="line-item__title">
                                {number.title}
                            </h6>
                            {language === "RU"
                            ? <p className={theme === "dark" ? "line-item__text-dark" : "line-item__text-light"}>{number.descriptionRU}</p>
                            : <p className={theme === "dark" ? "line-item__text-dark" : "line-item__text-light"}>{number.descriptionEN}</p>
                            }
                        </div>
                    ))}
                </div >
            </div>
        </section>
    );
}

export default Numbers;