import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition"
  },
})
