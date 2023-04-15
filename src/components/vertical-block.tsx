import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProps,
  Flex,
} from '@chakra-ui/react'

import * as components from './components'
import { graphql } from 'gatsby'
import PortableTextComponent from './portable-text'
import { VerticalBlockContent } from './sections'
import { Heading, Subhead, SubheadSmall } from './ui'
import Fallback from './fallback'
import SanityImage from 'gatsby-plugin-sanity-image'

export interface IVerticalBlockProps {
  title: string
  content: VerticalBlockContent[]
}
export default function VerticalBlock(
  props: IVerticalBlockProps & ChakraProps
) {
  const { title, content, ...chakraProps } = props
  return (
    <Box {...chakraProps}>
      {/* {title && <SubheadSmall px={4}>{title}</SubheadSmall>} */}

      {props.content.map((e, i) => {
        if (e === null) {
          return null
        }
        const margins = { mb: 10 }
        if ('asset' in e) {
          return <SanityImage width={1000} {...e} />
        }
        const { element } = e
        if (!element) {
          return null
        }
        const { blocktype, ...componentProps } = element
        const Component = components[blocktype] || Fallback
        return (
          <Component
            isParentVerticalBlock
            key={i}
            display="flex"
            flexDir="column"
            justifyContent={blocktype === 'Faq' ? 'flex-start' : 'center'}
            minW="300px"
            {...(componentProps as any)}
            {...margins}
          />
        )
      })}
    </Box>
  )
}

export const query = graphql`
  fragment VerticalBlockContent on SanityVerticalBlock {
    title
    blocktype
    content {
      ... on SanityVerticalBlockElement {
        element {
          blocktype
          ...FaqContent
          ...HomepageMarkdownContent
          ...FormContent
        }
      }
      ... on SanityImage {
        ...ImageWithPreview
      }
    }
  }
`
