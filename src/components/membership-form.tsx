import { Box, Button, ChakraProps, Flex } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { graphql } from 'gatsby'
import InputFormField from './membership-page/input-form-field'
import PortableTextComponent from './portable-text'
import { Subhead } from './ui'

export interface IMembershipFormProps {
  title: string
  heading: string
  descriptionBlockContent: object[]
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
    descriptionBlockContent: description,
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
  // TODO: Use a library for email validation
  function validateEmail(value: string) {
    const checkMandatory = fieldMandatory(value)
    if (checkMandatory) {
      return checkMandatory
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return 'Ugyldig e-postadresse'
    }
  }
  return (
    <Box {...chakraProps}>
      {heading && <Subhead>{heading}</Subhead>}
      {description && (
        <PortableTextComponent blockContent={description} mb={4} />
      )}
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
        isInitialValid={false}
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
              validate={validateEmail}
              type="email"
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
    descriptionBlockContent
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
