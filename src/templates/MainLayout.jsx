import {Breadcrumb, Container, Nav, Navbar} from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
    let location = useLocation()

    const showLocation = () => {
        if (location.pathname === "/") return "Home";

        if (location.pathname.startsWith("/courses/")) {
            return "Course details";
        }

        const path = location.pathname.replace("/", "");
        return path.charAt(0).toUpperCase() + path.slice(1);
    };
    return (
        <div className="d-flex flex-column min-vh-100">

            <Navbar bg="primary" variant="dark" expand="md" sticky="top">
                <Container>

                    <Navbar.Brand className="fw-bold">
                        Courses App
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-nav" />

                    <Navbar.Collapse id="main-nav">
                        <Nav className="ms-auto">

                            <Nav.Link as={NavLink} to="/" end>
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/courses">
                                Courses
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/profile">
                                Profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <Container className="flex-grow-1 py-4">
                <Breadcrumb className="mb-3">
                    <Breadcrumb.Item
                        linkAs={NavLink}
                        linkProps={{ to: "/" }}
                    >
                        Home
                    </Breadcrumb.Item>

                    {location.pathname !== "/" && (
                        <Breadcrumb.Item active>
                            {showLocation()}
                        </Breadcrumb.Item>
                    )}
                </Breadcrumb>

                <Outlet />
            </Container>

        </div>
    );
}
