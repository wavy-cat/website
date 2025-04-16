import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import SingleProject from "@/components/home/blocks/projects/single-project"
import {ScrollArea} from "@/components/ui/scroll-area"

// Блок с проектами
export default function Projects() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>Sorted by stars</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="md:h-[60vh]">
          <div className="space-y-4">
            <SingleProject name="Cat Activity"
                           badges={[
                             "Plugin",
                             "Kotlin",
                             "Discord"
                           ]}
                           description="Plugin for JetBrains IDE to show your activity in your Discord profile."
                           buttons={[
                             {
                               content: "Star on Github",
                               link: "https://github.com/wavy-cat/Cat-Activity",
                               target: "_blank"
                             },
                             {
                               content: "Marketplace",
                               link: "https://plugins.jetbrains.com/plugin/24065-cat-activity",
                               target: "_blank"
                             }
                           ]}/>
            <SingleProject name="TotemLib"
                           badges={[
                             "Library",
                             "Python",
                             "Minecraft"
                           ]}
                           description="Python library to generate totems of undying for Minecraft."
                           buttons={[
                             {
                               content: "Star on Github",
                               link: "https://github.com/wavy-cat/wavy-totem-lib",
                               target: "_blank"
                             },
                             {content: "PyPI", link: "https://pypi.org/project/wavy-totem-lib", target: "_blank"},
                             {content: "Docs", link: "https://totem-lib.wavycat.ru/", target: "_blank"},
                           ]}/>
            <SingleProject name="PetPet Go"
                           badges={[
                             "Service",
                             "Go",
                             "Discord"
                           ]}
                           description="A web service for generating petpet GIFs (and APNG now) based on a Discord user's avatar."
                           buttons={[
                             {
                               content: "Star on Github",
                               link: "https://github.com/wavy-cat/petpet-go",
                               target: "_blank"
                             },
                             {content: "Try it", link: "https://pet.wavycat.ru", target: "_blank"}
                           ]}/>
            <SingleProject name="Website"
                           badges={[
                             "Web",
                             "Next.js"
                           ]}
                           description="The personalized website you are currently on. Deployed in Cloudflare Pages."
                           buttons={[
                             {content: "Star on Github", link: "https://github.com/wavy-cat/website", target: "_blank"}
                           ]}/>
            <SingleProject name="doki"
                           badges={[
                             "CLI Utility",
                             "Go"
                           ]}
                           description="A minimalistic and fast port knocker."
                           buttons={[
                             {content: "Star on Github", link: "https://github.com/wavy-cat/doki", target: "_blank"},
                             {
                               content: "Install",
                               link: "https://github.com/wavy-cat/doki/releases/latest",
                               target: "_blank"
                             }
                           ]}/>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}