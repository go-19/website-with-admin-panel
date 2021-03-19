import "../../style/general.scss";
import "./header.scss";

function Header() {

  return (
    <>
      <header>
        <div className="container site-header py-2">
          <div className='w-25'>
            soat
          </div>
          <a className='w-50 text-decoration-none d-flex flex-column align-items-center' href="/">
            <span className='h2 logo py-4 pr-2 mb-0'><span className='bg-primary text-white py-4 px-2'>Online</span> Rental Home</span>
          </a>
          <div className='w-25 d-flex flex-column justify-content-start'>
            <div className='ml-auto mb-auto'>
              <button className='btn bg-primary text-white font-weight-bold mr-2'>SIGN IN</button>
              <button className='btn bg-danger text-white font-weight-bold'>SIGN UP</button>
            </div>
            <div className='d-flex ml-auto'>
              <span>til</span>
              <span>tema</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )

}

export default Header;