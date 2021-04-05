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
import Nav from "./nav"
import { Container, Row, Col } from "react-bootstrap"

const WeddingContent = styled.main`
  padding: 0 1.5rem;
`;

const WeddingFooter = styled.footer`
  margin-top: 2rem;
  padding: 0 2rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          title
          shortTitle
          description
          author
        }
      }

      allMarkdownRemark(sort: {fields: frontmatter___title}) {
        totalCount
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Nav
        brand={data.site.siteMetadata?.shortTitle || `Our Wedding`}
        pages={data.allMarkdownRemark.edges || []}
      />

      <Container>
        <Row>
          <Col>
          <Header
              siteTitle={data.site.siteMetadata?.title || `Title`}
              siteDescription={data.site.siteMetadata?.description || `Description`}
            />  
          </Col>
        </Row>
        <Row>
          <Col>
            <WeddingContent>{children}</WeddingContent>
          </Col>
        </Row>
        <Row>
          <Col>
            <WeddingFooter>
              © {new Date().getFullYear()}, {data.site.siteMetadata?.author ?? `Pusscat Industries`}
            </WeddingFooter>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
