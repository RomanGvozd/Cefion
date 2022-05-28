import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import arr from "./blocksArray";

import './Description.scss';
import './DescriptionAdaptive.scss';

function Description() {
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
        <section
            initial="hidden"
            whileInView="visible"
            className={theme === "dark" ? "description description-dark" : "description description-light"}
        >
            <div className="description__block">
                <div className="block__information">
                    <h2 className="description__title">
                        {language === "RU"
                        ? "Безопасная вселенная для общения"
                        : "Secure universe of communications"
                        }
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU" 
                        ? "Cefion — это многофункциональный мессенджер с чатами, новыми собеседниками и невероятными возможностями. Приложение, планировщик, крипто-кошелёк и социальная сеть — взрывное соединение для онлайн-коммуникации в современном мире."
                        : "Cefion is a multifunctional messenger with chats, new conversations, and incredible features. App, scheduler, crypto wallet, and social network united in the explosive mixture for online communications in the modern world."
                        }
                        
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Общайтесь в чатах, объединяйтесь в группы, а также следите за последними новостями в одном приложении."
                        : "Communicate in chats, join groups, and follow the latest news in a single app."
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Что ещё можно найти внутри Cefion? Посмотрите сами, скачав его на смартфон!"
                        : "What else can you find inside Cefion? Check it on your own by downloading it to your smartphone!"
                        }
                    </p>
                    <div className="block__download">
                        <button className="download__button download__app-store"></button>
                        <button className="download__button download__google-play"></button>
                    </div>
                </div>
                {theme === "dark" 
                ? <img className="block__image" src={require('./image/descriptionDark.png')} alt="" />
                : <img className="block__image" src={require('./image/descriptionLight.png')} alt="" />
                }
            </div>
            <div className="description__partners">
                <h2 className="partners__title">
                    {language === "RU"
                    ?"Наши партнеры:"
                    :"Our partners:"
                    }
                </h2>
                <div className="partners__line-wrapper">
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
            </div>
        </section>
    );
}

export default Description;