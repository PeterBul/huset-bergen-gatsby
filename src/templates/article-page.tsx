import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { Container, HomepageImage, ISanityImage } from '../components/ui'
import { avatar as avatarStyle } from '../components/ui.css'
import * as styles from './blog-post.css'
import SEOHead from '../components/head'
import * as sections from '../components/sections'
import Fallback from '../components/fallback'
import { Flex, Text } from '@chakra-ui/react'
import { PageTitle } from '../components/page-title'

export interface BlogAuthor {
  id: string
  name: string
  avatar: HomepageImage
}

export interface IArticleProps {
  data: {
    page: {
      id: string
      slug: string
      title: string
      intro?: string
      kicker?: string
      image: ISanityImage
      categories: { label: string; slug: string }[]
      // description: string
      blocks: sections.ArticleBlock[]
    }
  }
}
export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    page: sanityArticlePage(id: { eq: $id }) {
      id
      title
      intro
      slug
      kicker
      image {
        asset {
          gatsbyImageData
          alt
        }
      }
      categories {
        label
        slug
      }
      blocks: content {
        id
        blocktype
        ...HomepageMarkdownContent
        ...HomepageHeroContent
        ...HorizontalSectionContent
      }
    }
  }
`

export default function Article(props: IArticleProps) {
  const { title, intro, image, blocks, categories, kicker } = props.data.page
  const crumbs =
    categories && categories.length > 0
      ? [{ href: '/' as string | null, text: 'Forside' }]
          .concat(
            categories.map((c) => {
              if (!c) {
                return null
              }
              return {
                href: `/kategorier/${c.slug}`,
                text: c.label,
              }
            })
          )
          .filter((c) => c !== null)
          .concat([{ text: title, href: null }])
      : undefined
  return (
    <Layout>
      <Container>
        <PageTitle kicker={kicker} title={title} crumbs={crumbs} />
        <Flex justifyContent="center">
          <GatsbyImage
            image={image.asset.gatsbyImageData}
            alt={image.asset.alt}
          />
        </Flex>
        {intro && (
          <Text mt={10} fontSize="xl" mx={8}>
            {intro}
          </Text>
        )}
        {blocks.map((block) => {
          if (!block) {
            return null
          }
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...(componentProps as any)} />
        })}
      </Container>
    </Layout>
  )
}
// export const Head = (props: IDepartmentProps) => {
//   return (
//     <SEOHead
//       {...props}
//       // description={props.excerpt}
//     />
//   )
// }
