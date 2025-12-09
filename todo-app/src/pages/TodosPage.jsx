import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import FilterButtons from "../components/FilterButtons";

function TodosPage() {
    return (
        <Container className="mt-4">
            <h1 className="mb-4">My Todos</h1>
            <Row>
                <Col md={6}>
                    <h4>Add New Todo</h4>
                    <TodoForm />
                </Col>
                <Col md={6}>
                    <FilterButtons />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={12}>
                    <h4>Todo List</h4>
                    <TodoList />
                </Col>
            </Row>
        </Container>
    );
}

export default TodosPage;