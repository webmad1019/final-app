import React, { Component } from 'react'
import Service from '../../service/Coaster.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class CoasterDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { coaster: {} }
        this._service = new Service()
    }


    componentDidMount = () => {
        const coasterId = this.props.match.params.id
        this._service.getOneCoaster(coasterId)
            .then(theCoaster => this.setState({ coaster: theCoaster.data }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <Container className="coaster-details">
                <section>
                    <Row>
                        <Col md={6}>
                            <h1>Detalles de {this.state.coaster.title}</h1>
                            <p><strong>Descripción:</strong> {this.state.coaster.description}</p>
                            <hr></hr>
                            <p><small>Longitud:</small> {this.state.coaster.length} | Inversiones: {this.state.coaster.inversions}</p>
                            <Link to="/" className="btn btn-dark">Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
                        </Col>
                    </Row>
                </section>
            </Container>
        )
    }

}

export default CoasterDetail