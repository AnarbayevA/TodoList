import React, { useState } from 'react';
import './App.css';


function App() {
  const [firstItem, setListItem] = useState("")
  const [items, setItems] = useState([])

  function addItem(){
    if(!firstItem){
      alert("enter anything")
      return
    }

    const item = {
      id:Math.floor(Math.random()*100),
      value: firstItem
    }

    setItems(oldList => [...oldList, item])
    setListItem("")
  }

  function remove(id){
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }

  return (
    <div className="App container px-5">

    <h1 className='mt-5 text-center text-warning mb-5'>TodoList</h1>


    <div className='row mb-5'>
       <input className='bg-info fs-7  p-3 col-6 me-3'
    typeof = 'text'
    placeholder = 'your text'
    value = { firstItem }
    onChange = {e => setListItem( e.target.value )}
    />
    <button className='col-2 border-0 rounded bg-btn text-white'
      onClick = {() => addItem()}
    >Click</button>
    </div>


    <ul className='list-group list-group-flush p-0 m-0'>
     { items.map(item => {
        return(
          <li key = {item.id} className='text-warning list-group-item m-0 p-3 ps-0 fs-5 d-flex justify-content-between'>
            {item.value}
            <button className='border-0 rounded bg-danger py-1 px-3 text-white'
              onClick={() => remove( item.id )}
            >
              Remove
            </button>
          </li>
        )
      })}
    </ul>
    </div>
  );
}

export default App;
