import { useTranslation } from 'react-i18next';

import logo from '../../assets/about-us-logo.png';
import polina from '../../assets/staff/polina.jpg';
import daria from '../../assets/staff/daria.jpg';
import snijana from '../../assets/staff/snijana.jpg';
import dmytro from '../../assets/staff/dmytro.jpg';

const AboutUsComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="about-div">
      <h1 className="about-header">{t('about-us')}</h1>
      <img src={logo} className="body-logo" />
      <div className="about-body">
        <div className="about-item">
          <p>
            <b>{t('about-tab.polina')}</b> & <b>{t('about-tab.daria')}</b> {t('about-tab.first')}
          </p>
          <div>
            <img src={polina} className="about-pic" />
            <img src={daria} className="about-pic" />
          </div>
        </div>
        <div className="about-item">
          <p>
            <b>{t('about-tab.snizhana')}</b> {t('about-tab.second')}
          </p>
          <div>
            <img src={snijana} className="about-pic" />
          </div>
        </div>
        <div className="about-item">
          <p>
            <b>{t('about-tab.dmytro')}</b> {t('about-tab.third')}
          </p>
          <div>
            <img src={dmytro} className="about-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
