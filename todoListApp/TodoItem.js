import React from "react"

function TodoItem(props) {
    let classes = 'todo-item'

    if (props.item.completed) {
        classes += ' checked-item'
    }
    return (
        <div className = {classes}>
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem