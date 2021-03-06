import React from 'react';
import { connect } from 'frontity';

import SocialLink from '../../../sharedElements/SocialLink/SocialLink';

import { COUNTRIES } from '../../../../utils/countries';
import { getFlagURL } from '../../../../utils/flags';
import { getPlayerImgPosition } from '../../../../utils/positions';
import POSITIONS from '../../../../db/positions';
import { playerData } from '../utils';

import TEXT_DETAILS from '../../../../db/playerDetails';
import { RainbowFlag } from '../../../../assets/images/flags';
import { FACEBOOK, INSTAGRAM, TWITTER } from '../../../../constants/social';
import { PLAYER } from '../../../../constants/global';
import {
  PlayersDetailsWrapper,
  OuterFootballField,
  FootballField,
  PlayerIcon,
  ContainerPlayerCity,
  ContainerPlayerInfo,
  ContainerPlayerNetworking,
  CountryFlag,
  PlayerPosition,
  PlayerDetailsInfo,
  HiddenOnSmallDevices,
} from './PlayerDetails.styles';

const PlayerDetails = ({ state }) => {
  const data = state.source.get(state.router.link);
  const { language } = state.theme;

  const player = playerData(state.source.page[data.id]);
  const country = player.country;
  const countryCode = COUNTRIES[country.toLowerCase()];
  const countryFlag = countryCode ? getFlagURL(countryCode) : RainbowFlag;
  const playerNumber = typeof player.shirt === 'number' && player.shirt;

  return (
    <PlayersDetailsWrapper>
      <OuterFootballField>
        <FootballField>
          <PlayerIcon playerImgPosition={getPlayerImgPosition(player.position)} playerPosition={player.position}>
            {playerNumber || player.alias.charAt(0)}
          </PlayerIcon>
        </FootballField>
      </OuterFootballField>
      <PlayerPosition position={player.position}>{POSITIONS[language][player.position]}</PlayerPosition>
      <PlayerDetailsInfo>
        <HiddenOnSmallDevices>{TEXT_DETAILS[language].name}:</HiddenOnSmallDevices>
        <ContainerPlayerInfo>{player.fullName}</ContainerPlayerInfo>
        <HiddenOnSmallDevices>{TEXT_DETAILS[language].from}:</HiddenOnSmallDevices>
        <ContainerPlayerCity>
          <HiddenOnSmallDevices>{player.city}</HiddenOnSmallDevices>
          <CountryFlag src={countryFlag} alt={`Flag of ${player.country}`} />
        </ContainerPlayerCity>
        {player.since && (
          <>
            <span>{TEXT_DETAILS[language].since}:</span>
            <ContainerPlayerInfo>{player.since}</ContainerPlayerInfo>
          </>
        )}
        {player.previousTeams && (
          <>
            <HiddenOnSmallDevices>{TEXT_DETAILS[language].other}:</HiddenOnSmallDevices>
            <ContainerPlayerInfo>
              <HiddenOnSmallDevices>{player.previousTeams}</HiddenOnSmallDevices>
            </ContainerPlayerInfo>
          </>
        )}
        <ContainerPlayerNetworking>
          {player.instagram && <SocialLink link={player.instagram} place={PLAYER} type={INSTAGRAM} />}
          {player.facebook && <SocialLink link={player.facebook} place={PLAYER} type={FACEBOOK} />}
          {player.twitter && <SocialLink link={player.twitter} place={PLAYER} type={TWITTER} />}
        </ContainerPlayerNetworking>
      </PlayerDetailsInfo>
    </PlayersDetailsWrapper>
  );
};

export default connect(PlayerDetails);
