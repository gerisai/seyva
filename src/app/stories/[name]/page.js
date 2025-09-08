import StoryCard from "@/components/StoryCard";
import SimpleQuote from "@/components/SimpleQuote";
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
      <div className="flex flex-col w-3/4 px-2
        xl:gap-26 xl:py-26
        lg:gap-20 lg:py-20
        md:gap-16 md:py-16
        sm:gap-12 sm:py-12
        xs:gap-10 xs:py-10
      ">
        <h1 className="font-bold text-gray text-center
          lg:text-7xl
          md:text-6xl
          sm:text-5xl
          xs:text-4xl
        ">
            Historias destacadas
        </h1>
        <StoryCard {...story} />
        <SimpleQuote
          quote={
            <>
            “El que tiene salud, tiene esperanza; y el que tiene esperanza, lo tiene todo.”
            </>
          }
          author="- Proverbio árabe"
          colorClass={story.textClass}
        />
      </div>
    </main>
  )
}
