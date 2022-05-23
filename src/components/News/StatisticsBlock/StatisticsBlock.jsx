import React from 'react';
import {useSelector} from "react-redux";

import './StatisticsBlock.scss'

function StatisticsBlock() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return (
        <div className='statistics'>
            <div className='statistics__header'>
                <h2 className='statistics__title'>
                    {language === "RU"
                    ? "Статистика"
                    : "Statistics"
                    }
                </h2>
                <p className={theme === 'dark' ? 'statistics__subtitle-dark' : 'statistics__subtitle-light'}>
                    {language === "RU"
                    ? "Актуальные данные"
                    : "Actual data at the moment"
                    }
                </p>
            </div>

            <div className='statistic__content'>
                <div className='statistic__total-volume'>
                    <h2 className='total-volume__title'>
                        {language === "RU"
                        ? "Общий объем"
                        : "Total volume"
                        }
                    </h2>
                    <p className='total-volume__subtitle'>
                        1 296 888 $
                    </p>
                </div>
                <div className='statistic__subtotal-volume'>
                    <div className='subtotal-volume__block'>
                        <h2 className={theme === 'dark' ? 'subtotal-volume__title-dark' : 'subtotal-volume__title-light'}>
                            {language === "RU"
                            ? "24ч изменения"
                            : "24h change"
                            }
                        </h2>
                        <p className='subtotal-volume__subtitle-red'>
                            -11.44 %
                        </p>
                    </div>
                    <p className='subtotal-volume__subtitle-red'>
                        -99 990 $
                    </p>
                </div>

                <div className='statistic__total-volume'>
                    <h2 className='total-volume__title'>
                        {language === "RU"
                        ? "Капитализация"
                        : "Capitalization"
                        }
                    </h2>
                    <p className='total-volume__subtitle'>
                        1 296 888 $
                    </p>
                </div>
                <div className='statistic__subtotal-volume'>
                    <div className='subtotal-volume__block'>
                        <h2 className={theme === 'dark' ? 'subtotal-volume__title-dark' : 'subtotal-volume__title-light'}>
                            {language === "RU"
                            ? "24ч изменения"
                            : "24h change"
                            }
                        </h2>
                        <p className='subtotal-volume__subtitle-green'>
                            +16 %
                        </p>
                    </div>
                    <p className='subtotal-volume__subtitle-green'>
                        +266 660 $
                    </p>
                </div>

            </div>
        </div>
    );
}

export default StatisticsBlock;