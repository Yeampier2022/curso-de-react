import React from "react";
import './TodoCounter.css';


  function TodoCounter ({  totalTodos,  completedTodos, loading}){  

    return (
      <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        
        HAs completado {completedTodos} de {totalTodos} Todos</h2>
    );
}

export  { TodoCounter };