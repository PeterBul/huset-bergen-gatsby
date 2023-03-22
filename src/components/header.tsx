import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Menu, X } from 'react-feather'
import {
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from './ui'
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from './header.css'
import NavItemGroup, { NavItemGroupItem } from './nav-item-group'
import BrandLogo from './brand-logo'
import { ThemeToggleButton } from './theme-toggle-button'
import { Box, Container, Flex } from '@chakra-ui/react'

type NavItem = {
  id: string
  navItemType: 'Link'
  href: string
  text: string
}

type NavItemGroup = {
  id: string
  navItemType: 'Group'
  name: string
  navItems: NavItemGroupItem[]
}

interface HeaderData {
  layout: {
    header: {
      id: string
      navItems: (NavItem | NavItemGroup)[]
      cta: {
        id: string
        href: string
        text: string
      }
    }
  }
}

export default function Header() {
  const data: HeaderData = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
              description
              icon {
                ...ImageWithPreview
              }
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                navItemType
                ... on NavItem {
                  href
                  text
                  description
                  icon {
                    ...ImageWithPreview
                  }
                }
                ... on NavItemGroup {
                  name
                  navItems {
                    id
                    navItemType
                    ... on NavItem {
                      href
                      text
                      description
                      icon {
                        ...ImageWithPreview
                      }
                    }
                    ... on DepartmentPage {
                      slug
                      title
                    }
                  }
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header
  const [isOpen, setOpen] = React.useState(false)
  console.log('data', data)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'visible'
    }
  }, [isOpen])

  return (
    <header>
      <Container maxW="container.xl" className={desktopHeaderNavWrapper}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          padding="4"
          width="100%"
        >
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === 'Group' ? (
                      <NavItemGroup
                        name={navItem.name}
                        navItems={navItem.navItems}
                      />
                    ) : (
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav>
          <ThemeToggleButton />
        </Flex>
      </Container>
      <Container
        maxW="container.md"
        className={mobileHeaderNavWrapper[isOpen ? 'open' : 'closed']}
      >
        <Space size={2} />
        <Flex justifyContent="space-between">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? 'reversed' : 'primary']
            }
          >
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />
            <div>
              {cta && (
                <Button to={cta.href} variant={isOpen ? 'reversed' : 'primary'}>
                  {cta.text}
                </Button>
              )}
            </div>
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? 'reversed' : 'primary']
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  {navItem.navItemType === 'Group' ? (
                    <NavItemGroup
                      name={navItem.name}
                      navItems={navItem.navItems}
                    />
                  ) : (
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
