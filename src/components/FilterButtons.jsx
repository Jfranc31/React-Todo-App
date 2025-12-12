import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import { setFilter } from "../redux/todosSlice";

function FilterButtons() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.todos.filter);

    const handleFilterChange = (filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <div>
            <h5 className="mb-2">Filter Todos:</h5>
            <ButtonGroup>
                <Button
                    variant={currentFilter === "all" ? "primary" : "outline-primary"}
                    onClick={() => handleFilterChange("all")}
                >
                    All
                </Button>
                <Button
                    variant={currentFilter === "completed" ? "primary" : "outline-primary"}
                    onClick={() => handleFilterChange("completed")}
                >
                    Completed
                </Button>
                <Button
                    variant={currentFilter === "incomplete" ? "primary" : "outline-primary"}
                    onClick={() => handleFilterChange("incomplete")}
                >
                    Incomplete
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default FilterButtons;