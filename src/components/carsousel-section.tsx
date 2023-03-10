import { graphql } from "gatsby"
import * as React from "react"
import Carousel from "./carousel"
import { HomepageImage, HomepageLink } from "./ui"

export interface ImageItem {
  id: string
  alt: string
  image: HomepageImage
  heading: string
  desc: string
  link: HomepageLink
}

export interface CarouselProps {
  images: ImageItem[]
}

export default function CarouselSection(props: CarouselProps) {
  return <Carousel images={props.images} />
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
      heading
      desc
      link {
        text
        href
      }
    }
  }
`
