import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Section } from './ui'
import * as components from './components'
import type { HorizontalSectionContent } from './sections'
import Fallback from './fallback'
import { Box, Flex } from '@chakra-ui/react'
import SanityImage from 'gatsby-plugin-sanity-image'

export interface IHorizontalSectionProps {
  title: string
  content: HorizontalSectionContent[]
}

export default function HorizontalSection(props: IHorizontalSectionProps) {
  return (
    <Section>
      <Container>
        <Flex>
          {props.content.map((e, i) => {
            const isFirst = i === 0
            const isLast = i === props.content.length - 1
            switch (e.blocktype) {
              case 'Image': {
                console.log('Image', e)
                return (
                  <Box width="500px" flex={1}>
                    <SanityImage width={500} {...e} />
                  </Box>
                )
              }
              default: {
                const { id, blocktype, ...componentProps } = e
                const Component = components[blocktype] || Fallback
                const m = 20
                return (
                  <Component
                    key={id}
                    flex={1}
                    {...(componentProps as any)}
                    ml={!isFirst ? m : undefined}
                    mr={!isLast ? m : undefined}
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
