import { Head } from "../components";

export default function About() {
  return (
    <main className="pb-10 bg-gradient-to-b from-teal-900 to-transparent">
      <Head />
      <section className=" flex h-[calc(100vh-6rem)] flex-row justify-center p-7 items-top  mx-auto w-full max-w-screen-2xl overflow-hidden">
        <section className="flex transition duration-700 ease-in-out hover:bg-opacity-40 hover:bg-teal-900 border-2 border-teal-500 border-opacity-30 bg-black bg-opacity-25 p-7 rounded-3xl flex-col items-left justify-start w-[60%] drop-shadow-lg">
          <h1 className="w-[2000px] text-xl mt-10 mb-5">About Note Pad:</h1>
          <p>
            Are you tired of juggling multiple music accounts, struggling to
            remember which platform has your favorite playlists or discovering
            new tracks? Note Pad is here to revolutionize the way you interact
            with your music collection. Developed with user convenience in mind,
            Note Pad serves as your digital notepad, making it effortless to
            curate and access your music from different platforms.
            <p />
            <h1 className="w-[2000px] text-xl mt-10 mb-5">Effortless Organization:</h1>
            <p>
              Say goodbye to the confusion of scattered playlists and tracks.
              With Note Pad, you can effortlessly organize your music, creating
              a harmonious collection that spans across different streaming
              services.
            </p>
            <h1 className="w-[2000px] text-xl mt-10 mb-5">Browsing Gallery:</h1>
            <p>
              Explore and discover new music with our Browsing
              Gallery feature. Find the latest tracks and add them to your
              curated playlists with just a few clicks.
            </p>
          </p>
        </section>
      </section>
    </main>
  );
}
