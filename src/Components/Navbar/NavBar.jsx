import { ShoppingCart } from "lucide-react";
import Logo from "../../assets/DigiTools.png";

const navbar = [
  {
    id: 1,
    name: "Products",
    path: "/products",
  },
  {
    id: 2,
    name: "Features",
    path: "/features",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    id: 5,
    name: "FAQ",
    path: "/faq",
  },
];

const navLinks = navbar.map((nav) => (
  <li className="mr-5" key={nav.id}>
    <a
      className="text-[#13131395] dark:text-white font-semibold hover:text-black hover:bg-transparent dark:hover:text-white"
      href={nav.path}
    >
      {nav.name}
    </a>
  </li>
));

function NavBar() {
  return (
    <div className=" shadow-sm">
      <div className="navbar bg-base-100 mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {navLinks}
            </ul>
          </div>
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button className="flex">
            <ShoppingCart />
            <div className="badge badge-sm badge-secondary">+99</div>
          </button>
          <a className=" font-semibold cursor-pointer">Button</a>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full px-4 py-3 font-semibold cursor-pointer text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
