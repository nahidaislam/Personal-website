import { graphql, useStaticQuery } from "gatsby"

const Images = () => {
  const imageData = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "ProfilePicture/illustration.png" }
      ) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      propic: file(relativePath: { eq: "ProfilePicture/propic.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cero: file(relativePath: { eq: "ProjectCards/cero.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      djtable: file(relativePath: { eq: "ProjectCards/DJTable.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      disasteroid: file(relativePath: { eq: "ProjectCards/Disasteroid.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      viashare: file(relativePath: { eq: "ProjectCards/ViaShare.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      parkout: file(relativePath: { eq: "ProjectCards/Parkout.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sl: file(relativePath: { eq: "ProjectCards/SL.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saveme: file(relativePath: { eq: "ProjectCards/SaveMe.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      affectrecognition: file(
        relativePath: { eq: "ProjectCards/affectRecognition.jpg" }
      ) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cero1: file(relativePath: { eq: "Projects/Cero/img1.png" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return imageData
}

export default Images
