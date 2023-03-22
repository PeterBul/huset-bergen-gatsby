import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  Container,
  Flex,
  Space,
  Heading,
  HomepageImage,
  Link,
  SuperHeading,
  ISanityImage,
} from '../components/ui'
import { avatar as avatarStyle } from '../components/ui.css'
import * as styles from './blog-post.css'
import SEOHead from '../components/head'
import * as sections from '../components/sections'
import Fallback from '../components/fallback'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react'
import { PageTitle } from '../components/page-title'
import SanityImage from 'gatsby-plugin-sanity-image'

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
      slug
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
      }
    }
  }
`

export default function Article(props: IArticleProps) {
  const { title, image, blocks, categories } = props.data.page
  const crumbs =
    categories && categories.length > 0
      ? [{ href: '/' as string | null, text: 'Forside' }]
          .concat(
            categories.map((c) => ({
              href: `/category/${c.slug}`,
              text: c.label,
            }))
          )
          .concat([{ text: title, href: null }])
      : undefined
  console.log(image)
  return (
    <Layout>
      <Container>
        {/* TODO: Add categories as pills */}
        <Box>
          <PageTitle title={title} crumbs={crumbs} />
          <GatsbyImage
            image={image.asset.gatsbyImageData}
            alt={image.asset.alt}
          />
          {blocks.map((block) => {
            const { id, blocktype, ...componentProps } = block
            const Component = sections[blocktype] || Fallback
            return <Component key={id} {...(componentProps as any)} />
          })}
        </Box>
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
