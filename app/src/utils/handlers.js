export const players = {
  priority: 8,
  pattern: '/senior/',
  func: async ({ route, params, state, libraries }) => {
    // 1. get all pages with parent "players".
    const playersList = await libraries.source.api.get({
      endpoint: 'pages',
      params: { per_page: 40, parent: 20 },
    });

    // 1. get "players" page itself.
    const playersPage = await libraries.source.api.get({
      endpoint: 'pages',
      params: { include: 20 },
    });

    // 2. add everything to the state.
    const items = await libraries.source.populate({
      response: playersList,
      state,
    });
    const [page] = await libraries.source.populate({
      response: playersPage,
      state,
    });
    if (page) {
      Object.assign(state.source.data[route], {
        isPlayersPage: true,
        isPostType: true,
        type: 'page',
        id: page.id,
        items: items.map(item => ({
          type: item.type,
          id: item.id,
          link: item.link,
        })),
      });
    }
    // 3. add info to data
  },
};

export const player = {
  priority: 9,
  pattern: '/senior/:slug',
  func: async ({ route, params, state, libraries }) => {
    // 1. get page with that slug.
    const response = await libraries.source.api.get({
      endpoint: 'pages',
      params: { parent: 20, slug: params.slug },
    });

    // 2. add it to the state.
    const [playerData] = await libraries.source.populate({ response, state });

    // 3. add info to data
    Object.assign(state.source.data[route], {
      id: playerData.id,
      type: playerData.type,
      isPlayer: true,
    });
  },
};
