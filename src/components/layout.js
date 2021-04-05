/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import { Container, Row, Col } from "react-bootstrap"
//import "./layout.css"

const WeddingContainer = styled(Container)`
  margin: 0 auto;
  padding: 0 0;
`;

const WeddingContent = styled.main`
  padding: 0 1.5rem;
`;

const WeddingFooter = styled.footer`
  margin-top: 2rem;
  padding: 0 2rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <WeddingContainer fluid>
        <Row>
          <Col>
            <Header
              siteTitle={data.site.siteMetadata?.title || `Title`}
              siteDescription={data.site.siteMetadata?.description || `Description`}
            />  
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <nav>
              Navigation to go here
            </nav>
          </Col>
          <Col><WeddingContent>{children}</WeddingContent></Col>
        </Row>

        <Row>
          <Col>
            <WeddingFooter>
              © {new Date().getFullYear()}, {data.site.siteMetadata?.author ?? `Pusscat Industries`}
            </WeddingFooter>
          </Col>
        </Row>
      </WeddingContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
