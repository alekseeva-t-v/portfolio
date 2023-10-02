const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    projects: './src/js/projects.js',
    games: './src/js/games.js',
    contacts: './src/js/contacts.js',
    momentum: './src/js/momentum.js',
    bayan: './src/js/bayan.js',
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
