import './header.css';

function Header() {
  return (
    <header class="header">
    <div class="header-item">
    <div class="header-child-container">
        <a href="" class="header-child">About</a><a href="" class="header-child">Store</a>
    </div>
        <div class="header-child-container">
        <a href="" class="header-child">Gmail</a><a href="" class="header-child">Images</a>
        <button class="sign-in-button">Sign in</button>
    </div>
    </div>
    </header>
  );
}

export default Header;
