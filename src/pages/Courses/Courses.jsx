import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { courses } from "@/constants/courses";

function Courses() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";
    const level = searchParams.get("level") || "all";

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
        const matchesLevel = level === "all" ? true : course.level === level;

        return matchesSearch && matchesLevel;
    });


    const handleSearchChange = (event) => {
        const newSearch = event.target.value;
        const params = {};

        if (newSearch.trim() !== "") {
            params.search = newSearch;
        }
        if (level !== "all") {
            params.level = level;
        }

        setSearchParams(params);
    };


    const handleLevelChange = (event) => {
        const newLevel = event.target.value;
        const params = {};

        if (search.trim() !== "") {
            params.search = search;
        }
        if (newLevel !== "all") {
            params.level = newLevel;
        }

        setSearchParams(params);
    };


    const goToDetails = (id) => {
        navigate(`/courses/${id}`);
    };

    return (
        <Row className="justify-content-center">
            <Col md={10} lg={8}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                        <h2 className="mb-4">Список курсів</h2>

                        <Row className="g-3 mb-4">
                            <Col md={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Пошук по назві..."
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                            </Col>

                            <Col md={6}>
                                <Form.Select value={level} onChange={handleLevelChange}>
                                    <option value="all">Всі рівні</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </Form.Select>
                            </Col>
                        </Row>


                        <Row className="g-3">
                            {filteredCourses.length === 0 && (
                                <p className="text-muted text-center">Нічого не знайдено</p>
                            )}

                            {filteredCourses.map((course) => (
                                <Col xs={12} key={course.id}>
                                    <div className="d-flex justify-content-between align-items-center border rounded-3 px-3 py-2">
                                        <div>
                                            <h5 className="mb-1">{course.title}</h5>
                                            <div className="text-muted small">
                                                Рівень: {course.level} · Категорія: {course.category}
                                            </div>
                                        </div>

                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={() => goToDetails(course.id)}
                                        >
                                            Деталі
                                        </Button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Courses;
