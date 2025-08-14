import React from "react";
import "./ToDoList.css";

function ToDoList() {
    return (
        <div>
            <h1>Lista de tarefas</h1>
            <form>
                <input
                type="text"
                placeholder="Adicione uma tarefa"/>
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa1</span>
                    <button className="del">Deletar</button>
                </div>
                  <div className="item completo">
                    <span>Tarefa2</span>
                    <button className="del">Deletar</button>
                </div>
                <button className="deleteAll">Deletar todas</button>
            </div>
        </div>
    )
}

export default ToDoList;