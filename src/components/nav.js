import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"

const Navigation = ({brand, pages}) => {
    return (
        <Navbar>
            <Navbar.Brand>{brand}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="basic-navbar-nav">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                { pages.map((page) => (
                    <Nav.Link>
                        <Link to={page.node.fields.slug}>{page.node.frontmatter.title}</Link>
                    </Nav.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

Navigation.propTypes = {
    brand: PropTypes.string
}

Navigation.defaultProps = {
    brand: `Wedding`
}

export default Navigation