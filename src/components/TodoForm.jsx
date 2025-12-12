import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Don't add empty todos
        if (text.trim() === "") return;

        // Dispatch the addTodo action to Redux
        dispatch(addTodo(text));

        // Clear the input field
        setText("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    placeholder="Enter a new todo..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button variant="primary" type="submit">
                    Add Todo
                </Button>
            </InputGroup>
        </Form>
    );
};

export default TodoForm;