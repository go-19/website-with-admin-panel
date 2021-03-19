import "../../style/general.scss";
import Logo from "../../assets/image/logo.png"
import "./header.scss";

function Header() {

  return (
    <>
      <header>
        <div className="container site-header">
          <div>
            soat
          </div>
          <a href="index.js">
            <img src={Logo} width="140" height="140" alt="logo"/>
          </a>
          <div>
            til, tema, signin signup
          </div>
        </div>
      </header>
    </>
  )

}

export default Header;