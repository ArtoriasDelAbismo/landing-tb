import "./SideMenu.css";

function SideMenu() {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <a className="menu__item" href="/" target="_blank" rel="noreferrer">
            Home
          </a>
        </li>
        <li>
          <a className="menu__item" href="/" target="_blank" rel="noreferrer">
            About
          </a>
        </li>
        <li>
          <a className="menu__item" href="/" target="_blank" rel="noreferrer">
            Team
          </a>
        </li>
        <li>
          <a className="menu__item" href="/" target="_blank" rel="noreferrer">
            Contact
          </a>
        </li>
        <li>
          <a
            className="menu__item"
            href="https://tierrabatida.com.ar/"
            target="_blank"
            rel="noreferrer"
          >
            Store
          </a>
        </li>
      </ul>
    </div>
  );
}

export { SideMenu };
