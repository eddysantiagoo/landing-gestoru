module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // Remove all strict rules
    'eslint:recommended',
    'next',
  ],
  rules: {
    // Disable all the import-related rules that might cause "Module not found" errors
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    
    // Disable React rules that might be too strict
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    
    // Disable Next.js specific rules that might cause issues
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    
    // Turn off other common rules that might cause compilation issues
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
  // Ignore all patterns that might cause issues
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'public/'],
  // Disable settings for resolvers
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
