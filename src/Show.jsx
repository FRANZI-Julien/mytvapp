import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Show() {
    const params = useParams()
    const [show, setShow] = useState([])
    const [actors, setActors] =useState([])

useEffect(() => {
        fetch('https://api.tvmaze.com/shows/'+ params.id +'?embed=cast')
        .then((response) => response.json())
        .then((data) =>{ 
            setShow(data)
            setActors(data._embedded.cast)
            }
        )
    },[show]
)

    return(
        <div>
            <h2>{show.name}</h2>
            <div>
                <img src={show.image?.medium}></img>
            </div>
            <div>{show.summary}</div>

        </div>
    )
}