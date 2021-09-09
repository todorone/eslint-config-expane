# eslint-config-expane

### Installation

- install config via `yarn add --dev eslint-config-expane prettier eslint`
- if TypeScript is not installed yet, install it via `yarn add --dev typescript`
- add `.eslintrc.js` file to project root:
```
module.exports = {
  extends: ['liquidity'],
}
```
- install husky and lint-staged to auto-lint on git commit: `yarn add --dev husky lint-staged`
- add somewhere to `package.json`:
```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "tsc --noEmit"
    ]
  }, 
```
