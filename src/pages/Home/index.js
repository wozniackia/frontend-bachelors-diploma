import { Link } from 'react-router-dom';


function Home() {
  return <div className='h-screen w-screen flex justify-center items-center'>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/Login">Login</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/p0">Wybór placówki</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/p1">Obecności</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/p2">Main Dashboard</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/p3">Pracownicy</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/p4">Wiadomości</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/Ogloszenia">Ogloszenia</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/Dzieci">Dzieci</Link>
    <Link className="m-2 p-2 rounded border border-green-500 bg-white text-green-500 hover:bg-green-300 hover:text-white" to="/Grupy">Grupy</Link>
</div>
}

export default Home;
