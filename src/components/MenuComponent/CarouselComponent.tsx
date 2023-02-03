import ImageGallery from 'react-image-gallery';

import tiramisu from '../../assets/menu/tiramisu.jpg';
import macarons from '../../assets/menu/macaron.jpg';
import brownie from '../../assets/menu/brownie.jpg';
import mochi from '../../assets/menu/mochi.jpg';
import pannaCotta from '../../assets/menu/panna-cotta.jpg';
import cremeBrulee from '../../assets/menu/creme-brulee.jpg';
import cheesecake from '../../assets/menu/cheesecake.jpg';
import milkshake from '../../assets/menu/milkshake.jpg';
import lemonade from '../../assets/menu/lemonade.jpg';
import tea from '../../assets/menu/tea.jpg';
import mulledWine from '../../assets/menu/mulled-wine.jpg';

const CarouselComponent = () => {
  const images = [
    {
      original: tiramisu
    },
    {
      original: macarons
    },
    {
      original: brownie
    },
    {
      original: mochi
    },
    {
      original: pannaCotta
    },
    {
      original: cremeBrulee
    },
    {
      original: cheesecake
    },
    {
      original: milkshake
    },
    {
      original: lemonade
    },
    {
      original: tea
    },
    {
      original: mulledWine
    }
  ];

  return <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />;
};

export default CarouselComponent;
