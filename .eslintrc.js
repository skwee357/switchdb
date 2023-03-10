module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": [
            "./tsconfig.json"
        ]
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "error"
    }
}
