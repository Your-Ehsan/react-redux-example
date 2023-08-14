import { Link } from "react-router-dom";
import { _metaDesc } from "../constants";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center max-md:justify-evenly">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900"
        >
          <span className="ml-3 text-xl">{_metaDesc.title}</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        </nav>
        <Link to={"createpost"}>
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none active:bg-gray-300 rounded text-base md:mt-0 text-slate-400">
            Create
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="fill-slate-400 mx-2"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
