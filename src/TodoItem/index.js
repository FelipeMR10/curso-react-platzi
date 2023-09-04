import './TodoItem.css';
//import { VscCheck,VscClose } from "react-icons/vsc";
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}><VscCheck/></span> */}
            <CompleteIcon 
            completed={props.completed}
            onComplete={props.onComplete}
            />

            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <DeleteIcon 
            onDelete={props.onDelete}
            />
            
            {/* <span className="Icon Icon-delete" onClick={props.onDelete}><VscClose/></span> */}
        </li>

    );
}

export { TodoItem }