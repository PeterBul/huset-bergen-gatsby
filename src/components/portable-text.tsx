import { Box, ChakraProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { PortableText } from '@portabletext/react'
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
        <PortableText value={blockContent} />
      </PortableTextWrapper>
    </Box>
  )
}
