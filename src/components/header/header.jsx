import "../../style/general.scss";
import "./header.scss";

function Header() {

  return (
    <>
      <header>
        <div className="container site-header py-2">
          <div>
            soat
          </div>
          <a className='text-decoration-none d-flex flex-column align-items-center' href="index.js">
            <span className='h2 logo py-2 pr-2'><span className='bg-primary text-white p-2'>Online</span> Rental Home</span>
          </a>
          <div>
            til, 
          </div>
        </div>
      </header>
    </>
  )

}

export default Header;