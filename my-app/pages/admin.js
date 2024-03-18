import { abi, contractAddress } from "../constants/index";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ConnectButton } from "@web3uikit/web3";
import { useState } from "react";
import { useNotification } from "@web3uikit/core";

export default function Admin() {
  const [errors, setErrors] = useState("");
  const { chainId: chainID } = useMoralis();
  const chainId = parseInt(chainID);
  const dispatch = useNotification();

  const votingAddress =
    chainId in contractAddress ? contractAddress[chainId] : null;
  const { runContractFunction: registrationStart } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "registrationStart",
    params: {},
  });
  const { runContractFunction: votingStart } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "votingStart",
    params: {},
  });
  const { runContractFunction: declareResult } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "declareResult",
    params: {},
  });
  const { runContractFunction: getNumberOfCandidates } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "getNumberOfCandidates",
    params: {},
  });
  const { runContractFunction: getVotingStatus } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "getVotingStatus",
    params: {},
  });
  const { runContractFunction: getTotalVotes } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "getTotalVotes",
    params: {},
  });
  const { runContractFunction: getOwner } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "getOwner",
    params: {},
  });
  const { runContractFunction: startNewElection } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "startNewElection",
    params: {},
  });
  const userAddress = useMoralis().account;
  const updateErrors = async (error) => {
    let message;

    try {
      if (error.message.includes("Missing web3 instance")) {
        message = "Connect your account";
      }

      const candSize = await getNumberOfCandidates();
      const votingStatus = await getVotingStatus();
      const totalVotes = await getTotalVotes();
      const owner = await getOwner();
      console.log(votingStatus === 1);
      console.log(owner);
      console.log(error.message);

      if (userAddress.toLowerCase() != owner.toLowerCase()) {
        message = "You Are Not Owner!";
      } else if (votingStatus === 0) {
        message = "Cannot Start Registration In Voting Period";
      } else if (candSize < 2) {
        message = "Not Enough Candidates Have Registered";
      } else if (totalVotes < 1) {
        message = "Not Enough Votes To Declare Result";
      } else {
        message = "Error!";
      }
      setErrors(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccess = async (tx) => {
    await tx.wait(1);
    handleSuccessNotification(tx);
  };

  const handleError = async (error) => {
    await updateErrors(error);
    handleErrorNotification();
  };

  const handleSuccessNotification = (tx) => {
    dispatch({
      type: "success",
      message: "Transaction Complete",
      title: "Tx Notification",
      position: "topR",
    });
  };
  const handleErrorNotification = (tx) => {
    dispatch({
      type: "error",
      message: `${errors}`,
      title: "ERROR",
      position: "topR",
    });
  };
  return (
    <div className="vh-100 mt-5">
      <div className="container w-75">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-info">
                <h4 className="text-center h3 card-title">Admin panel</h4>
              </div>
              <div className="card-body h-100">
                <form>
                  <div className="form-group d-flex flex-direction-col">
                    <ConnectButton
                      onClick={(e) => e.preventDefault()}
                      moralisAuth={false}
                    />
                  </div>
                </form>
                <div className="row">
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        try {
                          registrationStart({
                            onError: (error) => {
                              handleError(error);
                            },
                            onSuccess: (tx) => {
                              handleSuccess(tx);
                            },
                          });
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Start Registration Phase
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        try {
                          votingStart({
                            onError: (error) => {
                              handleError(error);
                            },
                            onSuccess: (tx) => {
                              handleSuccess(tx);
                            },
                          });
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Start Voting Phase
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      onClick={async () => {
                        try {
                          declareResult({
                            onError: (error) => {
                              handleError(error);
                            },
                            onSuccess: (tx) => {
                              handleSuccess(tx);
                            },
                          });
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Declare Results
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      onClick={async () => {
                        try {
                          startNewElection({
                            onError: (error) => {
                              handleError(error);
                            },
                            onSuccess: (tx) => {
                              handleSuccess(tx);
                            },
                          });
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Start a new election
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
