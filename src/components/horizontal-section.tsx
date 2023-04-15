import { graphql } from 'gatsby'
import { Container, Section } from './ui'
import * as components from './components'
import type { HorizontalSectionContent } from './sections'
import Fallback from './fallback'
import { Flex } from '@chakra-ui/react'
import SanityImage from 'gatsby-plugin-sanity-image'

export interface IHorizontalSectionProps {
  title: string
  content: HorizontalSectionContent[]
}

export default function HorizontalSection(props: IHorizontalSectionProps) {
  return (
    <Section>
      <Container>
        <Flex flexWrap="wrap">
          {props.content.map((e, i) => {
            console.log('element', e)
            if (e === null) {
              return null
            }
            const isFirst = i === 0
            const isLast = i === props.content.length - 1
            const m = 10
            const margins = { m: 5 } // { mb: m, ml: !isFirst && m, mr: !isLast && m }
            switch (e.blocktype) {
              case 'FractionedImage': {
                const { fraction, image } = e
                return (
                  <Flex
                    key={i}
                    minW="300px"
                    alignItems="center"
                    flex={fraction || 1}
                    {...margins}
                  >
                    <SanityImage width={1000} {...image} />
                  </Flex>
                )
              }
              default: {
                const { fraction, element } = e
                if (!element) {
                  return null
                }
                const { blocktype, ...componentProps } = element
                const Component = components[blocktype] || Fallback
                return (
                  <Component
                    key={i}
                    flex={fraction || 1}
                    display="flex"
                    flexDir="column"
                    justifyContent={
                      blocktype === 'Faq' || blocktype === 'VerticalBlock'
                        ? 'flex-start'
                        : 'center'
                    }
                    minW="300px"
                    {...(componentProps as any)}
                    {...margins}
                  />
                )
              }
            }
          })}
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HorizontalSectionContent on SanityHorizontalSection {
    id
    title
    content {
      blocktype
      ... on SanityHorizontalSectionElement {
        fraction
        element {
          blocktype
          ...HomepageMarkdownContent
          ...FaqContent
          ...FormContent
          ...VerticalBlockContent
        }
      }
      ... on SanityFractionedImage {
        fraction
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`
