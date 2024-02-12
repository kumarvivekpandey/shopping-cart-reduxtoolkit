import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
        <nav className="flex item-center justify-between h-20 max-w-6xl mx-auto">

            <Link to={'/'} >
            <div className="ml-5">
                <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                Shopping  Cart Reduxtool Kit

                </h1>
            </div>
            </Link>
            <ul className="flex list-none item-center space-x-6 text-gray-800 font-semibold">
                <Link to={"/"}> <li className="cursor-pointer list-none">
                    
                    </li></Link>

                    <Link to ={'/cart'}> <li className="cursor-ponter list-none">Cart</li></Link>
            </ul>
        </nav ></div>
  )
}

export default Header