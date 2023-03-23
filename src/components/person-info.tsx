import { Box, Flex, Link, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import SanityImage from 'gatsby-plugin-sanity-image'
import { HomepageImage, ISanityImage, Space } from './ui'

export interface IPersonInfoProps {
  name?: string
  desc?: string
  jobTitle?: string
  email?: string
  image?: ISanityImage
}

const ImageCropper = styled('div')`
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
  position: relative;
`
const Dummy = styled('div')`
  margin-top: 100%;
`

// @ts-ignore
const StyledImage = styled(SanityImage)`
  border-radius: 50%;
`

export default function PersonInfo(props: IPersonInfoProps) {
  const { name, jobTitle, email, image } = props
  return (
    <Flex flexDir="column" width="33.33333%" padding="8">
      {image && (
        <>
          <StyledImage {...image} width={200} height={200} />
          <Space size={3} />
        </>
      )}
      <Box textAlign="center">
        <Text fontWeight="bold">{name}</Text>
        {jobTitle && <Text>{jobTitle}</Text>}
        {email && (
          <Link display="block" href={`mailto:${email}`}>
            Send meg mail
          </Link>
        )}
      </Box>
    </Flex>
  )
}
