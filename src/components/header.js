import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import  { Jumbotron, Container } from "react-bootstrap"

const WeddingJumbotron = styled(Jumbotron)`
  background-color: darkgreen;
`;

const Title = styled(Link)`
  color: white;
  :hover {
    color: lightyellow;
    text-decoration: none;
  }
`;

const Description = styled.p`
  color: white;
`;

const Header = ({ siteTitle, siteDescription }) => (
  <WeddingJumbotron fluid> 
    <Container>
      <h1>
        <Title to="/">{siteTitle}</Title>
      </h1>
      <Description>{siteDescription}</Description>
    </Container>
  </WeddingJumbotron>
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
