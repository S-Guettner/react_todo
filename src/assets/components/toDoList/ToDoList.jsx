import { v4 as uuidv4 } from 'uuid';
import ToDoListData from "../toDoListData/TodoListData";

const toDos = [
    {tasks:"grocery"},
    {tasks:"sport"},
    {tasks:"study"},
    {tasks:"cleaning"}
]

const ToDoList = () => {
    return ( 
        toDos.map((items) => {
            return <ToDoListData
            task={items.tasks}
            />
        })
     );
}
 
export default ToDoList;