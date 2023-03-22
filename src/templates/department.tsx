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

export interface BlogAuthor {
  id: string
  name: string
  avatar: HomepageImage
}

export interface IDepartmentProps {
  data: {
    page: {
      id: string
      slug: string
      title: string
      description: string
      blocks: sections.DepartmentBlock[]
    }
  }
  // excerpt: string
  // category: string
  // date: string
  // html: string
  // image: HomepageImage
  // author: BlogAuthor
  // next?: BlogPost
  // previous?: BlogPost
}
export const query = graphql`
  query DepartmentTemplateQuery($id: String!) {
    page: sanityDepartmentPage(id: { eq: $id }) {
      id
      title
      description
      slug
      blocks: content {
        id
        blocktype
        ...PeopleInfoContent
        ...HomepageMarkdownContent
      }
    }
  }
`
interface IPillProps {
  children: React.ReactNode
}
const Pill = (props: IPillProps) => (
  <Box bg="blue.700" px={2} borderRadius="xl">
    {props.children}
  </Box>
)

export default function Department(props: IDepartmentProps) {
  const { title, description } = props.data.page
  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" textAlign="center">
            {title}
          </Heading>
          <Breadcrumb display="flex" justifyContent="center" marginTop={3}>
            <BreadcrumbItem>
              <Link href="/">
                <Pill>Forside</Pill>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="#!">
                <Pill>Avdelinger</Pill>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Pill>{title}</Pill>
            </BreadcrumbItem>
          </Breadcrumb>
          {description && (
            <Heading as="h3" textAlign="center">
              {description}
            </Heading>
          )}
          {props.data.page.blocks.map((block) => {
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
