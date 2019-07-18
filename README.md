### DApp-MultiPage-Template ###
>A template for Ethereum-based  DApp.

### A  directory layout

- `components`              --  common UI components of Web Page such as header, footer  
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
