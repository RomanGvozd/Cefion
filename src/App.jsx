import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom"

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Roadmap from './components/Roadmap/Roadmap';

import FAQs from './components/FAQs/FAqs';
import Media from './components/Media/Media';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

import ModalLogin from './components/ModalLogin/ModalLogin';
import ModalRegister from './components/ModalRegister/ModalRegister';
import ModaForgotPassword from './components/ModaForgotPassword/ModaForgotPassword';

import Admin from './AdminPanel/Admin/Admin';

import './App.scss';

function App() {
  const [ishShowLogin, setIshShowLogin] = useState(false);
  const [ishShowRegister, setIshShowRegister] = useState(false);
  const [ishShowForgot, setIshShowForgot] = useState(false);

  const openModalLogin = () => {
    setIshShowLogin(true)
    setIshShowRegister(false)
  }

  const openModalRegister = () => {
    setIshShowLogin(false)
    setIshShowRegister(true)
  }

  const openModalForgot = () => {
    setIshShowLogin(false)
    setIshShowForgot(true)
  }

  return (
    <>
      <Header openModalLogin={openModalLogin}/>
      <Routes>
        <Route path="/" element={<Main openModalLogin={openModalLogin}/>} />
        <Route path="about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news*" element={<News />} />
      </Routes>
      <Footer/>
        
      {ishShowLogin && <ModalLogin openModalRegister={openModalRegister} openModalForgot={openModalForgot} setIshShow={setIshShowLogin}/>}
      {ishShowRegister && <ModalRegister openModalLogin={openModalLogin} setIshShow={setIshShowRegister}/>}
      {ishShowForgot && <ModaForgotPassword setIshShow={setIshShowForgot}/>}
    </>
  );
}

export default App;
