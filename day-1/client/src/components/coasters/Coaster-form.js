import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import Service from '../../service/Coaster.service'

class CoasterForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            coaster: {
                title: "",
                description: "",
                inversions: 0,
                length: 0,
                imageUrl: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this._service.postCoaster(this.state.coaster)
            .then(x => {
                this.props.closeModalWindow()
                this.props.updateCoastersList()
            })
            .catch(err => console.log(err))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            coaster: { ...this.state.coaster, [name]: value }
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.coaster.title} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.coaster.description} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="number" name="length" onChange={this.handleInputChange} value={this.state.coaster.length} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="number" name="inversions" onChange={this.handleInputChange} value={this.state.coaster.inversions} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" onChange={this.handleInputChange} value={this.state.coaster.imageUrl} />
                </Form.Group>
                <Button variant="dark" type="submit">Crear</Button>
            </Form>
        )
    }
}


export default CoasterForm