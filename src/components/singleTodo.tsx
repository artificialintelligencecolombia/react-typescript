import React, { useEffect, useRef, useState } from "react"
import type { Todo } from '../model'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { MdDone } from "react-icons/md"
import './styles.css'
import { BiEdit } from "react-icons/bi"
import type { ReactFormState } from "react-dom/client"

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    // 1. Add the states to track if we're editing 
    const [edit, setEdit] = useState<Boolean>(false); // Are we editing?
    const [editTodo, setEditTodo] = useState<string>(todo.todo); // What's the new text?

    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo)=>
                todo.id===id
            ?{...todo, todo: editTodo}:todo)
        );
        setEdit(false);
    };    
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    const deleteTodo = (id: number) => {
        setTodos(
            // Filter out the todo with the matching id
            todos.filter((todo)=>
                todo.id !==id 
            )
        )
    };

    // 1. Create the function that receives the todo's id
    const handleDone = (id: number) => {
        // 2. Call setTodos to update the entire todos array in parent (App) 
        setTodos(
            // 3. Map through ALL todos in the array
            todos.map((todo)=> 
                // 4. Check if current todo's id matches the clicked todo's id
                todo.id===id
                // 5a. If YES - create new object with isDone toggled
                ?{...todo,isDone:!todo.isDone}
                // 5b. If NO - return todo unchanged
                :todo)
        )
    };

    return (
        <form className="todos__single" onSubmit={(e)=> handleEdit(e, todo.id)}>
            <div>
                {
                    edit ? (
                        <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className="todos__single--text" type="text" />
                    ): (      
                // 6. Conditional rendering - if todo is done, show strikethrough
                todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
                ): (
                    <span className="todos__single--text">{todo.todo}</span>
                    )
                    )
                }
                <span className="icon" onClick={() => {
                    if(!edit && !todo.isDone){
                        setEdit(!edit);
                    }}}><AiFillEdit/></span>            
                <span className="icon" onClick={()=>deleteTodo(todo.id)}><AiFillDelete/></span>
                {/* 7: onClick triggers handleDone, passing this todo's id */}
                <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodo