import React from 'react';
import './TodoItem.css';


const TodoItem = ({name, completed, archived, onDelete, onToggle}) => (
    <li className={(completed || archived) ? 'todo-completed' : 'todo-pending'}>
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
        <span onClick={onDelete}><i class="fas fa-trash-alt delete-button"></i></span>
    </li>
);

export default TodoItem;