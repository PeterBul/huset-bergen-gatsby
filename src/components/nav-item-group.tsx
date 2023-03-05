import * as React from "react"
import { HomepageImage, Icon, NavLink } from "./ui"
import {
  Box,
  Button,
  css,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react"

export type NavItemGroupNavItem = {
  id: string
  href: string
  icon: HomepageImage
  text: string
  description?: string
}

interface NavItemGroupProps {
  name: string
  navItems: NavItemGroupNavItem[]
}

export default function NavItemGroup({ name, navItems }: NavItemGroupProps) {
  return (
    <Popover trigger="hover" openDelay={0} closeDelay={0} gutter={0}>
      <PopoverTrigger>
        <Button
          py="30px"
          _hover={{ bg: "transparent", color: "blue.200" }}
          bg="none"
        >
          Trigger
        </Button>
        {/* <Box>
          <NavLink to="/about">Trigger</NavLink>
        </Box> */}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          {navItems.map((navItem) => {
            return (
              <NavLink to={navItem.href} key={navItem.id}>
                <Box
                  display="flex"
                  m={1}
                  alignItems="center"
                  _hover={{
                    background: "blue.800",
                  }}
                  p={2}
                  borderRadius="md"
                >
                  <Box mr={2} boxSize="icon.md">
                    {navItem.icon && (
                      <Icon
                        alt={navItem.icon.alt || ""}
                        image={navItem.icon.gatsbyImageData}
                      />
                    )}
                  </Box>
                  {navItem.text}
                </Box>
              </NavLink>
            )
          })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
