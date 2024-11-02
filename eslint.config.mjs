import tseslint from "typescript-eslint";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
	...tseslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	eslintPluginPrettierRecommended,
	{
		rules: {
			"prettier/prettier": [
				"warn",
				{
					printWidth: 120,
					tabWidth: 4,
					trailingComma: "all",
					useTabs: true,
					endOfLine: "auto",
				},
			],
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { parserOptions: { ecmaVersion: 2018, sourceType: "module" } } },
];
