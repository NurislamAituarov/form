import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title block__title">
        <h1>Site name</h1>
        <p>site caption</p>
      </div>
      <div className="header__nav">
        <nav>
          <ul className="nav__list">
            <li className="nav__list_item">main</li>
            <li className="nav__list_item">about</li>
            <li className="nav__list_item">blog</li>
            <li className="nav__list_item">store</li>
            <li className="nav__list_item">contacts</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
