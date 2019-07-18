'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // This file configures web3 with a provider from metamask.

// If metamask does not inject a provider, then use "HttpProvider"

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

  // Use the provider provided by the metamask, running into web browser.


  // Here the assumption is that metamask is installed in our browser
  // and metamask has already injected "provider" into our browser.

  // What if the metamask has not injected " provider"?????????

  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {

  // If the metamask plugin is not installed into user's chrome browser,
  // then we try to access his account through infura.

  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQU5BOztBQUVBOztBQU1BLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBRXZFOztBQUdBOzs7QUFDQTtBQUVBOztBQUVBOztBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQVpELE9BWU8sQUFFTDs7QUFDQTtBQUVBOztBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2YsQUFFRjtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZWFjdC9raWNrc3RhcnQvREFwcC1NdWx0aVBhZ2UtVGVtcGxhdGUifQ==