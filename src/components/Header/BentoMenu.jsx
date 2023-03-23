const BentoMenu = ({ isActive, setIsActive }) => {
  return (
    <div className="menu-wrapper w-8 h-8">
      <button
        id="bento-menu"
        className={`bento-menu ${
          isActive ? 'active' : ''
        } flex flex-wrap items-center justify-center`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
        <div className="circle bg-white rounded-full p-1 duration-300"></div>
      </button>
    </div>
  )
}

export default BentoMenu
