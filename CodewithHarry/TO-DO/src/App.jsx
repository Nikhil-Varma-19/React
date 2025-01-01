import { useEffect, useState } from "react";
// import Navbar from "./copmonent/Navbar";
import { v4 as uuidv4 } from 'uuid';
function App() {

  useEffect(() => {
    let todoString =localStorage.getItem("todolist")
    if(todoString){
    let todo = JSON.parse(localStorage.getItem("todolist"))
    setTodolist(todo)}
  }, [])
 const saveTools=()=>{
  localStorage.setItem("todolist",JSON.stringify(todolist))
 }

  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
 const [finshed, setfinshed] = useState(true)

 const handleFinisher=()=>{
      setfinshed(!finshed)
 }



 function handleEdit(e,id){
  let ed= todolist.filter(item=>id===item.id)
  setTodo(ed[0].todo)
  // console.log(ed[0].todo)
  let newTodo=todolist.filter(item=>{
    return item.id !== id
   })
   setTodolist(newTodo)
   saveTools()

 }
 function handleDelete(e,id){

 let newTodo=todolist.filter(item=>{
  return item.id !== id
 })
 setTodolist(newTodo)

 saveTools()
 }
 const handleAdd=()=>{
  setTodolist([...todolist, { id:
    uuidv4(),todo, isCompleted: false }]);
      setTodo("");
      console.log(todolist);
 }
 function handleChange(e){
  setTodo(e.target.value);
  saveTools()
 }
 const handleCheckbox=(e)=>{
    let id = e.target.id
    let index = todolist.findIndex(iteam=>{
      return id=== iteam.id 
   })
    let newTodo=[...todolist]
    newTodo[index].isCompleted=!newTodo[index].isCompleted
    setTodolist(newTodo)
    saveTools()
 }
 
  
  return  (
    <>
      <div className="container mx-auto rounded-md bg-indigo-400 p-5 my-5 text-white h-screen w-full">
      <h1 className="text-center  font-bold text-2xl">Your Todo List</h1>
        <div className="add-todo">
          <h2>Add Todo</h2>
          <input onChange={handleChange}  checked={todo}  className="w-1/4 text-black" type="text" />
          <button onClick={handleAdd} disabled={todo.length<3} className="text-white ml-4 disabled:bg-red-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
        </div>
       <div className="mt-5 ">
        <input type="checkbox" onChange={handleFinisher} checked={finshed} /> Show Finshed Work
       </div>
        
          <div className="todo-list justify-center flex items-center flex-col">
          {/* {todolist.length ===0 && <h1 className="text-2xl text-purple-700">No task today</h1>} */}
            {todolist.map(item=>{
             return ( finshed ||  !item.isCompleted) && <div key={item.id} className="one-todo flex justify-between mt-4 w-1/2">
              <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name="" id={item.id} />
              <h2 className={item.isCompleted?"line-through":""}>{item.todo}</h2>
              <div className="buttons ">
                <button onClick={(e)=>{handleEdit(e,item.id)}}className="edit font-semibold p-3 py-2 mx-5 bg-blue-900  hover:bg-blue-950 rounded-md ">Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className="delete font-semibold p-3 py-2 mx-1 bg-blue-900  hover:bg-blue-950 rounded-md">Delete</button>
              </div>
            </div>
            })}
          
        </div>
      
      </div>
    </>
  );
}

export default App;
