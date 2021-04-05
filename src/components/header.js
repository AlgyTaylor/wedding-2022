import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import  { Jumbotron, Container } from "react-bootstrap"

const Title = styled(Link)`
  color: green;
  :hover {
    color: darkgreen;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle, siteDescription }) => (
  <Jumbotron fluid> 
    <Container>
      <h1>
        <Title to="/">{siteTitle}</Title>
      </h1>
      <p>{siteDescription}</p>
    </Container>
  </Jumbotron>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: '',
}

export default Header
