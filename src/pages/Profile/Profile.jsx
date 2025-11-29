import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const goToCourses = () => {
        navigate("/courses");
    };

    return (
        <Row className="justify-content-center">
            <Col md={8} lg={6}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                        <h2 className="mb-3">Профіль користувача</h2>
                        <p className="text-muted mb-4">
                            Це профіль юзера. Тут могли б бути якісь дані, але я пропоную подивитися мем або перейти до курсів.
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-2">
                            <Button variant="primary" onClick={goToCourses}>
                                Перейти до курсів
                            </Button>

                            <Button
                                variant="outline-secondary"
                                href={'https://www.instagram.com/reel/DPwI8uyD9Lp/?igsh=MTJqd2l2MnhqeHJ4eA=='}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Подивитися мемчік
                            </Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Profile;
