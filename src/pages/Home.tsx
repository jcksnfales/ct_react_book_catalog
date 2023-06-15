
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="mx-auto w-fit mt-6">
        <h1 className="font-bold text-4xl text-indigo-950 font-serif">Help catalog some books!</h1>
        <p className="mt-4 mb-5 text-center text-slate-900">We're on a journey to catalog books. Why? Because!</p>
        <Link to="/catalog" className="block mx-auto w-fit px-4 py-2 rounded border-2 text-indigo-950 border-indigo-950 hover:text-slate-200 hover:bg-indigo-950 font-semibold tracking-wide">
          Go to Catalog
        </Link>
      </div>
    </div>
  )
}

export default Home
