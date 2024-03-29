import styled from '@emotion/styled'
import { PortableText } from '@portabletext/react'
import { graphql } from 'gatsby'
import { Container, Heading, Section } from './ui'

export interface IMarkdownSectionProps {
  heading: string
  blockContent: any
}

const PortableTextWrapper = styled('div')`
  a {
    color: var(--chakra-colors-link);
  }
`

export default function MarkdownSection(props: IMarkdownSectionProps) {
  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <PortableTextWrapper>
          <PortableText value={props.blockContent} />
        </PortableTextWrapper>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageMarkdownContent on HomepageMarkdown {
    heading
    blockContent
  }
`
