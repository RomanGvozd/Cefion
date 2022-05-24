import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";

import './Description.scss';
import './DescriptionAdaptive.scss';


function Description() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [blocks, setBlocks] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
    ])

    useEffect(() => {

        setTimeout(() => {
            const result = []
            let firstItem = null
            let count = 0
            blocks.map((block)=> {
                count++
                if (count === 1) {
                    firstItem = block
                } else {
                    result.push(block)
                }
            })
            count = 0
            result.push(firstItem)
            setBlocks(result)
        }, 8000);

    },[blocks])

    const imgAnimation = {
        hidden : {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.7 },
        },
        visible : {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7 },
        }
    }

    return(
        <motion.section
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
                        <button className="download__button download__android"></button>
                    </div>
                </div>
                {theme === "dark" 
                ? <motion.img variants={imgAnimation} className="block__image" src={require('./image/descriptionDark.png')} alt="" />
                : <motion.img variants={imgAnimation} className="block__image" src={require('./image/descriptionLight.png')} alt="" />
                }
            </div>
            <div className="description__partners">
                <h2 className="partners__title">
                    {language === "RU"
                    ?"Наши партнеры:"
                    :"Our partners:"
                    }
                </h2>
                <div className="partners__line">
                    {blocks.map((block)=>(
                        <div className="partners__item"></div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Description;