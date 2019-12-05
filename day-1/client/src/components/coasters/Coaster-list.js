import React from 'react'
import Service from '../../service/Coaster.service'

import { Container, Row, Button, Modal } from 'react-bootstrap'

import CoasterCard from './Coaster-card'
import CoasterForm from './Coaster-form'

class CoasterList extends React.Component {

    constructor() {
        super()
        this._service = new Service()
        this.state = {
            coasters: [],
            showModalWindow: false
        }
    }

    componentDidMount = () => this.updateCoastersList()

    updateCoastersList = () => {
        this._service.getAllCoasters()
            .then(allCoastersFromDB => this.setState({ coasters: allCoastersFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })

    render() {
        return (


            <section>

                <Container>

                    <h1>Índice de montañas rusas</h1>

                    <Button variant="dark" onClick={this.handleShow}>Nueva montaña rusa</Button>

                    <Row>
                        {this.state.coasters.map(coaster => <CoasterCard key={coaster._id} {...coaster} />)}
                    </Row>
                </Container>


                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva montaña rusa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CoasterForm closeModalWindow={this.handleClose} updateCoastersList={this.updateCoastersList} />
                    </Modal.Body>
                </Modal>

            </section>

        )
    }
}


export default CoasterList