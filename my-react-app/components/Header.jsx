import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
