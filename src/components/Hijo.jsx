import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class.js'


const Hijo = ({ contacto }) => {
    return (
        <div>
            <h2>Hola desde el Hijo</h2>
            <p>{contacto.nombre}</p>
            <p>{contacto.apellido}</p>
            <p>{contacto.email}</p>
            <p>{contacto.conectado ? 'Conectado' : 'Desconectado'}</p>
        </div>
    )
}

Hijo.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default Hijo
