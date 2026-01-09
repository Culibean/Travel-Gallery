import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Page logo" className="logo" />
      <h1 className="header-title">SkyLog - Your Travel Gallery</h1>
    </header>
  );
}
