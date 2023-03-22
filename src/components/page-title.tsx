import { Box, Breadcrumb, BreadcrumbItem, Heading } from '@chakra-ui/react'
import { Link } from './ui'

interface IPillProps {
  children: React.ReactNode
}
const Pill = (props: IPillProps) => (
  <Box bg="blue.700" px={2} borderRadius="xl">
    {props.children}
  </Box>
)

interface IPageTitleProps {
  title: string
  crumbs?: { href: string | null; text: string }[]
}

export function PageTitle(props: IPageTitleProps) {
  const { title, crumbs } = props
  return (
    <>
      <Heading as="h1" textAlign="center">
        {title}
      </Heading>
      {crumbs && (
        <Breadcrumb display="flex" justifyContent="center" mt={3} mb={20}>
          {crumbs.map((crumb) => (
            <BreadcrumbItem>
              {crumb.href ? (
                <Link href={crumb.href}>
                  <Pill>{crumb.text}</Pill>
                </Link>
              ) : (
                <Pill>{title}</Pill>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
    </>
  )
}
