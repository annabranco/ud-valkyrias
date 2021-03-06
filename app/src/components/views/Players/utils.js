import { COUNTRIES } from '../../../utils/countries';

export const playerData = player => {
  const playerDetails = player.excerpt.rendered;
  const playerAlias = player.slug.split('-');
  for (const [index, name] of playerAlias.entries()) {
    playerAlias[index] = name.charAt(0).toUpperCase() + name.slice(1);
  }
  const [, city, , country] = /From:\s(.*)(.*,\s)(.*)(<br \/>|&)/.exec(playerDetails);
  const countryCode = COUNTRIES[country];
  const twitter =
    playerDetails.match(/Twitter:\s(.*)(<br \/>|&)/m) && playerDetails.match(/Twitter:\s(.*)(<br \/>|&)/m)[1];

  const instagram =
    playerDetails.match(/Instagram:\s(.*)(<br \/>|&|&)/m) && playerDetails.match(/Instagram:\s(.*)(<br \/>|&)/m)[1];

  const facebook =
    playerDetails.match(/Facebook:\s(.*)(<br \/>|&)/m) && playerDetails.match(/Facebook:\s(.*)(<br \/>|&)/m)[1];

  return {
    id: player.id,
    shirt: /Shirt:\s(.*)(<br \/>|&)/.exec(playerDetails) && Number(/Shirt:\s(.*)(<br \/>|&)/.exec(playerDetails)[1]),
    alias: playerAlias[1]
      ? `${playerAlias[0].toUpperCase()} ${playerAlias[1].toUpperCase()}`
      : playerAlias[0].toUpperCase(),
    name: player.title.rendered,
    fullName: /Name:\s(.*)(<br \/>|&)/.exec(playerDetails) && /Name:\s(.*)(<br \/>|&)/.exec(playerDetails)[1],
    position: /Position:\s(.*)(<br \/>|&)/.exec(playerDetails) && /Position:\s(.*)(<br \/>|&)/.exec(playerDetails)[1],
    city,
    country,
    countryCode,
    since: /Since:\s(.*)(<br \/>|&)/.exec(playerDetails) && /Since:\s(.*)(<br \/>|&)/.exec(playerDetails)[1],
    previousTeams:
      /Previous:\s(.*)(<br \/>|&)/.exec(playerDetails) && /Previous:\s(.*)(<br \/>|&)/.exec(playerDetails)[1],
    link: `/senior/${player.slug}`,
    ...(twitter ? { twitter: `https://www.twitter.com/${twitter}` } : {}),
    ...(instagram ? { instagram: `https://www.instagram.com/${instagram}` } : {}),
    ...(facebook ? { facebook: `https://www.facebook.com/${facebook}` } : {}),
  };
};
