import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";

function Listing() {

    //FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    });

    return(
        <>
            <Pagination />
            <div className="container">
                <div className="row" >
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </> 
    );
}

export default Listing;