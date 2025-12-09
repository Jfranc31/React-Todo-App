import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todosSlice";
import { ListGroup, Button, Form } from "react-bootstrap";

function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <Form.Check
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                    className="me-3"
                />
                <span style={{ textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "gray" : "black"
                 }}>
                    {todo.text}
                </span>
            </div>
            <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
            </Button>
        </ListGroup.Item>
    );
}

export default TodoItem;