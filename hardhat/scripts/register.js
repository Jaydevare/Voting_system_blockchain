const { ethers } = require("hardhat");

async function register() {
  const VoteSession = await ethers.getContract("VoteSession");

  // console.log(VoteSession.address);

  // const candidates = [
  //   { id: 69, name: "Nikhil" },
  //   { id: 999, name: "Sahil" },
  //   { id: 666, name: "Ashish" },
  // ];

  // const str = "abc";
  // await VoteSession.setVoterFace(str);
  // const getFace = await VoteSession.getVoterFace();
  // console.log(getFace);

  // register status will open
  // await VoteSession.registrationStart();

  // connecting signers to register candidates
  // const signers = await ethers.getSigners();
  // for (var i = 0; i < candidates.length; i++) {
  //   await VoteSession.connect(signers[i]).registerCandidate(
  //     candidates[i].id,
  //     candidates[i].name
  //   );
  // }
  // for (var i = 4; i < 8; i++) {
  //   await VoteSession.connect(signers[i]).registerVoter();
  // }

  // voting status will open
  // await VoteSession.votingStart();

  // connecting signers to register voters and vote
  // for (var i = 4; i < 6; i++) {
  //   await VoteSession.connect(signers[i]).vote(69);
  // }
  // for (var i = 6; i < 8; i++) {
  //   await VoteSession.connect(signers[i]).vote(666);
  // }

  // // Declaring results
  // await VoteSession.declareResult();
  // const winners = await VoteSession.getWinners();
  // console.log(winners);

  // This function will reset all data to null
  // And will start a new fresh election
  await VoteSession.startNewElection();

  // const nums = await VoteSession.getNumberOfCandidates();
  // console.log(nums);

  // // get single candidate
  // var cand = await VoteSession.getCandidate(3);
  // console.log(cand);

  // Get all the candidates
  // var cands = await VoteSession.getCandidates();
  // console.log(cands);
}

register()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
