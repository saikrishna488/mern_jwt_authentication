module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /follow-redirects/,
        use: 'null-loader',
      });
  
      return config;
    },
  };
  