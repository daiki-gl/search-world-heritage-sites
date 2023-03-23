import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BentoMenu, MenuLinks } from '..'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="container relative flex items-center justify-between p-3 mx-auto">
      <Link to="/">
        <img
          className="w-20"
          src="/img/logo-transparent-svg.svg"
          alt="Explore the world heritage site"
        />
      </Link>
      <MenuLinks isActive={isActive} />
      <BentoMenu isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default Header
