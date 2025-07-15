/*
 1. Lista Personal de Tareas
Descripción: Aplicación clásica de gestión de tareas con persistencia en almacenamiento local Tareas
 Principales: Agregar, editar, eliminar y marcar tareas como completadas;
 filtrar por estado;
 persistir datos localmente
 Tareas Bonus:
 Modo oscuro,
 categorías de tareas,
 fechas de vencimiento,
 niveles de prioridad
 Stack Tecnológico:
 React + Vite,
 CSS Modules,
 Local Storage
 APIs: Ninguna requerida
 Advertencia:
 Enfócate en estructura de componentes limpia y fundamentos de gestión de estado
* */

import {useState} from "react";
import {TaskItem} from "./components/TaskItem.jsx";


export default function ToDoList(){
    const [task, setTask]= useState([ ]);
    const [newTask, setNewTask]= useState('');
    const [editTaskId, setEditTaskId]= useState(null);
    const [editText, setEditText] = useState('');

    function ToogleTask(taskId, complete) {
        setTask(currenttask =>{
            return currenttask.map(task =>{
                if (task.id === taskId) return {...task, complete}

                return task
                }

            )
        })
    }

    function RemoveTask(taskId){
        setTask(currentTask=> {
            return (currentTask.filter(task => task.id !== taskId))
        })
    }

    function AddTask (){
        if (newTask === "")return
        setTask(currentTask => {
            return (
                [...currentTask, {name: newTask, complete: false, id: crypto.randomUUID()}]
            )
        })

    }
    function EditTask(taskId){
        const taskToEdit = task.find(t => t.id === taskId);
        setEditTaskId(taskId);
        setEditText(taskToEdit.name);
        }
        // Función para guardar la edición
    function SaveEdit(taskId) {
        setEditTaskId(null);
        console.log({taskId})
        const newTaskText= task.map(Task =>{
            if (Task.id === taskId){
                console.log(Task.id)
                return {...Task, name: editText};
            }
        })
        setEditText(newTaskText.name); // Limpiar el texto
    }

// Función para cancelar edición
    function CancelEdit() {
        setEditTaskId(null);
        setEditText('perro');
    }



    return(
        <div>
            <h1> TO DO LIST</h1>
            <br/>
            <ul>
                {task.map(task =>{
                    return(
                        <TaskItem
                            id={task.id}
                            {...task}
                            ToggleTask={ToogleTask}
                            RemoveTask={RemoveTask}
                            StartEdit={EditTask}
                            SaveEdit={SaveEdit}
                            CancelEdit={CancelEdit}
                            isEditing={editTaskId === task.id} // ✅ Pasar boolean
                            editText={editText}
                            setEditText={setEditText}


                        />


                    );
                })}
            </ul>
            <br/>
            <br/>
            <input
                className={'bg-gray-200 text-black'}
                type={'text'} value={newTask}
                onChange={e => setNewTask(e.target.value)}/>
            <br/>
            <br/>
                <button onClick={()=> AddTask(newTask)}>add task</button>
        </div>
    );

}