import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

function Home() {
    return (
        <Row className="justify-content-center">
            <Col md={8} lg={6}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                        <h2 className="mb-3">Welcome to Courses App</h2>
                        <p className="text-muted mb-4">
                            Тут ви можете переглянути список доступних курсів та перейти до вашого профілю.
                            Оберіть, з чого почати:
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <Button
                                as={Link}
                                to="/courses"
                                variant="primary"
                                className="flex-fill"
                            >
                                Список курсів
                            </Button>

                            <Button
                                as={Link}
                                to="/profile"
                                variant="outline-primary"
                                className="flex-fill"
                            >
                                Профіль користувача
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Home;
