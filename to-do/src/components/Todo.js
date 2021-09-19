import React from 'react'
const Todo = (props) => {
    var {id, title, completed, removeElement, completeTask} = props;
    return (
  <div className="task-header">
    <input type="checkbox" className="task-checkbox" id ={id}/>
    <label htmlFor={id} className="task-label"  onClick={() => completeTask(id)}>
    <span className="circle"></span>
    </label>
    <span className="task">{title}</span>
    <span className="cross" onClick={() => removeElement(id)}></span>
</div>)
}

export default Todo
 