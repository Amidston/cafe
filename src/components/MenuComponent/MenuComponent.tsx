import { useTranslation } from 'react-i18next';

import CarouselComponent from './CarouselComponent';
import logo from '../../assets/menu-logo.png';

const MenuComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="menu-div">
      <img src={logo} className="body-logo" />
      <h1 className="menu-header">{t('menu')}</h1>
      <div className="menu-content">
        <ul>
          <li>
            <b>{t('menu-tab.desserts')}:</b>
          </li>
          <ul>
            <li>{t('menu-tab.cupcake')}</li>
            <li>{t('menu-tab.tiramisu')}</li>
            <li>{t('menu-tab.macarons')}</li>
            <li>{t('menu-tab.brownie')}</li>
            <li>{t('menu-tab.mochi')}</li>
            <li>{t('menu-tab.panna-cotta')}</li>
            <li>{t('menu-tab.creme-brulee')}</li>
            <li>{t('menu-tab.cheesecake')}</li>
          </ul>
          <li>
            <b>{t('menu-tab.cold-drinks')}:</b>
          </li>
          <ul>
            <li>{t('menu-tab.milkshake')}</li>
            <li>{t('menu-tab.lemonade')}</li>
          </ul>
          <li>
            <b>{t('menu-tab.hot-drinks')}:</b>
          </li>
          <ul>
            <li>{t('menu-tab.coffee')}</li>
            <li>{t('menu-tab.tea')}</li>
            <li>{t('menu-tab.mulled-wine')}</li>
          </ul>
        </ul>
        <div>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
