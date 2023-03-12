import { graphql } from 'gatsby'
import * as React from 'react'
import Carousel from './carousel'
import { HomepageImage, HomepageLink } from './ui'

export interface ImageItem {
  id: string
  image: HomepageImage
  heading: string
  text: string
  links: HomepageLink[]
}

export interface CarouselProps {
  slides: ImageItem[]
}

export default function CarouselSection(props: CarouselProps) {
  return <Carousel slides={props.slides} />
}

export const query = graphql`
  fragment HomepageCarouselContent on HomepageCarousel {
    id
    heading
    slides {
      id
      image {
        id
        gatsbyImageData
        alt
      }
      heading
      text
      links {
        text
        href
      }
    }
  }
`
