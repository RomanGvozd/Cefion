import React from "react";
import {useSelector} from "react-redux";

import './PersonalAccount.scss';
import './PersonalAccountAdaptive.scss';


function PersonalAccount({openModalLogin}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className={theme === "dark" ? "personal-account personal-account-dark" : "personal-account personal-account-light"}>
            {theme === "dark" 
            ? <img className="personal-account__image" src={require('./image/personalAccountDark.png')} alt="" />
            : <img className="personal-account__image" src={require('./image/personalAccountLight.png')} alt="" />
            }
            <div className="personal-account__description">
                <h2 className="description__title">
                    {language === "RU"
                    ? "Личный аккаунт"
                    : "Personal account"
                    }
                </h2>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Создайте учётную запись на платформе, где уважают личные границы. Подпишитесь на перспективных партнёров, друзей, новых знакомых."
                    : "Create an account on a platform that respects personal boundaries. Subscribe to promising partners, friends, and new acquaintances."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "В Cefion есть расширенные возможности по настройке безопасности и конфиденциальности аккаунта. Включите 2FA и экран безопасности, придумайте проверочную фразу для входа."
                    : "Cefion has advanced options for configuring account security and privacy. Turn on 2FA and the security screen and create a passphrase to enter."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Спрячьте от других пользователей кошелёк, подписчиков и статистику. На платформе создана атмосфера анонимности и уважения к личной информации."
                    : "Hide your wallet, subscribers, and statistics from other users. The platform has an atmosphere of anonymity and respect for personal information."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Управляйте своим инвестиционным портфелем и делитесь достижениями в приложении!"
                    : "Manage your investment portfolio and share your achievements in the app!"
                    }
                </p>
                <button className="description__button" onClick={openModalLogin}>
                    {language === "RU"
                    ? "Давайте начнем"
                    : "Let's start"
                    }
                </button>
            </div>
        </section>
    );
}

export default PersonalAccount;