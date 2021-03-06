const settings = {
  name: 'ud-valkyrias',
  state: {
    frontity: {
      url: 'https://udvalkyrias.wordpress.com',
      title: 'U.D. Valkyrias',
      description:
        'Página oficial de la Unión Deportiva Valkyrias, un club deportivo que tiene por objetivo fortalecer el fútbol femenino',
    },
  },
  packages: [
    {
      name: 'app',
      state: {
        theme: {
          featured: {
            showOnList: true,
            showOnPost: false,
          },
        language: 'es',
        },
      },
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'https://public-api.wordpress.com/wp/v2/sites/udvalkyrias.wordpress.com',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
