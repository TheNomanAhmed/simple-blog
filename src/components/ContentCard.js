import React from "react"
import { CardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const ContentCard = ({ date, title, excerpt, slug, image }) => {
  return (
    <CardWrapper>
      <P
        size="xxSmall"
        textAlign="center"
        alignSelf="flex-end"
        margin="0 0 0.5rem 0"
        color="dark1"
      >
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="small" color="dark2" textAlign="center" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
