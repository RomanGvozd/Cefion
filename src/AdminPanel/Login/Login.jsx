import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import { addItem } from "../../common/store/currentUser/actions";
import { accountLogin } from "../../common/api/auth.api";

import './Login.scss';

function Login() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const dispatch = useDispatch();

    const [formValues, setFormValues]=  useState({username:"", password:""});
    const [loading, setLoading] = useState(false);
    const [authorization, setAuthorization] = useState(false);

    const handleChange = ({target})=>{
        const {name,value}=target;
        setFormValues((state)=>({...state,[name]:value}));
    }

    const handleLogin = async () => {
        setLoading(true)
        await accountLogin(formValues)

        .then((response) => {
            dispatch(addItem(response.data.username, response.data.tagName, response.data.roles))
            setLoading(false)
            localStorage.setItem('tokens', response.data.token);

        }, (error) => {
            console.log(error);
            setLoading(false)
            setAuthorization(true)

        });
    }

    return(
        <section className="admin-login">
            <h1>log in</h1>
            <div className="admin-login__form">
                {authorization && <p>Неверный логин или пароль</p>}
                <input 
                    className="form__input" 
                    type="text" 
                    placeholder={language === "RU" ? "Введите имя" : "Enter your name"} 
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    />
                <input 
                    className="form__input" 
                    type="password" 
                    name="password"
                    placeholder={language === "RU" ? "Введите пароль" : "Enter your password"} 
                    value={formValues.password}
                    onChange={handleChange}
                    />
                {loading 
                ? "Loading..."
                : <button 
                    className="form__button"
                    onClick={handleLogin}
                >
                    {language === "RU"
                    ? "Авторизоваться"
                    : "Login"
                    }
                </button>}
            </div>
        </section>
    )
}

export default Login;