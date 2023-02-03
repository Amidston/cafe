import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './assets/main-logo.png';
import MainComponent from './components/MainComponent';
import MenuComponent from './components/MenuComponent';
import CharityComponent from './components/CharityComponent';
import AboutUsComponent from './components/AboutUsComponent';

function App() {
  const { t, i18n } = useTranslation();

  const [selectedTab, setSelectedTab] = useState('main');

  const displayedTabHandler = () => {
    switch (selectedTab) {
      case 'main':
        return <MainComponent />;
      case 'menu':
        return <MenuComponent />;
      case 'charity':
        return <CharityComponent />;
      case 'aboutUs':
        return <AboutUsComponent />;
    }
  };

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="header-logo" />
        <div className="header-text">
          <div className="header-name">Pawerful</div>
          <div className="header-moto">{t('moto')} ★</div>
        </div>
      </div>
      <div className="nav-bar">
        <div
          className={selectedTab === 'main' ? 'nav-item-selected' : 'nav-item'}
          onClick={() => setSelectedTab('main')}>
          {t('main')}
        </div>
        <div
          className={selectedTab === 'menu' ? 'nav-item-selected' : 'nav-item'}
          onClick={() => setSelectedTab('menu')}>
          {t('menu')}
        </div>
        <div
          className={selectedTab === 'charity' ? 'nav-item-selected' : 'nav-item'}
          onClick={() => setSelectedTab('charity')}>
          {t('charity')}
        </div>
        <div
          className={selectedTab === 'aboutUs' ? 'nav-item-selected' : 'nav-item'}
          onClick={() => setSelectedTab('aboutUs')}>
          {t('about-us')}
        </div>
        <div className="nav-item">
          <div
            onClick={() => i18n.changeLanguage('en')}
            className={i18n.language === 'en' ? 'selected-lang' : 'lang'}>
            {t('eng')}
          </div>
          <div>|</div>
          <div
            onClick={() => i18n.changeLanguage('ua')}
            className={i18n.language === 'ua' ? 'selected-lang' : 'lang'}>
            {t('ua')}
          </div>
        </div>
      </div>
      <div className="body">{displayedTabHandler()}</div>
      <div className="footer">
        Created by&nbsp;
        <a href="https://www.instagram.com//amidstony" target="_blank" rel="noreferrer">
          @amidston
        </a>
      </div>
    </div>
  );
}

export default App;
