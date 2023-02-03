import { useTranslation } from 'react-i18next';

import logo from '../../assets/main-component.png';

const MainComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="main-div">
      <img src={logo} className="body-logo" />
      <h1 className="main-header">{t('main-tab.header')}</h1>
      <p>{t('main-tab.first')}</p>
      <br />
      <p>{t('main-tab.second')}</p>
      <br />
      <p>{t('main-tab.third')}</p>
      <br />
      <p>{t('main-tab.fourth')}</p>
      <br />
      <p>{t('main-tab.fifth')}</p>
      <br />
      <p>{t('main-tab.sixth')}</p>
    </div>
  );
};

export default MainComponent;
