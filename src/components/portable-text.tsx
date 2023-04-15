import { Box, ChakraProps, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { PortableText } from '@portabletext/react'
import SanityImage from 'gatsby-plugin-sanity-image'
import { Heading } from './ui'

export interface IPortableTextProps {
  heading?: string
  blockContent: any
}

const PortableTextWrapper = styled('div')`
  a {
    color: var(--chakra-colors-link);
  }
`

export default function PortableTextComponent({
  heading,
  blockContent,
  ...chakraProps
}: IPortableTextProps & ChakraProps) {
  return (
    <Box {...chakraProps}>
      {heading && <Heading>{heading}</Heading>}
      <PortableTextWrapper>
        <PortableText
          value={blockContent}
          components={{
            types: {
              image: ({ value }) => {
                let { justifyContent, width, ...image } = value
                if (!Number.isNaN(Number.parseFloat(width))) {
                  width = `${Number.parseFloat(width)}px`
                }
                return (
                  <Flex justifyContent={justifyContent}>
                    <Box p={4} maxW={width}>
                      <SanityImage {...image} />
                    </Box>
                  </Flex>
                )
              },
            },
          }}
        />
      </PortableTextWrapper>
    </Box>
  )
}
