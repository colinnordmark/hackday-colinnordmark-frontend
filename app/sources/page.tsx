import { Head } from "../components";

export default function About() {
  return (
    <main className="pb-10 bg-gradient-to-b from-teal-900 to-transparent">
      <Head />
      <section className=" flex h-[calc(100vh-6rem)] flex-row justify-center p-4 items-top  mx-auto w-full max-w-screen-2xl overflow-hidden">
        <section className="flex transition duration-700 ease-in-out hover:bg-opacity-40 hover:bg-teal-900 border-2 border-teal-500 border-opacity-30 bg-black bg-opacity-25 p-4 rounded-3xl flex-col items-left justify-start w-[60%] drop-shadow-lg">
          <h1 className=" text-lg m-1 mb-4 text-left">Our Sources:</h1>
          
            
          <h1>https://soundcloud.com</h1>
          <h1>https://music.youtube.com</h1>
          <h1>https://open.spotify.com</h1>

            
        </section>
      </section>
    </main>
  );
}
