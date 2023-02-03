import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/charity-logo.png';
import charity from '../../assets/charity-sign.png';

const CharityComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="charity-div">
      <h1 className="charity-header">{t('charity')}</h1>
      <img src={logo} className="body-logo" />
      <p>{t('charity-tab.desc')}</p>
      <div className="counter">
        <p>{t('charity-tab.counter-text')}</p>
        <CountUp
          end={10281}
          duration={6}
          separator=" "
          suffix={' ' + t('charity-tab.counter-curr')}
        />
      </div>
      <img src={charity} className="charity-logo" />
    </div>
  );
};

export default CharityComponent;
