import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Tag,
  Text,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import moment from 'moment'
import Layout from '../components/layout'
import { PageTitle } from '../components/page-title'
import {
  ISanityImage,
  Kicker,
  Link,
  Space,
  SubheadSmall,
} from '../components/ui'

export interface ICategoryArticlesProps {
  data: {
    pages: {
      nodes: {
        title: string
        slug: string
        publishDate: string | null
        kicker: string | null
        intro: string | null
        image: ISanityImage
      }[]
    }
    category: { label: string } | null
  }
}
export const query = graphql`
  query CategoryArticlesTemplate($slug: String!) {
    category: sanityCategory(slug: { eq: $slug }) {
      label
    }
    pages: allSanityArticlePage(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        title
        slug
        kicker
        intro
        publishDate
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

const borderRadius = '20px'
const maxWidth = '340px'

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: ${maxWidth};
  border-radius: ${borderRadius};
`

export default function CategoryArticles(props: ICategoryArticlesProps) {
  const pages = props.data.pages.nodes.filter(
    (n) => n.publishDate && moment(n.publishDate).isSameOrBefore(moment())
  )
  return (
    <Layout>
      <Container maxW="container.xl">
        <PageTitle kicker={'Kategori'} title={props.data.category?.label} />
        <Space size={5} />
        <Box
          display={{ md: 'flex' }}
          justifyContent="center"
          alignItems="stretch"
          flexWrap="wrap"
        >
          {pages.map((n) => (
            <Flex
              w={{ md: '33.333333%' }}
              minW={{ md: '360px' }}
              p={5}
              h="600px"
              justifyContent="center"
            >
              <StyledLink to={`/artikler/${n.slug}`}>
                <Box
                  w="100%"
                  h="100%"
                  borderRadius={borderRadius}
                  overflow="hidden"
                  bg="background.700"
                >
                  <Box
                    backgroundImage={
                      n.image.asset.gatsbyImageData.images.fallback.src
                    }
                    width="100%"
                    minH="200px"
                    height="200px"
                  />
                  <Tag size="sm" mt={3} ml={3}>
                    {moment(n.publishDate).format('DD. MMMM YYYY')}
                  </Tag>
                  <Box p={5}>
                    <Flex h={4} alignItems="flex-end">
                      {n.kicker && <Kicker my={0}>{n.kicker}</Kicker>}
                    </Flex>
                    <SubheadSmall mt={1}>{n.title}</SubheadSmall>
                    {n.intro && (
                      <Text fontSize="md" noOfLines={8}>
                        {n.intro}
                      </Text>
                    )}
                  </Box>
                </Box>
              </StyledLink>
            </Flex>
          ))}
        </Box>
      </Container>
    </Layout>
  )
}
