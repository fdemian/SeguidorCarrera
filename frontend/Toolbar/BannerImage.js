import React from 'react';
import cssModules from 'react-css-modules';

import Styles from './css/BannerImage.scss';

const BannerImage = ({source}) => (
  <img src={source} styleName="BannerImage" />
);

export default cssModules(BannerImage, Styles, { allowMultiple: true });