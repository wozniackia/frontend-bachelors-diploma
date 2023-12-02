import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/login">Login</Link>
      <Link
        className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white"
        to="/headmaster"
      >
        Dyrektor
      </Link>
      <Link
        className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white"
        to="/parent"
      >
        Rodzic
      </Link>
    </div>
  );
}

export default Home;
