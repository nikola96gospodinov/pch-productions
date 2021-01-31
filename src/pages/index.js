import React from "react"
import { Link, graphql } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/contact-form"

import AboutSection from '../page parts/about-section'
import Stack from '../page parts/stack'

import '../styles/index.scss'

export const data = graphql`
  {
    allStrapiHome {
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
        FeaturePhoto1{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        FeaturedPhoto2{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        FeaturedPhoto3{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        FeaturedPhoto4{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        FeaturedPhoto5{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiAbout {
      nodes {
        Bio
        PhotoText {
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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>

    <div className="banner banner-home">
      <img alt="A man pointing to the ceiling of a building with graffiti" src={data.allStrapiHome.nodes[0].MainImage.childImageSharp.fluid.src}/>
      <div className="container">
        <div className="double-grid">
          <div>
            <h1>{data.allStrapiHome.nodes[0].Title}</h1>
            <h2>{data.allStrapiHome.nodes[0].SubTitle}</h2>
            <AnchorLink href="#boxes" className="button">Learn more</AnchorLink>
          </div>
        </div>
      </div>
    </div>

    <div id="boxes" className="outer-container boxes">
      <div className="container">
        <h2 className="sub-heading">What I do</h2>
        <hr className="divider"/>
        <div className="triple-grid">
          <Link to="/photos" className="box box-1">
            <div>
              <h3>Photography</h3>
            </div>
          </Link>
          <Link to="/videos" className="box box-2">
            <div>
              <h3>Music Videos</h3>
            </div>
          </Link>
          <Link to="/music" className="box box-3">
            <div>
              <h3>Music</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div className="outer-container featured-photos">
      <div className="container">
        <h2 className="sub-heading">Featured Photos</h2>
        <hr className="divider"/>
        <div className="double-grid">
          <div>
            <Img className="big-image" fluid={data.allStrapiHome.nodes[0].FeaturePhoto1.childImageSharp.fluid}/>
            <div className="big-image-overlay">
              <h4>Do you really need a description for this one...you know this place too well for that so just enjoy this scene</h4>
            </div>
          </div>
          <div>
            <div className="small-image-container">
              <Img className="small-image" fluid={data.allStrapiHome.nodes[0].FeaturedPhoto2.childImageSharp.fluid}/>
              <div className="small-image-overlay">
                <h4>Are you going for the fast or for the patient slow? Which train do you take?</h4>
              </div>
            </div>
            <div>
              <Img className="small-image last-img" fluid={data.allStrapiHome.nodes[0].FeaturedPhoto3.childImageSharp.fluid}/>
              <div className="small-image-overlay">
                <h4>From the smoke, we rise</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="two-one-grid">
          <div>
            <Img className="small-image" fluid={data.allStrapiHome.nodes[0].FeaturedPhoto4.childImageSharp.fluid}/>
            <div className="small-image-overlay">
              <h4>A tree or two</h4>
            </div>
          </div>
          <div>
            <Img className="small-image" fluid={data.allStrapiHome.nodes[0].FeaturedPhoto5.childImageSharp.fluid}/>
            <div className="small-image-overlay">
              <h4>Different opinions</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AboutSection StrapiData = {data}/>

    <Stack/>

    <div className="form-section">
      <div className="container">
        <div className="contact-inner"><Form/></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
