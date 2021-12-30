import React from 'react';
import { OpeningImage, OpeningImageDevices } from '../../assets/images';
import { MAIN, MAIN_DEVICES } from '../../constants/global';
import { FACEBOOK, INSTAGRAM, YOUTUBE } from '../../constants/social';
import SocialLink from '../sharedElements/SocialLink/SocialLink';
import { SocialWrapperDevices } from '../views/MainBanner/MainBanner.styles';
import { HomeWrapper, MainImage, MainImageDevices } from './Home.styles';

const Home = () => (
  <HomeWrapper>
    <MainImage src={OpeningImage} />
    <MainImageDevices src={OpeningImageDevices} />
    <SocialWrapperDevices>
      <SocialLink link="https://www.instagram.com/ad.valkyrias" place={MAIN_DEVICES} type={INSTAGRAM} />
      <SocialLink link="https://www.facebook.com/ad.valkyrias" place={MAIN_DEVICES} type={FACEBOOK} />
      <SocialLink link="http://www.youtube.com/channel/UC6zrBRmvXQEYdaSyKkc9YxA" place={MAIN_DEVICES} type={YOUTUBE} />
    </SocialWrapperDevices>
  </HomeWrapper>
);

export default Home;
