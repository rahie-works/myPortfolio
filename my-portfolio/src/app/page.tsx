import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-row w-full h-1/10 justify-around">
        <h1 className="text-4xl lg:text-5xl font-bold text-white-800 mt-10 animate-fade-up font-custom">
          Welcome to My Portfolio
        </h1>
        <img src="rk.png" alt="logo" className="w-24 h-auto animate-fade" />
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen items-center justify-between">
        <div className="lg:w-2/3 relative">
          <img
            src="portrait.jpg"
            alt="Image"
            className="hidden lg:block w-2/3 h-1/3 animate-fade filter grayscale ml-20"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-4 flex justify-center items-left animate-fade-right">
          <div className="hidden lg:block ">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-4xl font-bold text-white-800 font-titles">
                Raheesh Kattumunda Muhamed
              </h1>
              <p className="mt-4 text-lg text-gray-600 font-subtitles">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden relative  w-full h-full text-center animate-fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 h-30vh">
            Raheesh Kattumunda Muhamed
          </h1>
          <p className="mt-4 text-lg text-gray-600">Software Engineer</p>
          <img
            src="portrait.jpg"
            alt="Image"
            className="w-full h-full object-cover h-70vh"
          />
        </div>
      </div>
      <div
        id="down-arrow"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Image
          className="w-8 h-8 text-gray-600 fill-current"
          src="/down-arrow.png"
          alt="down-arrow"
          width={20}
          height={10}
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-5">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Career Path{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            A quick tour through my career journey
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            A quick peek into my projects
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Technologies{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            My skillset and technologies I can handle
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Extra Curricular{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            My artistic side
          </p>
        </a>
      </div>
    </main>
  );
}
