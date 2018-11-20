const assert = require("assert");
const TestUtils = require("./TestUtils");
const MoneroUtils = require("../src/utils/MoneroUtils");
const TestWallet = require("./TestWallet");

// get core utils
MoneroUtils.getCoreUtils().then(function(coreUtils) {
  
  // get wallet
  let wallet = TestUtils.getWalletLocal(coreUtils);
  
  describe("Monero Wallet Local", function() {
    
    // run common tests
    TestWallet.testWallet(wallet);
    
    it("Can refresh which reports progress", async function() {
      throw new Error("Not implemented");
    });
    
    it("Can get the seed", async function() {
      let seed = await wallet.getSeed();
      MoneroUtils.validateSeed(seed);
    });
    
    it("Can get the language of the mnemonic phrase", async function() {
      throw new Error("Not implemented");
    });
    
    it("Can get the public view key", async function() {
      throw new Error("Not implemented");
    });
    
    it("Can get the public spend key", async function() {
      throw new Error("Not implemented");
    });
    
    it("Can get the private spend key", async function() {
      throw new Error("Not implemented");
    });
  });
});