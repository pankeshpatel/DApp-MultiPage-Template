// This file configures web3 with a provider from metamask.

// If metamask does not inject a provider, then use "HttpProvider"

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

  // Use the provider provided by the metamask, running into web browser.


  // Here the assumption is that metamask is installed in our browser
  // and metamask has already injected "provider" into our browser.

  // What if the metamask has not injected " provider"?????????

  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {

  // If the metamask plugin is not installed into user's chrome browser,
  // then we try to access his account through infura.

  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;
