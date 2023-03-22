import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { HomepageImage } from '../components/ui'

export interface ICategoryArticlesProps {
  data: {
    pages: {
      nodes: { title: string; image: HomepageImage }[]
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
          gatsbyImageData
          alt
        }
      }
    }
  }
`
export default function CategoryArticles(props: ICategoryArticlesProps) {
  console.log(props)

  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex justifyContent="center" alignItems="stretch" flexWrap="wrap">
          {props.data.pages.nodes.concat(props.data.pages.nodes).map((n) => (
            <Box w="33.3333%" p={5}>
              <Box p={5} bg="background.400" h="100%" borderRadius="2xl">
                <BackgroundImage></BackgroundImage>
                <Text mb={2}>{n.title}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}
