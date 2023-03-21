import { Box, Flex, Link, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HomepageImage, Space } from './ui'

export interface IPersonInfoProps {
  name?: string
  desc?: string
  jobTitle?: string
  email?: string
  image?: HomepageImage
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

const ProfileImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default function PersonInfo(props: IPersonInfoProps) {
  const { name, jobTitle, email, image } = props
  return (
    <Flex flexDir="column" width="33.33333%" padding="8">
      {image && (
        <>
          <ImageCropper>
            <Dummy />
            <ProfileImage image={image.gatsbyImageData} alt={image.alt} />
          </ImageCropper>
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
