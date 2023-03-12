import { Box, chakra, Flex } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { graphql } from 'gatsby'
import React from 'react'
import { Container, Heading, Section, Subhead } from './ui'

export interface IMarkdownSectionProps {
  heading: string
  blockContent: any
}

export default function MarkdownSection(props: IMarkdownSectionProps) {
  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <PortableText value={props.blockContent} />
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageMarkdownContent on HomepageMarkdown {
    id
    heading
    blockContent
  }
`
