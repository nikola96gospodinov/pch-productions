import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/music.scss'

export const data = graphql`
    {
        allStrapiSong {
            nodes {
                SongName
                SpotifyLink
                YoutubeLink
                InstagramLink
                AppleMusicLink
                Image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        allStrapiMusicPage {
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

const Music = ({ data }) => {
    const songs = data.allStrapiSong.nodes

    return (
        <Layout>
            <SEO title="Music"/>
    
            <div className="banner">
                <img src={data.allStrapiMusicPage.nodes[0].MainImage.childImageSharp.fluid.src}/>
                <div className="container">
                    <div className="double-grid">
                        <div>
                            <h1>{data.allStrapiMusicPage.nodes[0].Title}</h1>
                            <h2>{data.allStrapiMusicPage.nodes[0].SubTitle}</h2>
                            <AnchorLink href="#music-boxes" className="button">Learn more</AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
    
            <div id="music-boxes" className="music-boxes outer-container">
                <div className="container">
                    <h2 className="sub-heading">Top Tracks</h2>
                    <hr className="divider"/>
                    {
                        songs.map(song => {
                            return (
                                <div className="one-two-grid">
                                    <Img className="music-pic" fluid={song.Image.childImageSharp.fluid}/>
                                    <div className="music-info">
                                        <div>
                                            <h3>{song.SongName}</h3>
                                            <hr className="divider"/>
                                        </div>
                                        <div>
                                            <p>Available on:</p>
                                            {
                                                song.SpotifyLink !== 'N/A' ?
                                                <a href={song.SpotifyLink} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={['fab', 'spotify']}/>
                                                </a>
                                                : null
                                            }
                                            {
                                                song.YoutubeLink !== 'N/A' ?
                                                <a href={song.YoutubeLink} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={['fab', 'youtube']}/>
                                                </a>
                                                : null
                                            }
                                            {
                                                song.InstagramLink !== 'N/A' ?
                                                <a href={song.InstagramLink} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                                </a>
                                                : null
                                            }
                                            {
                                                song.AppleMusicLink !== 'N/A' ?
                                                <a href={song.AppleMusicLink} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={['fab', 'apple']}/>
                                                </a>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <p>More tracks coming soon!</p>
                </div>
            </div>
        </Layout>
    )
}

export default Music