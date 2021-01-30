import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from 'react-spring/renderprops'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/photos.scss'

export const data = graphql`
    {
        allStrapiPhotography {
            nodes {
                SubTitle
                Title
                MainImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        allStrapiPhoto {
            nodes {
                description
                instagram_url
                alt
                Photo {
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

const Photos = ({ data }) => {
    
    const [activePic, setPic] = useState(null)

    const pics = data.allStrapiPhoto.nodes

    console.log(pics)

    return (
        <Layout>
            <SEO title="Photos"/>
    
            <div className="banner">
                <img alt="A picture of Peter with his camera" src={data.allStrapiPhotography.nodes[0].MainImage.childImageSharp.fluid.src}/>
                <div className="container">
                    <div className="double-grid">
                        <div>
                            <h1>{data.allStrapiPhotography.nodes[0].Title}</h1>
                            <h2>{data.allStrapiPhotography.nodes[0].SubTitle}</h2>
                            <AnchorLink href="#gallery" className="button">Learn more</AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
    
            <div id="gallery" className="gallery outer-container">
                <div className="container">
                    <div className="double-grid">
                        {
                            pics.map((pic, i) => {
                                return (
                                    <div 
                                        className="image-container"
                                        onMouseEnter={() => setPic(pic)}
                                        onMouseLeave={() => setPic(null)}
                                        key={i}
                                    >
                                        <Img alt={pic.alt} fluid={pic.Photo.childImageSharp.fluid}/>
                                        <Transition
                                            items={activePic === pic}
                                            from={{ marginTop: -200 }}
                                            enter={{ marginTop: 0 }}
                                            leave={{ marginTop: -200 }}
                                        >
                                            {show => show && (props => <div style={props} className="props-container">
                                                <div style={{background: 'transparent'}}>
                                                    <p>{pic.description}</p>
                                                    {
                                                        pic.instagram_url ?
                                                        <a href={pic.instagram_url} target="_blank" rel="norefferer">
                                                            <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                                        </a>
                                                        : null
                                                    }
                                                </div>
                                            </div>)}
                                        </Transition>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Photos