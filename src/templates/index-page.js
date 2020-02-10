import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import imgSpace from '../../public/pictures/nada-02.jpg'

const bgHeroSpace = {
    backgroundImage: `url(${imgSpace})`
}

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        // backgroundImage: `url(${
        //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        // })`,
        backgroundImage: `url(${
          imgSpace
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          paddingLeft: '10%'
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.15rem 0px 0px, rgb(255, 68, 0) -0.15rem 0px 0px',
            backgroundColor: 'rgba(255, 68, 0, .7)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            maxWidth: '80%'
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.15rem 0px 0px, rgb(255, 68, 0) -0.15rem 0px 0px',
            backgroundColor: 'rgba(255, 68, 0, .4)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            maxWidth: '85%'
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-6">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                {/* <Features gridItems={intro.blurbs} /> */}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      Take Me There
                    </Link>
                  </div>
                </div> */}
                {/* <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          
            <div className="column is-4 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h2 className="title">
                     You know what kind of plan never fails? No plan at all. No plan. You know why? If you make a plan, life never works out that way. Look around us, did these people think 'Let's all spend the night in a gym?' But look now, everyone's sleeping on the floor, us included. That's why people shouldn't make plans. With no plan, nothing can go wrong and if something spins out of control, it doesn't matter. Whether you kill someone or betray your country. None of it f*cking matters. Got it?
                    </h2>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">
                     After prolonged jolting and rattling the carriage finally stopped, we got out, and my friend paid the driver. Then we went upward through a dark, cold stairwell which smelled of dead lamp-wicks, and my guide opened the door to her room, just opposite the stairs. Here it was suddenly very warm; the smell of a greatly over-heated iron stove mingled with the heavy, flowery scent of cosmetics, and when the hanging lamp was lighted, a deep-red glow suffused the room. Comparative luxury surrounded me; on little velvet-topped tables stood colourful vases with dried sheaves of palm leaves, paper flowers, and peacocks' feathers; soft, furry hides lay about; a canopy bed with hangings of red wool adorned with gold braid dominated the room, and there was a great abundance of mirrors, even in places where one does not ordinarily expect them — as, for instance, in the canopy of the bed and in the wall at its side. But since we were filled with longing to know each other completely, we set to work at once, and I stayed with her until the following morning.
                    </h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>After prolonged jolting and rattling the carriage finally stopped, we got out, and my friend paid the driver. Then we went upward through a dark, cold stairwell which smelled of dead lamp-wicks, and my guide opened the door to her room, just opposite the stairs. Here it was suddenly very warm; the smell of a greatly over-heated iron stove mingled with the heavy, flowery scent of cosmetics, and when the hanging lamp was lighted, a deep-red glow suffused the room. Comparative luxury surrounded me; on little velvet-topped tables stood colourful vases with dried sheaves of palm leaves, paper flowers, and peacocks' feathers; soft, furry hides lay about; a canopy bed with hangings of red wool adorned with gold braid dominated the room, and there was a great abundance of mirrors, even in places where one does not ordinarily expect them — as, for instance, in the canopy of the bed and in the wall at its side. But since we were filled with longing to know each other completely, we set to work at once, and I stayed with her until the following morning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
