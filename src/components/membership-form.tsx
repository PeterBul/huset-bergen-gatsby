import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Flex,
  FormControl,
  Input,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { graphql } from 'gatsby'
import InputFormField from './membership-page/input-form-field'

export interface IMembershipFormProps {
  title: string
  heading: string
  description: object[]
  category: {
    value: string
    title: string
  }[]
  namePlaceholder: string
  addressPlaceholder: string
  postCodePlaceholder: string
  cityPlaceholder: string
  phonePlaceholder: string
  emailPlaceholder: string
  messagePlaceholder: string
}

export default function MembershipForm(
  props: IMembershipFormProps & ChakraProps
) {
  const {
    title,
    heading,
    description,
    category,
    namePlaceholder,
    addressPlaceholder,
    postCodePlaceholder,
    cityPlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    ...chakraProps
  } = props
  function fieldMandatory(value: string) {
    if (!value) {
      return 'Dette feltet er påkrevd'
    }
  }
  return (
    <Box {...chakraProps}>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <InputFormField
              name="name"
              placeholder={namePlaceholder}
              validate={fieldMandatory}
            />
            <Flex>
              <InputFormField
                name="address"
                placeholder={addressPlaceholder}
                mr={1}
              />
              <InputFormField
                name="postCode"
                placeholder={postCodePlaceholder}
                ml={1}
              />
            </Flex>
            <InputFormField name="city" placeholder={cityPlaceholder} />
            <InputFormField name="phone" placeholder={phonePlaceholder} />
            <InputFormField
              name="email"
              placeholder={emailPlaceholder}
              validate={fieldMandatory}
            />
            <InputFormField
              name="message"
              placeholder={messagePlaceholder}
              isMultiline
            />

            <Button
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              isDisabled={!props.isValid}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export const query = graphql`
  fragment FormContent on SanityForm {
    title
    heading
    description
    category {
      value
      title
    }
    namePlaceholder
    addressPlaceholder
    postCodePlaceholder
    cityPlaceholder
    phonePlaceholder
    emailPlaceholder
    messagePlaceholder
  }
`
