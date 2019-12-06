import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/coasters',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllCoasters = () => this._service.get('/getAllCoasters')
    getOneCoaster = id => this._service.get(`/${id}`)
    postCoaster = coaster => this._service.post('/new', coaster)
}