export default (function (api) {
  api.cache.never();
  return {
    presets: [
      [
        '@babel/preset-env',
        '@babel/preset-react',
        {
          debug: true,
          modules: false,
        },
      ],
    ],
  };
})();
