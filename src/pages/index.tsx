import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import Carousel from "../components/carousel"
import { Box } from "@chakra-ui/react"
import { ThemeToggleButton } from "../components/theme-toggle-button"
import { HeroProps } from "../components/hero"

export interface IImage {
  image: {
    asset: {
      url: string
    }
  }
  alt: string
}
interface HomepageProps {
  data: {
    homepage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
    homepageHero: HeroProps
    allSanityHomepageCarousel: {
      nodes: { images: IImage[]; alt: string }[]
    }
  }
}

export default function Homepage(props: HomepageProps) {
  const { homepage } = props.data

  return (
    <Layout>
      <ThemeToggleButton />
      <Box bg="blue.800">Hellloooooo</Box>
      <sections.HomepageHero {...props.data.homepageHero} />
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })}
    </Layout>
  )
}
export const Head = (props: HomepageProps) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} />
}
export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
        ...HomepageCarouselContent
      }
    }
  }
`

// allSanityHomepageCarousel {
//   nodes {
//     text
//     images {
//       image {
//         asset {
//           url
//         }
//       }
//       alt
//     }
//   }
// }
