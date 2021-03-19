import "../../style/general.scss";
import "./header.scss";
import fullDate from './date';

function Header() {

  return (
    <>
      <header>
        <div className="container site-header py-2">
          <div className='w-25 d-flex flex-column justify-content-end'>
            <p className='h5 mb-0'>{fullDate.day}, {fullDate.gettingMonth()} {fullDate.monthDay}, {fullDate.year}</p>
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
              <select className='p-2'>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <button className='theme btn py-2'>
                <i className='fas fa-moon moon'></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )

}

export default Header;