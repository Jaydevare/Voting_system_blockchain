import styles from "../../styles/result.module.css";

import { abi, contractAddress } from "../../constants/index";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { ConnectButton } from "@web3uikit/web3";

export default function Result() {
  const [winners, setWinners] = useState([]);
  const [tie, setTie] = useState(false);
  const { chainId: chainID } = useMoralis();
  const chainId = parseInt(chainID);
  const votingAddress =
    chainId in contractAddress ? contractAddress[chainId] : null;
  const { runContractFunction: getWinners } = useWeb3Contract({
    abi: abi,
    contractAddress: votingAddress,
    functionName: "getWinners",
    params: {},
  });

  async function updateUI() {
    try {
      const tempWinners = await getWinners();
      setWinners(tempWinners);
      if (tempWinners.length > 1) {
        setTie(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (votingAddress) {
      updateUI();
    }
  }, [votingAddress]);

  return (
    <div className={styles.content}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-info">
                <h4 className="card-title">Results</h4>
              </div>
              <form className="mt-3">
                <ConnectButton
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  moralisAuth={false}
                />
              </form>
              <div>
                {tie ? (
                  <div className="h2 text-center p-2">It's a draw</div>
                ) : (
                  ""
                )}
              </div>
              <div className="card-body">
                {winners.length > 0 && winners != undefined ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Votes</th>
                      </tr>
                    </thead>
                    <tbody id="Results">
                      {winners.map((winner, index) => {
                        return (
                          <tr key={index}>
                            <th scope="col">{winner.id.toString()}</th>
                            <th scope="col">{winner.name}</th>
                            <th scope="col">{winner.voteCount.toString()}</th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div id="not">
                    <h1>Election is Not Over Yet!!!!!</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
