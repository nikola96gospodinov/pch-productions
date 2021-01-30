import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const data = graphql`
    {
        allStrapiVideosPage {
            nodes {
                Title
                SubTitle
                MainImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

const Videos = ({ data }) => (
    <Layout>
        <SEO title="Videos"/>

        <div className="banner">
            <img alt="A man pointing to a ceiling of a building with graffiti" src={data.allStrapiVideosPage.nodes[0].MainImage.childImageSharp.fluid.src}/>
            <div className="container">
                <div className="double-grid">
                    <div>
                        <h1>{data.allStrapiVideosPage.nodes[0].Title}</h1>
                        <h2>{data.allStrapiVideosPage.nodes[0].SubTitle}</h2>
                        <AnchorLink href="#coming-soon" className="button">Learn more</AnchorLink>
                    </div>
                </div>
            </div>
        </div>

        <div id="coming-soon" className="center-container outer-container container">
            <p style={{
                fontSize: '1.6rem'
            }}>Videos coming soon!</p>
        </div>
    </Layout>
)

export default Videos