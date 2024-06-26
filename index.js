const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jquery,
        ...globals.mocha,
        ...globals.node,
        ...globals.es6
      }
    },
    "rules": {
      // Override recommended
      "no-console": [2, { "allow": ["warn"] }],
      "no-empty": [2, { "allowEmptyCatch": true }],
      "no-unused-vars": [2, { "args": "none" }],

      // Possible Errors
      "no-extra-parens": [2, "all", { "conditionalAssign": false, "returnAssign": false, "nestedBinaryExpressions": false, "enforceForArrowConditionals": false }],

      // Best Practices
      "array-callback-return": 2,
      "block-scoped-var": 2,
      "curly": [2, "multi-line"],
      "dot-location": [2, "property"],
      "dot-notation": 2,
      "eqeqeq": [2, "smart"],
      "no-else-return": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-extra-label": 2,
      "no-implicit-globals": 2,
      "no-implied-eval": 2,
      "no-lone-blocks": 2,
      "no-loop-func": 2,
      "no-multi-spaces": [2, { "exceptions": { "ImportDeclaration": true, "VariableDeclarator": true, "FunctionDeclarator": true, "AssignmentExpression": true, "CallExpression": true } }],
      "no-multi-str": 2,
      "no-new": 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-proto": 2,
      "no-return-assign": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],
      "no-useless-call": 2,
      "no-useless-concat": 2,
      "no-useless-return": 2,
      "no-void": 2,
      "prefer-promise-reject-errors": 2,
      "radix": 2,
      "wrap-iife": [2, "inside"],
      "yoda": 2,

      // Variables
      "no-label-var": 2,
      "no-undef-init": 2,
      "no-use-before-define": 2,

      // Stylistic Issues
      "array-bracket-spacing": 2,
      "block-spacing": 2,
      "brace-style": [2, "1tbs", { "allowSingleLine": true }],
      "comma-dangle": 2,
      "comma-spacing": 2,
      "comma-style": 2,
      "computed-property-spacing": 2,
      "eol-last": 2,
      "func-call-spacing": 2,
      "indent": [2, 2, { "SwitchCase": 1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],
      "key-spacing": [2, { "align": "colon" }],
      "keyword-spacing": 2,
      "linebreak-style": 2,
      "lines-around-comment": 2,
      "new-cap": [2, { "capIsNew": false }],
      "new-parens": 2,
      "no-array-constructor": 2,
      "no-mixed-operators": 2,
      "no-multi-assign": 2,
      "no-multiple-empty-lines": 2,
      "no-nested-ternary": 2,
      "no-new-object": 2,
      "no-trailing-spaces": 2,
      "no-unneeded-ternary": 2,
      "no-whitespace-before-property": 2,
      "object-curly-spacing": [2, "always"],
      "object-shorthand": ["error", "methods"],
      "one-var": [2, { "uninitialized": "always", "initialized": "never" }],
      "operator-linebreak": [2, "before"],
      "quotes": [2, "single"],
      "semi": 2,
      "semi-spacing": 2,
      "space-before-blocks": 2,
      "space-before-function-paren": [2, "never"],
      "space-in-parens": 2,
      "space-infix-ops": 2,
      "space-unary-ops": 2,
      "template-tag-spacing": 2,
      "unicode-bom": 2,

      // ECMAScript 6
      "arrow-parens": [2, "as-needed"],
      "arrow-spacing": 2,
      "generator-star-spacing": [2, "after"],
      "no-confusing-arrow": [2, { "allowParens": true }],
      "no-duplicate-imports": 2,
      "no-useless-computed-key": 2,
      "no-useless-constructor": 2,
      "no-useless-rename": 2,
      "prefer-const": 2,
      "rest-spread-spacing": 2,
      "template-curly-spacing": 2,
      "yield-star-spacing": 2
    }
  }
];
