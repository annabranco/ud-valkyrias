import React from 'react';
import { connect } from 'frontity';

import Link from '../../core/Link/LinkComponent';
import { Logo } from '../../../assets/images';
import SocialLink from '../../sharedElements/SocialLink/SocialLink';
import { FACEBOOK, INSTAGRAM, YOUTUBE } from '../../../constants/social';
import { MAIN } from '../../../constants/global';
import { City, Email, HomeContainer, HomeLogo, HomeTitle, SocialWrapper, TitleWrapper } from './MainBanner.styles';

const MainBanner = () => (
  <HomeContainer>
    <Link link="/home">
      <HomeLogo
        src={Logo}
        alt="Escudo de la Unión Deportiva Valkyrias. El escudo es un círculo con gruesos bordes negros, donde se ve una cadena enlazada en estilo nórdico antiguo. Dentro del círculo y ocupando todo su espacio hay el rostro frontal de una valquiria con casco y pintura de batalla. Del casco salen dos alas que se proyectan para fuera del círculo. Por detrás de la valquiria, al fondo, hay un arco iris. Circundando la valquiria, hay tres balones de fútbol, una en cada borde lateral y superior del círculo que da forma al escudo. En la parte inferior del círculo está escrito el nombre VALKYRIAS."
      />
    </Link>
    <TitleWrapper>
      <HomeTitle>
        Unión Deportiva <span>Valkyrias</span>
      </HomeTitle>
      <City>Madrid</City>
      <SocialWrapper>
        <SocialLink link="https://www.instagram.com/ad.valkyrias" place={MAIN} type={INSTAGRAM} />
        <SocialLink link="https://www.facebook.com/ad.valkyrias" place={MAIN} type={FACEBOOK} />
        <SocialLink link="http://www.youtube.com/channel/UC6zrBRmvXQEYdaSyKkc9YxA" place={MAIN} type={YOUTUBE} />
        <Email>valkyrias@valkyrias.eu</Email>
      </SocialWrapper>
    </TitleWrapper>
  </HomeContainer>
);

export default connect(MainBanner);
