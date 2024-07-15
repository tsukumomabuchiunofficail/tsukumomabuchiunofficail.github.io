module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.eslint.json",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prefer-arrow"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "prefer-arrow/prefer-arrow-functions": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars":"off",
        "@typescript-eslint/no-unsafe-argument":"off",
        "no-use-before-define": "off",
        "@typescript-eslint/unbound-method" : "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "lines-between-class-members": [
            "error",
            "always",
            {
                exceptAfterSingleLine: true,
            },
        ],
        "no-void": [
            "error",
            {
                allowAsStatement: true,
            },
        ],
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: "return",
            },
        ],
        // "@typescript-eslint/no-unused-vars": [
        //     "error",
        //     {
        //         vars: "all",
        //         args: "after-used",
        //         argsIgnorePattern: "_",
        //         ignoreRestSiblings: false,
        //         varsIgnorePattern: "_",
        //     },
        // ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/jsx-props-no-spreading": [
            "error",
            {
                html: "enforce",
                custom: "enforce",
                explicitSpread: "ignore",
            },
        ],
        "react/react-in-jsx-scope": "off",
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
                "disallowPrototype": true,
                "singleReturnOnly": false,
                "classPropertiesAllowed": false,
            },
        ],
        "react/function-component-definition": [
            "error",
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function",
            },
        ],
    },
    overrides: [
        {
            files: ["*.tsx", "*.ts"],
            rules: {
                "react/prop-types": "off"
            },
        },
    ],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
    "root": true
}