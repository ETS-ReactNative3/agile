module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "react": {
      // Pragma to use, default to "React"
      "version": "detect"
    }
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-var": [
      "error"
    ],
    "eqeqeq": [
      "error"
    ]
  },
  "globals": {
    "fetch": true,
    "__TEST__": true,
    "__DEV__": true
  }
}
