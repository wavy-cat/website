import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

export default function Another() {
  return (
    // Ideas:
    // * weather and time
    // * services status
    <Card className="hidden md:block shadow-md">
      <CardHeader>
        <CardTitle>
          Please disregard this block!
        </CardTitle>
        <CardDescription>
          It&#39;s another block to fill the space.
          In the future, something may come up here.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}