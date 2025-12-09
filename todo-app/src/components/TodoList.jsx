import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useSelector((state) => state.todos.todos);
    const filter = useSelector((state) => state.todos.filter);

    // Filter todos based on the current filter state
    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "incomplete") return !todo.completed;
        return true; // 'all' filter
    });

    if (filteredTodos.length === 0) {
        return <p className="text-muted">No todos to display.</p>;
    }

    return (
        <ListGroup>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ListGroup>
    );
}

export default TodoList;