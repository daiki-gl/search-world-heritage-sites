import { Link } from 'react-router-dom'

const MenuLinks = ({ isActive }) => {
  return (
    <nav
      className={`absolute z-50 ${
        isActive
          ? 'opacity-1 translate-y-[110px]'
          : 'opacity-0 -translate-y-full'
      } w-full
     bg-secondaryColor left-0 text-center duration-500 p-5`}
    >
      <ul className="text-2xl font-bold">
        <li className="mb-3">
          <Link
            className="block w-full hover:text-primaryColor duration-200"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="block w-full hover:text-primaryColor duration-200"
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuLinks
