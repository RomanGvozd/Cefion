import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import arr from '../blocksArray'

import './PartnersLine.scss'

function PartnersLine() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [firstElRef, setFirstElRef] = useState({});
    const [translate, setTranslate] = useState(0);
    const [blocks, setBlocks] = useState(arr);

    const [ticker, setTicker] = useState(true)

    useEffect(() => {
        const maxTranslate = firstElRef.clientWidth + 40 || 0;
        let translate = 0;
        const interval = setInterval(() => {
            if (translate === maxTranslate) {
                setTranslate(0);
                const item = blocks[0];
                const arr = blocks.slice(1);
                setBlocks([...arr, item]);
                clearInterval(interval);
            } else {
                translate++;
                setTranslate((state) => state + 1);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [firstElRef]);

    return(
        <>
            <div className="description__partners">
                <h2 className="partners__title">
                    {language === "RU"
                    ?"Наши партнеры:"
                    :"Our partners:"
                    }
                </h2>
            </div>
            <div className={theme === "dark" ? "partners__line-wrapper partners__line-dark" : "partners__line-wrapper partners__line-light"}>
                <div className={theme === "dark" ? "left-shadow-dark" : "left-shadow-light"}></div>
                <div className={theme === "dark" ? "right-shadow-dark" : "right-shadow-light"}></div>
                <div 
                    className="partners__line"
                    style={{ transform: `translateX(-${translate}px)` }}
                    onMouseEnter={()=>setTicker(false)}
                    onMouseLeave={()=>setTicker(true)}
                >
                    {blocks.map((block, index)=>(
                        <div 
                            key={block.id}
                            ref={index === 0 ? setFirstElRef : undefined}
                            className="partners__item"
                        >
                            {theme === "dark"
                            ? <img className="partners__item-image" src={require(`${block.hrefDark}`)} alt="" />
                            : <img className="partners__item-image" src={require(`${block.hrefLight}`)} alt="" />
                            }
                                
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PartnersLine;