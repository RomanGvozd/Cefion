import React from 'react';
import {useSelector} from "react-redux";

import Q12022 from './Q12022/Q12022';
import Q22022 from './Q22022/Q22022';
import Q32022 from './Q32022/Q32022';
import Q42022 from './Q42022/Q42022';
import Q12023 from './Q12023/Q12023';

import './RoadmapDescription.scss';

function RoadmapDescription() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return (
        <>
            <section className={theme ==="dark" ? "roadmap-description roadmap-description-dark" : "roadmap-description roadmap-description-light"}>
                <h2 className='roadmap-description__title'>
                    {language === "RU"
                    ? "Наши цели"
                    : "Our goals"
                    }
                </h2>
                <div className='roadmap-description__text'>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "В нашем понимании — основной целью для Everscale это привлечение большого количества юзеров (не знакомых с блокчейном) кто будет использовать токен сети как основной инструмент оплаты. Для этого мы упростим точку входа и сделаем упрощённый способ владения активами токена сетичто это даст блокчейну? — мы увеличим количество держателей токенов, сделаем нативную систему оплаты внутри приложения за счёт токена сети, что даст активность сети, привлечение новых пользователей что увеличит узнаваемость сети"
                        : "In our understanding, the main goal for Everscale is to attract a large number of users (not familiar with the blockchain) who will use the network token as the main payment tool. To do this, we will simplify the entry point and make it easier to own the assets of the network token what will this give to the blockchain? – we will increase the number of token holders, make a native payment system within the application using the network token, which will give network activity, attract new users, which will increase network recognition"
                        }
                    </p>
                </div>
                <Q12022/>
                <Q22022/>
                <Q32022/>
                <Q42022/>
                <Q12023/>
            </section>
            
        </>
    );
}

export default RoadmapDescription;