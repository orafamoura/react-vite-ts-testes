import { NavLink } from "react-router-dom";

export default function Sidebar() {

  return (
    <header className="bg-black">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-4">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only"></span>
            <img
                alt="/"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            <NavLink to={"/"} className={({ isActive }) => isActive ? "text-sm/6 font-semibold text-gray-900" : "text-sm/6 font-semibold text-gray-500"}>
            Pagina inicial
            </NavLink>
            <NavLink to={"/pomodoro"} className={({ isActive }) => isActive ? "text-sm/6 font-semibold text-gray-900" : "text-sm/6 font-semibold text-gray-500"}>
            Pomodoro
            </NavLink>
            <NavLink to={"/cronometro"} className={({ isActive }) => isActive ? "text-sm/6 font-semibold text-gray-900" : "text-sm/6 font-semibold text-gray-500"}>
            Cronometro
            </NavLink>
        </div>
      </nav>
    </header>
  )
}


