import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Jumbotron, Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const WeddingWrapper = styled.div`
  position: relative;
`;

const HeaderText = styled.h1`
  position: absolute;
  top: calc(50% - 3rem);
  left: 3rem;
  color: white;
  text-shadow: -1px 1px 0 #000,
    1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;
const HeaderDescription = styled.p`
  position: absolute;
  top: calc(50%);
  left: 3rem;
  color: white;
  text-shadow: -1px 1px 0 #000,
    1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Header = ({ siteTitle, siteDescription }) => (
  <WeddingWrapper>
    <StaticImage
      src="../images/flower.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Rose on paper"
      style={{ marginBottom: `1.45rem` }}
    />
    <HeaderText>{siteTitle}</HeaderText>
    <HeaderDescription>{siteDescription}</HeaderDescription>
  </WeddingWrapper>
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
