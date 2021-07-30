import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            style={{backgroundColor: '#EEE'}}
            className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text} 
                <FaTimes 
                    onClick={() => onDelete(task.id)}
                    style={{ color: 'red', cursor: 'pointer', float: 'right' }} 
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;