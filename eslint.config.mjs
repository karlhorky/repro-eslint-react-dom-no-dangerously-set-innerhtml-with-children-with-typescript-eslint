import eslintReact from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintReact.configs.recommended,
  eslintReact.configs['disable-dom'],
  {
    rules: {
      '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
    },
  },
);
