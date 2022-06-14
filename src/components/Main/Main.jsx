import React, {useState} from 'react';
import {useSelector} from "react-redux";

import Description from './Description/Description';
import PersonalAccount from './PersonalAccount/PersonalAccount';
import SocialOpportunities from './SocialOpportunities/SocialOpportunities';
import PartnersLine from './Description/PartnersLine/PartnersLine';

import CryptoWallet from './CryptoWallet/CryptoWallet';
import Timeline from './Timeline/Timeline';
import Briefly from './Briefly/Briefly';
import Numbers from './Numbers/Numbers';

import './Main.scss';

function Main() {
  const theme = useSelector((store) => store.theme.theme);

  return (
    <main className={theme === 'dark' ? 'main main-dark' : 'main main-light'}>
      <Description/>
      <PartnersLine/>
      <PersonalAccount />
      <SocialOpportunities />
      <CryptoWallet />
      <Timeline />
      <Briefly/>
      <Numbers/>
    </main>
  );
}

export default Main;