import React, { useCallback, useEffect, useRef } from "react"
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import { Autoplay, Keyboard, Navigation } from "swiper"
import { useAnimationControls } from "framer-motion"
import { MotionDiv } from "./motion-div"
import { ImageItem } from "./carsousel-section"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const images = [
  {
    key: "programmer",
    src: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=1380&t=st=1677423090~exp=1677423690~hmac=1ec09376842f31dc30f5edab8b2e7c1740f0fcfa8ca851f9ea1e2da431cdd9bc",
    alt: "Programmer",
  },
  {
    key: "laptop",
    src: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=1060&t=st=1677423127~exp=1677423727~hmac=dfabb47a330676aad539ef4e206430372f73e86b4d5f44cc677f18e15bbb0c8b",
    alt: "Laptop",
  },
  {
    key: "cyberpunk",
    src: "https://img.freepik.com/free-photo/cool-geometric-triangular-hallway-3d-rendering_181624-11762.jpg?w=1480&t=st=1677423164~exp=1677423764~hmac=d8d67419d2be8592253a51c6d0e01327dc20a4c74e49d6f1edbf5a5a9ce022e5",
    alt: "Cyberpunk",
  },
]

interface IProps {
  images: ImageItem[]
}

const Carousel = (props: IProps) => {
  const { images } = props
  const controls = useAnimationControls()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])
  const runAnimation = useCallback(() => {
    if (mounted.current) {
      controls.start({
        y: [20, 0],
        opacity: [0, 1],
        transition: { duration: 0.8, delay: 0 },
      })
    }
  }, [controls])

  useEffect(() => {
    runAnimation()
    return () => {
      controls.stop()
    }
  }, [controls, runAnimation])

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Keyboard, Autoplay]}
      keyboard={{ enabled: true, onlyInViewport: true }}
      loop
      autoplay={{ delay: 5000 }}
      onSlideChangeTransitionStart={(s) => {
        runAnimation()
      }}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Box display="flex" justifyContent="center">
            <Box display="flex">
              <GatsbyImage
                alt={image.alt}
                image={getImage(image.image.gatsbyImageData)}
              />
              <MotionDiv
                animate={controls}
                initial={{ y: 10, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // @ts-ignore
                transition={{ duration: 0.8, delay: 0 }}
                minW="200px"
                m="50px"
              >
                <Heading as="h3" variant="section-title">
                  Some heading aaaa
                </Heading>
              </MotionDiv>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
