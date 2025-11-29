import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { findCourseById } from "@/constants/courses";

function CourseInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = findCourseById(id);

    if (!course) {
        return (
            <div className="text-center mt-5">
                <h3 className="mb-3">Курс не знайдено</h3>
                <Button variant="secondary" onClick={() => navigate("/courses")}>
                    Повернутися до списку
                </Button>
            </div>
        );
    }
    return (
        <Row className="justify-content-center mt-4">
            <Col md={8} lg={6}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">

                        <h2 className="fw-bold mb-3 text-primary">{course.title}</h2>

                        <div className="d-flex gap-2 mb-4">
                            <Badge bg="info" className="px-3 py-2 text-dark">
                                Рівень: {course.level}
                            </Badge>

                            <Badge bg="success" className="px-3 py-2">
                                Категорія: {course.category}
                            </Badge>
                        </div>

                        <div
                            className="p-3 rounded"
                            style={{ backgroundColor: "#f8f9fa", borderLeft: "4px solid #0d6efd" }}
                        >
                            <p className="mb-0">
                                {course.description || "Опис курсу буде додано пізніше."}
                            </p>
                        </div>

                        <Button
                            variant="primary"
                            className="mt-4"
                            onClick={() => navigate(-1)}
                        >
                            Назад
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default CourseInfo;
