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
            const isFirst = i === 0
            const isLast = i === props.content.length - 1
            const m = 10
            const margins = { mb: m, ml: !isFirst && m, mr: !isLast && m }
            switch (e.blocktype) {
              case 'Image': {
                console.log('Image', e)
                return (
                  <Flex minW="300px" alignItems="center" flex={1} {...margins}>
                    <SanityImage width={1000} {...e} />
                  </Flex>
                )
              }
              default: {
                const { id, blocktype, ...componentProps } = e
                const Component = components[blocktype] || Fallback
                return (
                  <Component
                    key={id}
                    flex={1}
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
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
      ...HomepageMarkdownContent
      ... on SanityImage {
        ...ImageWithPreview
      }
    }
  }
`
