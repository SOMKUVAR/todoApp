import { useState } from "react";


const AddTodo = (props) =>{
    const {addTodo} = props;
    const [inputValue,setInputValue] = useState("");


    const onChange = (event) => {
        setInputValue(event.target.value);   
    }

    const onClick = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    }

    return (
        <div className="container row justify-content-center my-5">
             <div className="col-md-8"> 
             <input type='text' value={inputValue} className="form-control" onChange={onChange}/>
             </div>
             <button onClick={onClick} className="btn btn-success col-md-1">Add Todo</button>
        </div>
    )
}

export default AddTodo;