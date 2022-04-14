
import '../src/style.css'
import React, { useState } from 'react'
import Todo from './Todo';



const App = () => {


  const [newdata, setnewdata] = useState('');
  const [item, setitem] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const create_todo_app = () => {
    setitem([...item, newdata]);
    setnewdata('')
  }

  const delitem =(id)=>{
console.log(id);
 const latestlist =item.filter((val,i)=>{
  return id!=i;
})
setitem(latestlist)

  }


  

  return (
    <div>
      <header>
        <h1>Task List 2021</h1>
        <form id="new-task-form" onSubmit={onSubmit}>
          <input type="text" name="new-task-input" id="new-task-input" placeholder="What do you have planned?" value={newdata} onChange={e => setnewdata(e.target.value)} />
          <input type="submit" id="new-task-submit" value="Add task" onClick={create_todo_app} />
        </form>
      </header>
      <main>
        <section className="task-list">
          <h2>Tasks</h2>

          <div id="tasks">
            {
              item.map((currentele, index) => {
                return (
                 <Todo 
                 onselect={delitem}
                 id={index}
                 key={index}
                 value={currentele}
                 />
                )
              })

            }

          </div >
        </section >
      </main >
    </div>

  )
}

export default App;