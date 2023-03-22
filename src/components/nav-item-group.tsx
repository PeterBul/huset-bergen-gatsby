import { HomepageImage, Icon, ISanityImage, NavLink } from './ui'
import {
  Box,
  Button,
  css,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  styled,
} from '@chakra-ui/react'
import NavItemSubGroup from './nav-item-sub-group'
import { useState } from 'react'

export type NavItemGroupNavItem = {
  id: string
  navItemType: 'Link'
  href: string
  icon: ISanityImage
  text: string
  description?: string
}

export type NavItemGroupNavItemGroup = {
  id: string
  navItemType: 'Group'
  name: string
  navItems: NavItemGroupItem[]
}

export type NavItemGroupDepartmentPage = {
  id: string
  navItemType: 'DepartmentPage'
  title: string
  slug: string
}

export type NavItemGroupItem =
  | NavItemGroupNavItem
  | NavItemGroupNavItemGroup
  | NavItemGroupDepartmentPage

interface NavItemGroupProps {
  name: string
  navItems: NavItemGroupItem[]
}

export default function NavItemGroup({ name, navItems }: NavItemGroupProps) {
  const [activeNavItem, setActiveNavItem] = useState<NavItemGroupItem | null>(
    null
  )
  return (
    <Popover
      trigger="hover"
      openDelay={0}
      closeDelay={200}
      gutter={0}
      placement="bottom-start"
      onClose={() => setActiveNavItem(null)}
    >
      <PopoverTrigger>
        <Button
          py="30px"
          _hover={{ bg: 'transparent', color: 'background.200' }}
          bg="none"
        >
          {name}
        </Button>
        {/* <Box>
          <NavLink to="/about">Trigger</NavLink>
        </Box> */}
      </PopoverTrigger>
      <PopoverContent w="auto">
        <PopoverBody display="flex">
          <NavItemSubGroup
            navItems={navItems}
            name={name}
            onNavItemHover={(navItem) => {
              setActiveNavItem(navItem)
            }}
            activeNavItem={activeNavItem?.id}
          />
          {activeNavItem && activeNavItem.navItemType === 'Group' && (
            <NavItemSubGroup
              navItems={activeNavItem.navItems}
              name={name}
              borderRadius="md"
              display="flex"
              flexDir="column"
              justifyContent="end"
            />
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
