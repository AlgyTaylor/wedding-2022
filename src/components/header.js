import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.header`
  background: darkgreen;
  margin-bottom: 1.45rem;
`;
const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;
const Text = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <InnerWrapper>
      <Text>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Text>
    </InnerWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
