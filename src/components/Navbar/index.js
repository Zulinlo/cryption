import './styles.scss';
import logo from '../../logo.png';


const Navbar = () => {
  const reloadPage = () => {
    window.location.reload(false);
  }

  return (
    <header>
      <div className="header__link" onClick={reloadPage}>
        <h1>Cryption</h1>
        <img src={logo} alt="logo" className="header__icon" />
      </div>
    </header>
  )
}

export default Navbar;
