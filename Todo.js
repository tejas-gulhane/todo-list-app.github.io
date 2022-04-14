import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <div className="task" key={props.index} id={props.index} >
                <div className="content">
                    <p>{props.value}</p>
                </div>
                <div className="actions">
                    <button className="delete" onClick={()=>{props.onselect(props.id)}} > Delete</button >
                </div >
            </div >
        </div>
    )
}

export default Todo