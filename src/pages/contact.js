import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

const Contact = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className="form-section">
            <div className="container">
                <div className="contact-inner"><Form/></div>
            </div>
        </div>
    </Layout>
)

export default Contact