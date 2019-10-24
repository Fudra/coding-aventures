import camelCase from 'lodash/camelCase';

const requireLanguages = require.context('.', false, /\.json$/);
const languages = {};
const keys = [];

requireLanguages.keys()
  .forEach((fileName) => {
      if (fileName === './index.js') return;

      const moduleName = camelCase(
        fileName.replace(/(\.\/|\.json)/g, ''),
      );

      languages[moduleName] = requireLanguages(fileName);
      keys.push(moduleName);
    });

export default languages;
export const langs = keys;
