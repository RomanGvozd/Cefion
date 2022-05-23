import React from 'react';
import {useSelector} from "react-redux";

import './CurrentRateBlock.scss'

function CurrentRateBlock() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return (
        <div className='current-rate'>
            <div className='current-rate__header'>
                <h2 className='current-rate__title'>
                    {language === "RU"
                    ? "Текущая стоимость"
                    : "Current rate"
                    }
                </h2>
                <p className={theme === 'dark' ? 'current-rate__subtitle-dark' : 'current-rate__subtitle-light'}>
                    {language === "RU"
                    ? "На всех биржах"
                    : "Across all exchanges"
                    }
                </p>
            </div>
            <div className='current-rate__block-hours'>
                <div className='block-hour'>
                    <h6 className='block-hour__title'>
                        {language === "RU"
                        ? "1ч"
                        : "1h"
                        }
                    </h6>
                    <p className='block-hour__text'>
                        +0.6 %
                    </p>
                </div>
                <div className='block-hour'>
                    <h6 className='block-hour__title'>
                        {language === "RU"
                        ? "1ч"
                        : "1h"
                        }
                    </h6>
                    <p className='block-hour__text'>
                        +0.6 %
                    </p>
                </div>
                <div className='block-hour'>
                    <h6 className='block-hour__title'>
                        {language === "RU"
                        ? "1ч"
                        : "1h"
                        }
                    </h6>
                    <p className='block-hour__text'>
                        +0.6 %
                    </p>
                </div>
                <div className='block-hour'>
                    <h6 className='block-hour__title'>
                        {language === "RU"
                        ? "1ч"
                        : "1h"
                        }
                    </h6>
                    <p className='block-hour__text'>
                        +0.6 %
                    </p>
                </div>
            </div>
            <div className='current-rate__block-prise'>
                <p className={theme === 'dark' ? 'block-prise__title block-prise__title-dark' : 'block-prise__title block-prise__title-light'}>
                    0.000000666 BTC
                </p>
                <p className='block-prise__subtitle'>
                    $0.292
                </p>
            </div>
        </div>
    );
}

export default CurrentRateBlock;