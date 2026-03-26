# Foxxy Electron Companion

This repository contains a text-only Electron + Electron Forge project for the Foxxy desktop companion.

## Add local binary assets after clone

1. Clone or export this repository.
2. Place your local sprite sheet file at the project root as:
   - `Foxxy.png`
3. Confirm these files are in the same folder:
   - `main.js`
   - `index.html`
   - `package.json`
   - `Foxxy.png` (local, not committed)
4. Install dependencies and run:
   - `npm install`
   - `npm start`
5. Build distributables with:
   - `npm run make`

If `Foxxy.png` is missing, the app runs with a visible placeholder box and an on-screen message.
