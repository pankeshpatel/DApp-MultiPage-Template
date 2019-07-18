### DApp-MultiPage-Template ###
>A template for Ethereum-based  DApp.

### A  directory layout

- `components`              --  common UI components of a web page such as header, footer  
- `ethereum`                --  ethereum files  
  - `build`                 --  compiled contracts
    - `<contract-name>.json`--  compiled contract of `<contract-name>.sol`
  - `contracts`             --  solidity contracts
    - `<contract-name>.sol` --  solidity file of smart contract
  - `<contract-name>.js`    --
  - `compile.js`            --  compiles `<contract-name>.sol` file and generates `<contract-name>.json` file
  - `deploy.js`             --   deploys the compiled contract onto Blockchain Network (e.g., Rinkeby)
  - `factory.js`            --
  - `web3.js`               --
- `pages`                   --  reactJS files to render pages
  - `index.js`              --  home page of application
- `test`                    --  test cases of smart contract
  - `<contract-name>.test.js`-- test case of the `<contract-name>`
- `package.json`          --  project information and list require dependencies for the project
- `routes.js`             --  list the routes of the project
- `server.js`             --  http server, entry point of the project
- `README.md`             --  readme file of the project
- `node_modules`          --  project dependencies

# dependencies installation

- `npm init` to generate `package.json` file
- `npm install --save ganache-cli mocha solc@0.4.17 fs-extra web3@1.0.0-beta.35` to install dependencies


### WebApp and Smart Contract Interaction ###

> This is an example of how factory pattern can be used to deploy different instances of a smart contract.

<p align="center">
<a href=""target="_blank">
<img src="https://github.com/pankeshpatel/DApp-MultiPage-Template/blob/master/resource/app-high-architecture.PNG" alt="Ethereum-based Web Application Architecture" width="550" height="280" border="10" />
</a>
</p>
