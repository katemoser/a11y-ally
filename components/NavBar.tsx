export default function NavBar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <p className="px-2 font-semibold text-xl">A<span className="text-accent">11</span>y Ally</p>
      </div>
      <div className="flex-none">
        <p className="text-lg font-semibold px-2">Toggle high contrast mode: </p>
        <input type="checkbox" value="dracula" className="toggle theme-controller" aria-label="Toggle high contrast mode"/>
      </div>
    </nav>
  );
}
