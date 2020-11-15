import { graphql, useStaticQuery } from "gatsby"

const ToolImage = () => {
  const toolImageData = useStaticQuery(graphql`
    query {
      figma: file(relativePath: { eq: "Tool/figma.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ableton: file(relativePath: { eq: "Tool/ableton.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      affectiva: file(relativePath: { eq: "Tool/affectiva.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      angular: file(relativePath: { eq: "Tool/angular.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      arcore: file(relativePath: { eq: "Tool/arcore.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bing: file(relativePath: { eq: "Tool/bing.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      blender: file(relativePath: { eq: "Tool/blender.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      css: file(relativePath: { eq: "Tool/css.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      firebase: file(relativePath: { eq: "Tool/firebase.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fmod: file(relativePath: { eq: "Tool/fmod.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      html: file(relativePath: { eq: "Tool/html.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      js: file(relativePath: { eq: "Tool/js.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      maps: file(relativePath: { eq: "Tool/maps.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      onsen: file(relativePath: { eq: "Tool/onsen.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      queensland: file(relativePath: { eq: "Tool/queensland.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      react: file(relativePath: { eq: "Tool/react.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sketch: file(relativePath: { eq: "Tool/sketch.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      unity: file(relativePath: { eq: "Tool/unity.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      xd: file(relativePath: { eq: "Tool/xd.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      windows: file(relativePath: { eq: "Tool/windows.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kubuntu: file(relativePath: { eq: "Tool/kubuntu.png" }) {
        id
        name
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return toolImageData
}

export default ToolImage
