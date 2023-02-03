import Layout from "../components/Layout";
import Link from "next/link";
import movies from "./data/movie";


const Home=()=>{
   return(
    <section>
    {movies.map((movie)=>(
      <Link  legacyBehavior key={movie.id} href="/[id]" as={`/${movie.id}`}>
        <a>
          <img src={movie.poster} alt={movie.title}  width="80%" />
          <h1>{movie.title}</h1>
          <h2>{movie.description}</h2>
        </a>
      </Link>
     ))}
  </section>
   )
   

}


export default Home;