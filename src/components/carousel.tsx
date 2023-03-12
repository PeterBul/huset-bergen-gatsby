import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonList } from './ui'

import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Keyboard, Navigation } from 'swiper'
import { useAnimationControls } from 'framer-motion'
import { MotionDiv } from './motion-div'
import { ImageItem } from './carsousel-section'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

interface IProps {
  slides: ImageItem[]
}

const StyledSwiper = styled(Swiper)`
  z-index: 0 !important;
`

const Carousel = (props: IProps) => {
  const { slides } = props
  const controls = useAnimationControls()
  const mounted = useRef(false)

  useLayoutEffect(() => {
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
    if (mounted.current) {
      runAnimation()
    }
    return () => {
      controls.stop()
    }
  }, [controls, runAnimation])

  return (
    <StyledSwiper
      navigation={true}
      modules={[Navigation, Keyboard, Autoplay]}
      keyboard={{ enabled: true, onlyInViewport: true }}
      loop
      autoplay={{ delay: 5000 }}
      onSlideChangeTransitionStart={(s) => {
        runAnimation()
      }}
      speed={600}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} style={{ height: 'unset' }}>
          <Flex justifyContent="center" height="100%">
            <Flex alignItems="center" justifyContent="center" maxH="396px">
              <GatsbyImage
                alt={slide.image.alt}
                image={slide.image.gatsbyImageData}
                backgroundColor="transparent"
              />
              {(slide.heading || slide.text) && (
                <MotionDiv
                  animate={controls}
                  initial={{ y: 10, opacity: 0 }}
                  // animate={{ y: 0, opacity: 1 }}
                  // @ts-ignore
                  transition={{ duration: 0.8, delay: 0 }}
                  m={{ base: '3%', md: '100px' }}
                  maxW="500px"
                  minW="300px"
                >
                  <Heading as="h3">{slide.heading}</Heading>
                  <Text>{slide.text}</Text>
                  {slide.links && <ButtonList links={slide.links} />}
                </MotionDiv>
              )}
            </Flex>
          </Flex>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  )
}

export default Carousel
