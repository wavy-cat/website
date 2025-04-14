import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {buttonVariants} from "@/components/ui/button"
import * as React from "react"
import {SiDiscord, SiGithub, SiSteam, SiTelegram} from "@icons-pack/react-simple-icons"
import Link from "next/link"
import Weather from "@/components/home/weather"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

// Блок с профилем
export default function Profile() {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex gap-4">
        <Avatar className="w-12 h-12 shadow-md">
          <AvatarImage src="/avatar.webp" alt="@shadcn"/>
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">Catherine Caramel</p>
          <p className="text-sm text-muted-foreground">@wavycat • she/her</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm">
          Ever-sleepy cat-girl and software engineer from Russia, building different open source products. Also
          hireable!
        </p>
        <p className="text-sm">Weather: <Weather /></p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {/*Github*/}
        <Link className={buttonVariants({variant: "outline", size: "icon"})}
              href="https://github.com/wavy-cat"
              target="_blank">
          <SiGithub/>
        </Link>

        {/*Discord*/}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link className={buttonVariants({variant: "outline", size: "icon"})}
                    href="https://discord.com/users/613651509015740416/"
                    target="_blank">
                <SiDiscord/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>@wavycat (WavyCat#0618)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/*Telegram*/}
        <Link className={buttonVariants({variant: "outline", size: "icon"})}
              href="https://wavycatter.t.me/"
              target="_blank">
          <SiTelegram/>
        </Link>

        {/*Steam*/}
        <Link className={buttonVariants({variant: "outline", size: "icon"})}
              href="https://steamcommunity.com/id/wavycat/"
              target="_blank">
          <SiSteam/>
        </Link>
      </CardFooter>
    </Card>
  )
}