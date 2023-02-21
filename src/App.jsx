import React from 'react'
import Hijo from './components/Hijo'
import './App.css'
import { Contacto } from './models/contacto.class'

const App = () => {

    const defaultContact = new Contacto('Cristhian', 'Espiritu', 'crisfind@gmail.com', false)

    return (
        <div>
            <h1>Hola desde el Padre</h1>
            <Hijo contacto={defaultContact} />
        </div>
    )
}

export default App