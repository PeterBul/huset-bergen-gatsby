import {
  Box,
  ChakraProps,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { Field } from 'formik'

interface IInputFormFieldProps {
  name: string
  placeholder: string
  isMultiline?: boolean
  validate?: (value: string) => string | undefined
}

export default function InputFormField(
  props: IInputFormFieldProps & ChakraProps
) {
  const { name, placeholder, isMultiline, validate, ...chakraProps } = props
  return (
    <Box flex={1} {...chakraProps}>
      <Field name={name} validate={validate}>
        {({ field, form }) => (
          <FormControl
            mb={4}
            isInvalid={form.errors[name] && form.touched[name]}
          >
            {isMultiline ? (
              <Textarea {...field} placeholder={placeholder} />
            ) : (
              <Input {...field} placeholder={placeholder} />
            )}
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Box>
  )
}
