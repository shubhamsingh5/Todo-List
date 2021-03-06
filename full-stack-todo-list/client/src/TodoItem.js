import React from 'react';
import './TodoItem.css';


const TodoItem = ({name, completed, archived, onDelete, onArchive, onToggle}) => (
    <li className={(completed) ? 'todo-completed' : (archived) ? 'todo-archived' : 'todo-pending'}>
        <div className='circle'
            style={{
                display: 'inline-block',
                marginRight: '8px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: '1px solid #F1F2EE'
            }}
        ></div>
        <span 
            
            onClick={onToggle}
        >
            {name}
        </span>
        <span onClick={onDelete}><i className="fas fa-trash-alt delete-button"></i></span>
        <span onClick={onArchive}><i className="fas fa-archive archive-button"></i></span>
    </li>
);

export default TodoItem;