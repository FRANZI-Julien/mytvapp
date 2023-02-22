import { Link } from "react-router-dom"

export function Result(props) {
    
    const {show} = props.details
    
    return(
        <div className="result">
            {/* //attention toutes les séries ne possèdent pas de miniatures
            //prévoir un rendu conditionnel  */}
            <img className="noImage" src={show.image?.medium || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' } />
            <h5>{show.name}</h5>
            <button className="btn"><Link to={'show/'+show.id}>Voir les infos</Link></button>
        </div>
    )
}

