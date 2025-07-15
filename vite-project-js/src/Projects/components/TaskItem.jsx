import {FaEdit, FaTrash} from "react-icons/fa";
import Button from "./Button.jsx";

export function TaskItem({
                             id, name, complete, ToggleTask, RemoveTask,
                             StartEdit, SaveEdit, CancelEdit, isEditing, editText, setEditText
                         }) {

    const NormalView = () => (
        <div>
            <label>
                <input
                    type={'checkbox'}
                    checked={complete}
                    onChange={e => ToggleTask(id, e.target.checked)}
                />
                <span>{name}</span>
            </label>
            <Button label={<FaTrash/>} parenthMetod={() => RemoveTask(id)}/>
            <Button label={<FaEdit/>} parenthMetod={() => StartEdit(id)}/>
        </div>
    );

    const EditView = () => (
        <div>
            <input
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
            />
            <Button label={'Guardar'} parenthMetod={SaveEdit}/>
            <Button label={'Cancelar'} parenthMetod={CancelEdit}/>
        </div>
    );

    return (
        <li key={id}>
            {isEditing ? <EditView/> : <NormalView/>}
        </li>
    );
}