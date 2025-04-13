import {buttonVariants} from "@/components/ui/button"
import Link from "next/link"
import * as React from "react"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

export type ButtonData = {
  content: string
  link: string
  target?: React.HTMLAttributeAnchorTarget
}

interface ProjectProps {
  name: string
  badges: string[]
  description: string
  buttons: ButtonData[]
}

export default function SingleProject(props: ProjectProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <div className="flex gap-2 mt-1">
          {props.badges.map((text, index) => (
            <Badge key={index} variant="secondary">
              {text}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="flex gap-2">
        {props.buttons.map((data, index) => (
          <Link key={index}
                className={buttonVariants({variant: "outline", size: "sm"})}
                href={data.link}
                target={data.target}>
            {data.content}
          </Link>
        ))}
      </CardFooter>
    </Card>
  )
}