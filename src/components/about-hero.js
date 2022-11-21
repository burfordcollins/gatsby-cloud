import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Container, Section, Text, SuperHeading, Box, Flex} from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  return (
    <Section>
      <Container>
          <Flex gap={4} variant="responsive">
              <Box width="half">
                  <SuperHeading className={styles.aboutHeroHeader}>
                      {props.heading}
                  </SuperHeading>
                  {props.text && (
                      <Text className={styles.aboutHeroText}>{props.text}</Text>
                  )}
              </Box>
              <Box width="half">
                  {props.image && (
                      <GatsbyImage
                          alt={props.image.alt}
                          image={getImage(props.image.gatsbyImageData)}
                          className={styles.aboutHeroImage}
                      />
                  )}
              </Box>
          </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
