module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    "indent": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "vue/max-attributes-per-line": [
      "warn",
      1,
      {
        "singleline": 1,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/html-indent": [
      "warn",
      2,
      {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    "vue/component-name-in-template-casing": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
