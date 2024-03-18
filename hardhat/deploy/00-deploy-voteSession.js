const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const VoteSession = await deploy("VoteSession", {
    from: deployer,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log("Address: ", VoteSession.address);
  log("-----------------------------------------");
};

module.exports.tags = ["all"];
