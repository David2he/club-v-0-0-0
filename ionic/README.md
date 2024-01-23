# Setup and run

Par défaut, le package "lodge-lib" est importé comme un package habituel : 

```json
// package.json
"dependencies": {
    "lodge-lib": "file:../lib",
  },
```

Donc à chaque modification de `../lib` il faut réinstaller le package.

Mais possible d'utiliser `npm link` pour créer un symlink dans `node_modules` entre votre package de travail et `../lib` ce qui aura pour effect de les relier en temps réel.

# Directory Structure 


```
club-v-0-0-0
├─ .browserslistrc
├─ .eslintrc.js
├─ .gitignore
├─ capacitor.config.ts
├─ cypress.config.ts
├─ index.html
├─ ionic.config.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  ├─ Brand
│  │  │  ├─ 0
│  │  │  │  ├─ bannerImg.png
│  │  │  │  ├─ lineImg.png
│  │  │  │  └─ logo.png
│  │  │  ├─ 1
│  │  │  │  ├─ bannerImg.png
│  │  │  │  ├─ lineImg.png
│  │  │  │  └─ logo.png
│  │  │  └─ 2
│  │  │     ├─ bannerImg.png
│  │  │     ├─ lineImg.png
│  │  │     └─ logo.png
│  │  ├─ iconBlockText
│  │  │  ├─ block.svg
│  │  │  ├─ block_filled.svg
│  │  │  ├─ closeCross.svg
│  │  │  ├─ container.svg
│  │  │  ├─ foldV.svg
│  │  │  ├─ line.svg
│  │  │  └─ line_filled.svg
│  │  ├─ iconInput
│  │  │  ├─ email.svg
│  │  │  ├─ identity.svg
│  │  │  ├─ password.svg
│  │  │  └─ phone.svg
│  │  ├─ iconModalLog
│  │  │  ├─ closeError.svg
│  │  │  ├─ closeSuccess.svg
│  │  │  ├─ Error.svg
│  │  │  └─ Success.svg
│  │  └─ Logo
│  │     └─ logo.svg
│  ├─ favicon.png
│  └─ manifest.json
├─ src
│  ├─ app
│  │  └─ Router.tsx
│  ├─ App.tsx
│  ├─ components
│  │  ├─ Blocks
│  │  │  ├─ DisplayItemsHomePageMenber
│  │  │  │  ├─ DisplayItemsHomePageMenber.module.css
│  │  │  │  ├─ DisplayItemsHomePageMenber.module.scss
│  │  │  │  └─ DisplayItemsHomePageMenber.tsx
│  │  │  ├─ FormLogin
│  │  │  │  ├─ FormLogin.module.scss
│  │  │  │  └─ FormLogin.tsx
│  │  │  ├─ RegisterForm
│  │  │  │  ├─ RegisterForm.module.css
│  │  │  │  ├─ RegisterForm.module.scss
│  │  │  │  └─ RegisterForm.tsx
│  │  │  ├─ HamburgerMenue
│  │  │  │  ├─ HamburgerMenue.module.scss
│  │  │  │  └─ HamburgerMenue.tsx
│  │  │  ├─ Header
│  │  │  │  ├─ Header.module.css
│  │  │  │  ├─ Header.module.scss
│  │  │  │  └─ Header.tsx
│  │  │  ├─ ParrainageCodeLoginChoice
│  │  │  │  ├─ ParrainageCodeLoginChoice.module.scss
│  │  │  │  └─ ParrainageCodeLoginChoice.tsx
│  │  │  ├─ Search
│  │  │  │  ├─ Search.module.scss
│  │  │  │  └─ Search.tsx
│  │  │  └─ Toast
│  │  │     ├─ Toast.module.scss
│  │  │     └─ Toast.tsx
│  │  └─ Elements
│  │     ├─ BlockText
│  │     │  ├─ BlockText.module.scss
│  │     │  └─ BlockText.tsx
│  │     ├─ Button
│  │     │  ├─ Button.module.css
│  │     │  ├─ Button.module.scss
│  │     │  └─ ButtonSubmit.tsx
│  │     ├─ Input
│  │     │  ├─ Input.module.scss
│  │     │  └─ Input.tsx
│  │     └─ ParrainageCodeForm
│  │        ├─ ParainageCode.scss
│  │        └─ ParrainageCodeForm.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Brand
│  │  │  ├─ Brand.module.css
│  │  │  ├─ Brand.module.scss
│  │  │  └─ Brand.tsx
│  │  ├─ Home.css
│  │  ├─ Home.scss
│  │  ├─ Home.tsx
│  │  ├─ HomePageMenber
│  │  │  ├─ HomePageMenber.scss
│  │  │  └─ HomePageMenber.tsx
│  │  ├─ Register
│  │  │  └─ Register.tsx
│  │  └─ RegisterFormContainer
│  │     ├─ RegisterFormContainer.scss
│  │     └─ RegisterFormContainer.tsx
│  ├─ services
│  │  ├─ api.tsx
│  │  ├─ contexts
│  │  │  └─ AuthContext.tsx
│  │  └─ storages
│  │     └─ useStorageServices.tsx
│  ├─ store
│  ├─ theme
│  │  ├─ rules.scss
│  │  └─ variables.scss
│  ├─ types
│  │  └─ Types.ts
│  ├─ utils
│  │  ├─ CheckCodeParrainage
│  │  │  └─ useCodeParrainageHandler.tsx
│  │  ├─ dataTest
│  │  │  └─ data.json
│  │  └─ Routing
│  │     ├─ ProtectedRoutes.tsx
│  │     └─ Redirect.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
