import React from 'react';

import Description from './Description/Description';
import PersonalAccount from './PersonalAccount/PersonalAccount';
import SocialOpportunities from './SocialOpportunities/SocialOpportunities';

import CryptoWallet from './CryptoWallet/CryptoWallet';
import Timeline from './Timeline/Timeline';
import Briefly from './Briefly/Briefly';
import Numbers from './Numbers/Numbers';

import './Main.scss';

function Main() {
  return (
    <main className='main'>
      <Description/>
      <PersonalAccount/>
      <SocialOpportunities/>
      <CryptoWallet/>
      <Timeline/>
      <Briefly/>
      <Numbers/>
    </main>
  );
}

export default Main;