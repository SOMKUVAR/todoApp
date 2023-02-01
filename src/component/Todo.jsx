import { useState } from 'react';
import ModalDialog from 'react-bootstrap/esm/ModalDialog';
import Modal from 'react-bootstrap/Modal';

const Todo = (props) => {
  const {index,todo,onDelete,onEdit,doneHandler} = props;
  const [show,setShow] = useState(false);
  const [value,setValue] = useState(todo.value);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const toggleModal = ()=>{
    setShow(!show);
  }

  const saveChanges = () =>{
     setShow(false);
     onEdit({id:todo.id,value:value})
  }

  return (
    <div className="">
      <table className="table table-bordered ">
        <tbody>
          <tr>
            <td style={{ width: 10, textAlign: "center" }}>{index}</td>
            <td style={{ width: 10, textAlign: "center" }}>
              <input type="checkbox" defaultChecked={todo.isDone} onChange={()=>doneHandler(todo.id)}></input>
            </td>

            <td style={{ width: 300, textAlign: "center",textDecoration:todo.isDone ? 'line-through' : ''}}>
              {todo.value}
            </td>

            <td style={{ width: 50, textAlign: "center" }}>
              <button className="btn btn-warning" onClick={toggleModal}>edit</button>
            </td>

            <td style={{ width: 50, textAlign: "center" }}>
              <button className="btn btn-danger" onClick={()=>onDelete(todo.id)}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
       
      <Modal show={show} >
         <Modal.Header >
            <div className="text-center"> Edit Todo Value</div>
         </Modal.Header>
         <Modal.Body>
            <input type='text' value={value} className='form-control' onChange={onChange}>
            </input>
         </Modal.Body>
         <Modal.Footer>
            <button className="btn btn-warning" onClick={toggleModal}>Cancel</button>
            <button className="btn btn-success" onClick={saveChanges}>Save</button>
         </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Todo;
