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
    }
  `)
  return toolImageData
}

export default ToolImage
