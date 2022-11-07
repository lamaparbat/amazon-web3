# Amazon@3.0 WEB3 CLONE
<img width="1440" alt="Screen Shot 2022-11-07 at 20 12 21" src="https://user-images.githubusercontent.com/64581460/200334622-e47c8d01-f8a6-4abb-87a2-3d0b1ef93926.png">



## Installation guide
1. Open terminal
2. `git clone https://github.com/lamaparbat/amazon-web3.git`
3. open the recently clone project in your favourite code editor [VScode, or Webstorm, or ... ]
3. `npm install`
4. `npm run dev`



## Building steps
1. Open Vscode terminal and
   - ` npx create-next-app@latest amzon-web3 `                        [init Frontend project]
   - ` npm add -D tailwindcss postcss autoprefixer `                  [Css Framework]
      - `npx tailwindcss init -p`                  [Generate tailwindcss config file]
      -  Replace the tailwindcss.config with https://tailwindcss.com/docs/guides/nextjs
   - ` mkdir smartcontracts `                                         [Contains smartcontracts]
   -  ` npm run dev `                                                 [Start frontend server]

2. 
   
3. Install additional npm packages
   - ` npm add react-icons react-spinners react-simple-hook-modal `
   - ` npm add @walletconnect/web3-provider @web3auth/web3auth ethers`
   - ` npm add magic-sdk moment web3uikit `
   
4. Now Let`s code
   - Go to /pages/index.js page and remove the <main>...</main> and rename the title inside <head>...</head>
   
