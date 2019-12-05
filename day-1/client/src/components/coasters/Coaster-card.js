import React from 'react'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

const CoasterCard = ({ _id, title, description, length, inversions, imageUrl }) => {

    return (
        <Col className="coaster-card" md={4}>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <small>Inversiones: {inversions} | Longitud: {length}</small>
            <br></br>
            <Link className="btn btn-sm btn-dark" to={`/coasters/${_id}`}>Ver detalles</Link>
        </Col >
    )
}


export default CoasterCard