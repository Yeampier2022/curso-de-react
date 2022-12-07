import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

function ChangeAlert({sincronize}) {
  const {show, toggleShow} = useStorageListener(sincronize)

  if (show) {
    return (
        <div className="ChangeAlert-bg">
          <div className="ChangeAlert-container">
          <p>Cambiaste tus todos en otra pestaña o ventana del navegador</p>
          <p>Quieres sincronizar tus Todos</p>
          <button className='Todoform-button TodoForm-button--add'
          onClick={toggleShow}
          >
            Yes!
          </button>

          </div>
            
           
        </div>
    )
  } else {
    return null
  }
}


export { ChangeAlert };