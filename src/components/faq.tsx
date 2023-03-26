import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProps,
  Flex,
} from '@chakra-ui/react'
import { graphql } from 'gatsby'
import PortableTextComponent from './portable-text'
import { Heading, Subhead, SubheadSmall } from './ui'

export interface IFaqProps {
  heading: string
  questionsAndAnswers: { question: string; answer: any }[]
}
export default function Faq(props: IFaqProps & ChakraProps) {
  const { heading, questionsAndAnswers, ...chakraProps } = props
  return (
    <Box {...chakraProps}>
      {heading && <SubheadSmall px={4}>{heading}</SubheadSmall>}
      <Accordion allowToggle>
        {questionsAndAnswers.map((qa) => (
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {qa.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <PortableTextComponent blockContent={qa.answer} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export const query = graphql`
  fragment FaqContent on SanityFaq {
    heading
    questionsAndAnswers {
      question
      answer
    }
  }
`
