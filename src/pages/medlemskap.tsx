import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as sections from '../components/sections'
import Fallback from '../components/fallback'
import SEOHead from '../components/head'
import { HomepageImage } from '../components/ui'

interface AboutProps {
  data: {
    sanityMembershipPage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
    sanityForm: any
  }
}

export default function Medlemskap(props: AboutProps) {
  const { sanityMembershipPage, sanityForm } = props.data
  console.log(sanityForm)

  return (
    <Layout>
      {sanityMembershipPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })}
    </Layout>
  )
}
export const Head = (props: AboutProps) => {
  const { sanityMembershipPage } = props.data
  return <SEOHead {...sanityMembershipPage} />
}
export const query = graphql`
  {
    sanityMembershipPage {
      id
      title
      description
      image {
        ...ImageWithPreview
      }
      blocks: content {
        id
        blocktype
        ...HorizontalSectionContent
      }
    }
    sanityForm {
      ...FormContent
    }
  }
`
