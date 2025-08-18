import StoryCard from "@/components/StoryCard";
import { stories } from "@/util/constants";

export async function generateStaticParams() {
  return stories.map((story) => ({
    name: story.name,
  }))
}

export default async function Page({ params }) {
  const { name } = await params;
  const story = stories.filter((s) => s.name === name)[0];
  return (
    <main className="flex items-center justify-center flex-col bg-gray text-black">
      <div className="flex flex-col w-3/4 gap-26 py-26 px-26">
        <h1 className="text-7xl font-bold text-gray text-center">Historias destacadas</h1>
        <StoryCard {...story} />
      </div>
    </main>
  )
}
