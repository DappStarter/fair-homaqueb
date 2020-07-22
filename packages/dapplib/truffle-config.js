require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food manage repeat magic concert grace bag army gas'; 
let testAccounts = [
"0x19b42d7342a8bc27371849956821336c40555520f310708a43afabcaf35442a1",
"0x405a88e6935b9c4d3d1daf4adad0f6bdb4d6b5a422bfe602485fea410e7fe306",
"0xb9df82858f16401184fca30854c0138a6de9428c84cbc8bcf8f4ca10c56d9e0b",
"0xeb75a68683ad9220025d8238c32b441498a2c6bd9d7c28b7dce9dad1c865a487",
"0x0afb2fb7989508f677fd0950bedb83bce4aa34acf538711c5d58271f5fb9ed6b",
"0x405c4d44a4e27f91be3ae9b403e27efb573213a19fac7f1fcfd3bf56dd49d496",
"0xb495324ad7eb9b8625b43a884a3d70fcc5ad0449d1ed09b38a4361c93738839b",
"0x8a814888cb70bbf5288e46f021bbf2c8abd52610815491a3fd73905092a347e1",
"0xc116c4a46e8a8e8a4942c4861d0bdebf732057325ff5ea2348225ef33a28152d",
"0xc0cef2bc2bcfa1ffac92e7e822f37e9594f81c278b766c0b192a2655a2f4ee17"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
