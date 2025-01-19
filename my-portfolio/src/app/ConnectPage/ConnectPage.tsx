import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
import { HomePageProfileInfoContainer } from "../HomePage/HomePageProfileInfoContainer";

const AboutHeadingContainer = () => {
  return (
    <div
      className={`relative w-full h-2/3 text-8xl text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in justify-center items-center`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        {"<Let's"}
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
        {"Talk/>"}
      </span>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="glass-effect w-full h-full max-w-2xl mx-auto p-6 shadow-md rounded-lg">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full p-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Name"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full p-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Email"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          className="mt-1 block w-full p-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Your Message"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gray-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

const ConnectContainer = () => {
  return (
    <div className="w-3/4 h-full mb-20 flex justify-center items-center">
      <HomePageProfileInfoContainer />
      <ContactForm />
    </div>
  );
};

export default function ConnectPage() {
  return (
    <section
      className={`relative h-full w-full items-center flex flex-col bg-black ${raleway.className} overflow-y-scroll`}
    >
      <AboutHeadingContainer />
      <ConnectContainer />
    </section>
  );
}
