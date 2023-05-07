import Avatar from "@/Components/Avatar";
import Head from "next/head";
import { Squares2X2Icon, MicrophoneIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Footer from "@/Components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Head>
          <title>Google</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* {HEADER} */}
        <header className="flex w-full p-5 justify-between text-sm text-gray-700">
          {/* left */}
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>
          {/* right */}
          <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>

            {/* icon */}
            <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

            {/* avatar */}
            <Avatar
              url={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
          </div>
        </header>

        {/* {BODY} */}
        <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={100}
            width={300}
            alt=""
          />
          <div
            className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-300 border-[1px] px-5 py-3 items-center
          sm:max-w-xl lg:max-w-2xl "
          >
            <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500 " />
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow focus:outline-none"
            />
            <MicrophoneIcon className="h-5" />
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">
              Google Search
            </button>
            <button onClick={search} className="btn">
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        {/* {FOOTER} */}
        <Footer />
      </div>
    </>
  );
}
