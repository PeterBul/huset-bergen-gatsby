import { graphql } from 'gatsby'
import PersonInfo, { IPersonInfoProps } from './person-info'
import { Container, FlexList, Heading, Section, Text, Box, Kicker } from './ui'

export interface IAboutPeopleProps {
  kicker?: string
  heading?: string
  subhead?: string
  people: (IPersonInfoProps & { id: string })[]
}

export default function PeopleInfo(props: IAboutPeopleProps) {
  return (
    <Section>
      <Container width="tight">
        {(props.kicker || props.heading || props.subhead) && (
          <Box center paddingY={4}>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading && <Heading>{props.heading}</Heading>}
            {props.subhead && <Text>{props.subhead}</Text>}
          </Box>
        )}
        <FlexList gap={0} variant="center" alignItems="start">
          {props.people.map(({ id, ...profile }) => (
            <PersonInfo key={id} {...profile} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment PeopleInfoContent on PeopleInfo {
    id
    kicker
    heading
    subhead
    people: content {
      id
      name
      jobTitle
      image {
        gatsbyImageData
        alt
      }
      email
      desc
    }
  }
`
