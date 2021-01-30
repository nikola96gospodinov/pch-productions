import React from 'react'
import { graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AboutSection from '../page parts/about-section'

import ExperienceIcon from '../images/hourglass.png'
import EquipmentIcon from '../images/photo-camera.png'
import EditingIcon from '../images/illustration.png'

import '../styles/about.scss'

export const data = graphql`
    {
        allStrapiAbout {
            nodes {
                Bio
                Title
                SubTitle
                MainImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                PhotoText {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                PhotoBenefits {
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

const About = ({ data }) => {
    return (
        <Layout>
            <SEO title="About"/>

            <div className="banner">
                <img alt="A picture of Peter" src={data.allStrapiAbout.nodes[0].MainImage.childImageSharp.fluid.src}/>
                <div className="container">
                    <div className="double-grid">
                        <div>
                            <h1>{data.allStrapiAbout.nodes[0].Title}</h1>
                            <h2>{data.allStrapiAbout.nodes[0].SubTitle}</h2>
                            <AnchorLink href="#about" className="button">Learn more</AnchorLink>
                        </div>
                    </div>
                </div>
            </div>

            <AboutSection StrapiData={data}/>

            <div className="outer-container about-box">
                <Img className="full-pic" fluid={data.allStrapiAbout.nodes[0].PhotoBenefits.childImageSharp.fluid}/>
                <div className="container">
                    <h2 className="sub-heading">What I can offer</h2>
                    <hr className="divider"/>
                    <div className="triple-grid">
                        <div>
                            <img src={ExperienceIcon} alt="an icon of a sand clock"/>
                            <h3>Vast Experience</h3>
                        </div>
                        <div>
                            <img src={EquipmentIcon} alt="an icon of a camera"/>
                            <h3>Quality Equipment</h3>
                        </div>
                        <div>
                            <img src={EditingIcon} alt="an icon of a image editing software"/>
                            <h3>Editing Skills</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About