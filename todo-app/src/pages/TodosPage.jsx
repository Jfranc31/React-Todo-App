import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import FilterButtons from "../components/FilterButtons";

function TodosPage() {
    return (
        <Container className="page-container">
            <h1>My Todos</h1>
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <div className="form-section">
                        <h4>Add New Todo</h4>
                        <TodoForm />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="filter-section">
                        <FilterButtons />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <h4>Todo List</h4>
                    <TodoList />
                </Col>
            </Row>
        </Container>
    );
};

export default TodosPage;