import Profile from "@/components/home/blocks/profile"
import Projects from "@/components/home/blocks/projects/projects"
import Another from "@/components/home/blocks/another"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-3">
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl items-start mt-10 mb-10">
        {/*Левый блок*/}
        <div className="flex flex-col gap-6">
          <Profile />
          <Another />
        </div>

        {/*Правый блок*/}
        <div className="flex flex-col gap-6">
          <Projects />
        </div>
      </div>
    </main>
  )
}
