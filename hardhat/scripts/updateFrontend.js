const { ethers, network } = require("hardhat");
const fs = require("fs");

const FRONT_END_ADDRESSES_LOCATION = "../my-app/constants/contractAddress.json";
const FRONT_END_ABI_LOCATION = "../my-app/constants/abi.json";
const updateFrontend = async () => {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating front end");
    await updateContractAddress();
    await updateAbi();
  }
};

const updateAbi = async () => {
  const VoteSession = await ethers.getContract("VoteSession");
  fs.writeFileSync(
    FRONT_END_ABI_LOCATION,
    VoteSession.interface.format(ethers.utils.FormatTypes.json)
  );
};

const updateContractAddress = async () => {
  const VoteSession = await ethers.getContract("VoteSession");
  const chainID = network.config.chainId;
  const currentAddresses = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESSES_LOCATION, "utf-8")
  );

  if (chainID in currentAddresses) {
    if (!currentAddresses[chainID].includes(VoteSession.address)) {
      currentAddresses[chainID] = VoteSession.address;
    }
  } else {
    currentAddresses[chainID] = [VoteSession.address];
  }

  fs.writeFileSync(
    FRONT_END_ADDRESSES_LOCATION,
    JSON.stringify(currentAddresses)
  );

  console.log(currentAddresses);
};

updateFrontend()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
