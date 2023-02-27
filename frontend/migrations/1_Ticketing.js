// eslint-disable-next-line no-undef
const Ticketing = artifacts.require("Ticketing");

module.exports = function (deployer) {
  deployer.deploy(Ticketing);
};
