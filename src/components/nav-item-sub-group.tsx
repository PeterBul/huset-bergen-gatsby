import {
  Box,
  ChakraProps,
  ChakraStyledOptions,
  ChakraTheme,
} from '@chakra-ui/react'
import NavItemGroup, { NavItemGroupItem } from './nav-item-group'
import { Icon, NavLink } from './ui'

interface NavItemSubGroupProps extends ChakraProps {
  name: string
  navItems: NavItemGroupItem[]
  onNavItemHover?: (navItem: NavItemGroupItem) => void
  activeNavItem?: string | null
}
export default function NavItemSubGroup({
  name,
  navItems,
  onNavItemHover,
  activeNavItem,
  background,
  ...chakraProps
}: NavItemSubGroupProps) {
  console.log(navItems)
  return (
    <Box minW="250px" {...chakraProps}>
      {navItems?.map((navItem) => {
        const isActiveItem = navItem.id === activeNavItem
        const getHoverBackground = (checkIfActive = true) => {
          if (checkIfActive && navItem && !isActiveItem) {
            return
          }
          if (chakraProps.backgroundColor || chakraProps.bg) {
            return 'background.700'
          }
          return 'background.800'
        }
        if (navItem.navItemType === 'Group') {
          return (
            <Box
              key={navItem.id}
              onMouseEnter={() => {
                if (onNavItemHover) {
                  onNavItemHover(navItem)
                }
              }}
            >
              <Box
                display="flex"
                m={1}
                mr={isActiveItem ? 0 : undefined}
                alignItems="center"
                bg={getHoverBackground()}
                _hover={{
                  background: 'background.800',
                }}
                p={2}
                borderRadius="md"
              >
                <Box mr={2} boxSize="icon.md"></Box>
                {navItem.name}
              </Box>
            </Box>
          )
        } else if (navItem.navItemType === 'Link') {
          return (
            <NavLink
              onMouseEnter={() => {
                if (onNavItemHover) {
                  onNavItemHover(navItem)
                }
              }}
              to={navItem.href}
              key={navItem.id}
            >
              <Box
                display="flex"
                m={1}
                alignItems="center"
                _hover={{
                  background: 'background.800',
                }}
                p={2}
                borderRadius="md"
              >
                <Box mr={2} boxSize="icon.md">
                  {navItem.icon && (
                    <Icon
                      alt={navItem.icon.alt || ''}
                      image={navItem.icon.gatsbyImageData}
                    />
                  )}
                </Box>
                {navItem.text}
              </Box>
            </NavLink>
          )
        } else if (navItem.navItemType === 'DepartmentPage') {
          return (
            <NavLink
              onMouseEnter={() => {
                if (onNavItemHover) {
                  onNavItemHover(navItem)
                }
              }}
              to={`/avdelinger/${navItem.slug}`}
              key={navItem.id}
            >
              <Box
                display="flex"
                m={1}
                alignItems="center"
                _hover={{
                  background: 'background.800',
                }}
                p={2}
                borderRadius="md"
              >
                <Box mr={2} boxSize="icon.md"></Box>
                {navItem.title}
              </Box>
            </NavLink>
          )
        }
        throw new Error('Nav item type is not implemented')
      })}
    </Box>
  )
}
