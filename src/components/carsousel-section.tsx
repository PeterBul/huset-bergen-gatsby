import { graphql } from "gatsby"
import * as React from "react"
import Carousel from "./carousel"
import { ChakraSection, Container, HomepageImage } from "./ui"

export interface ImageItem {
  id: string
  alt: string
  image: HomepageImage
}

export interface CarouselProps {
  images: ImageItem[]
}

export default function CarouselSection(props: CarouselProps) {
  console.log("Props", props)
  return (
    <ChakraSection>
      <Container>
        <Carousel images={props.images} />
      </Container>
    </ChakraSection>
  )
}

export const query = graphql`
  fragment HomepageCarouselContent on HomepageCarousel {
    id
    heading
    images {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
