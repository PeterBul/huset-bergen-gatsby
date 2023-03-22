import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { HomepageImage, ISanityImage } from '../components/ui'

export interface ICategoryArticlesProps {
  data: {
    pages: {
      nodes: { title: string; image: ISanityImage }[]
    }
  }
}
export const query = graphql`
  query CategoryArticlesTemplate($slug: String!) {
    pages: allArticlePage(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        title
        image {
          asset {
            gatsbyImageData(width: 340, height: 210)
            alt
          }
        }
      }
    }
  }
`

const StyledImage = styled(GatsbyImage)`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
`

export default function CategoryArticles(props: ICategoryArticlesProps) {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex justifyContent="center" alignItems="stretch" flexWrap="wrap">
          {props.data.pages.nodes.concat(props.data.pages.nodes).map((n) => (
            <Box w="33.3333%" p={5} h="500px">
              <Box
                bg="background.400"
                w="100%"
                maxW="340px"
                h="100%"
                borderRadius="2xl"
                overflow="hidden"
              >
                <Box
                  backgroundImage={
                    n.image.asset.gatsbyImageData.images.fallback.src
                  }
                  width="100%"
                  height="200px"
                />
                <Text p={5} mb={2}>
                  {n.title}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}
