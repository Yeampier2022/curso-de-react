import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const oncancel = ()=> {
        // todo 
        setOpenModal(false)
    }
    const onChange = (event)=> {
         setNewTodoValue (event.target.value);
    }
    const onSubmit = (event)=> {
        // todo 
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)

    }

    return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo todo</label>
        <textarea
        value={newTodoValue}
        onchange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
        />
        <div className="TodoForm-buttonContainer">
            <button 
            type="button" className="TodoForm-button TodoForm-button--cancel"
            onclick={oncancel}>
                Cancelar
            </button>
            <button type="submit" className="TodoForm TodoDorm-button--add"
             >
                
                Añadir
            </button>

        </div>
    </form>
    )
}

export { TodoForm}