export default function Quote({ quote, author }) {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="max-w-5xl px-6 relative">
        <span className="absolute text-blue font-bold
          xl:text-[12em] xl:-top-26 xl:-left-6 xl:-translate-x-8
          lg:text-[10em] lg:-top-20 lg:-left-6 lg:-translate-x-6
          md:text-[8em] md:-top-16 md:-left-4 md:-translate-x-4
          sm:text-[6em] sm:-top-12 sm:-left-4 sm:-translate-x-2
          xs:text-[6em] xs:-top-10 xs:-left-2 xs:-translate-x-2
        ">
          “
        </span>
        <p className="font-bold text-gray
          lg:text-4xl
          md:text-3xl
          xs:text-2xl
        ">
          {quote}
        </p>
        <span className="absolute text-blue font-bold mirror-y
          xl:text-[12em] xl:bottom-0 xl:-right-16 xl:-top-4
          lg:text-[10em] lg:bottom-0 lg:-right-14 lg:-top-2
          md:text-[8em] md:bottom-0 md:-right-12 md:-top-2
          sm:text-[6em] sm:bottom-0 sm:-right-8 sm:-top-0
          xs:text-[6em] xs:bottom-0 xs:-right-6 xs:-top-0
        ">
          “
        </span>
        <span className="font-bold text-lightGray mt-2 block text-right
          lg:text-3xl
          md:text-2xl
          xs:text-xl
        ">
          {author}
        </span>
      </div>
    </div>
  );
}


