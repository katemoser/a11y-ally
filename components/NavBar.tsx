export default function NavBar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Fun Catchy Product Name</a>
      </div>
      <div className="flex-none">
        <p className="text-lg font-semibold">Toggle high contrast mode: </p>
        <input type="checkbox" value="retro" className="toggle theme-controller" aria-label="Toggle high contrast mode"/>
      </div>
    </nav>
  );
}
