import React from "react"
import { Container } from "@chakra-ui/react"
import { MotionDiv } from "./motion-div"

interface IProps {
  children: React.ReactNode | React.ReactNode[]
  delay?: number
  maxW?: string
}

const Section = ({ children, delay = 0, maxW = "container.md" }: IProps) => {
  return (
    <Container maxW={maxW}>
      <MotionDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.8, delay }}
        mb={6}
      >
        {children}
      </MotionDiv>
    </Container>
  )
}

export default Section
