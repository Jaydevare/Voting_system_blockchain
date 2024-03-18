import Head from "next/head";

export default function sidebar() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
      </Head>
      <div className="sidebar" data-color="azure" data-background-color="white">
        <div className="sidebar-wrapper">
          <ul className="nav" style={{ marginTop: "50px" }}>
            <li className="nav-item active">
              <a className="nav-link" href="/information">
                <i className="material-icons">content_paste</i>
                <p>Information</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidate">
                <i className="material-icons">group</i>
                <p>Candidate Registration</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/voterReg">
                <i className="material-icons">person</i>
                <p>Voter Registration</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/voterLogin">
                <i className="material-icons">login</i>
                <p>Voter Login</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/voting">
                <i className="material-icons">how_to_vote</i>
                <p>Voting-Area</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/result">
                <i className="material-icons">assessment</i>
                <p>Result</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/logout">
                <i className="material-icons">logout</i>
                <p>LogOut</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
