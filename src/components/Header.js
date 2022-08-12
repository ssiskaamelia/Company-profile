function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      <h1>Yayasan Karya Bakti United Tractors</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Get started
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
