# Wymagania

- git
- node wersja 22
- pnpm zamiast npm [pnpm installation](https://pnpm.io/installation) **Prosze pamiętać żeby nie instalować z npm i nie commitować package-lock.json zamiast tego commitujemy pnpm-lock.yaml**
- pluginy do vs code: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) i [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Zalecane dodatkowe oprogramowanie:

- Jeśli pracujecie na Windows polecam WSL (Windows Subsystem Linux) z Ubuntu
- nvm - (Node Version Manger) pozwala instalować różne wersje node i przełączać się między nimi.

## Co zawiera projekt:

- `storybook`: dokumentacja komponentów
- `website`: aplikacja z next.js
- `component-library`: biblioteka komponentów

### Jak uruchomić projekt
1. `pnpm i`
2. `pnpm dev` - odpala wersje developerską

### Jak sprawdzić wersje produkcyjną
1. `pnpm build` - odpala build produkcyjny
2. `pnpm start` uruchamia build produkcyjny