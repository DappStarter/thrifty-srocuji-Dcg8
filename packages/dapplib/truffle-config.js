require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note soccer evil gloom prize olympic gasp'; 
let testAccounts = [
"0x221ada7aeb763c67fdec05433f6cbf3f72674ba72d3fc149b3f8389325807a94",
"0xba2f84705eafaba17ac0be7f277265da7dd511fe354cd7f82464bbad5d6db7b5",
"0xe3100ee0ab5cc717e0fef90b4605084770d81dfa960f84f94d5e3c38fe3492c4",
"0x39865032978c7ef4eb8f10d342e4c59b88c944108fc45b3395fe50bda73ee247",
"0xb6f6a53a587e780fcd2edeff3e7823194b66aa9bec40b8331a4f98f1315ce457",
"0x80fcee84710491d41d8c0fe049ad91d9c3f93e61b78837ba0981a1badad5b041",
"0xcc37584708a1b3e1f66fc8175ee48ae30c57e75d021cbb9936e56c1fef80e8fc",
"0xf041c19105acb806600d9e95f186f97b647363ee3db6485e8e9a63b766ea45dd",
"0xc00b01792ed138a83410d00f9f0b4c44823e8af0720596eba03e65dac7107a78",
"0xc87bf2f863a1feea4e89925525d8a477dd76768858a264a91c95b311e1c907e9"
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
            version: '^0.8.0'
        }
    }
};

