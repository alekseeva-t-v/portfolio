const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    projects: './src/js/projects.js',
    games: './src/js/games.js',
    contacts: './src/js/contacts.js',
    aboutproject: './src/js/aboutproject.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
