import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const AboutHeadingContainer = () => {
  return (
    <div
      className={`w-full h-full mt-32 md:mt-0 md:mb-10 text-4xl md:text-8xl text-white flex font-bold ${raleway.className} animate-fade-up animate-ease-in justify-center items-center md:items-end`}
    >
      <span className={`${raleway.className} animate-fade-up animate-ease-in`}>
        {"< Let's"}
      </span>
      <span className="text-blue-500 animate-fade-up animate-ease-in">
        {"Talk />"}
      </span>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="w-full h-full px-10 shadow-md rounded-lg text-white animate-fade-up animate-ease-in">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full p-3 md:p-5 rounded-md bg-gray-500"
          placeholder="Your Name"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full p-3 md:p-5 bg-gray-500 rounded-md"
          placeholder="Your Email"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          className="mt-1 block h-3/4 md:h-full w-full p-3 md:p-5 rounded-md bg-gray-500 focus:border-blue-500 resize-none"
          placeholder="Your Message"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center md:bg-gray-500 bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        {"Send Message"} <SiMinutemailer className="text-2xl ml-5" />
      </button>
    </form>
  );
};

const SocialConnections = () => {
  const socialIconStyle =
    "cursor-pointer hover:scale-105 transition-all duration-300";

  return (
    <div className="w-full h-full flex justify-evenly items-center mt-5 text-4xl animate-fade-up animate-ease-in">
      <FaLinkedin className={`text-blue-700 ${socialIconStyle}`} />
      <FaGithub className={`text-white ${socialIconStyle}`} />
      <FaInstagram className={`text-pink-700 ${socialIconStyle}`} />
      <FaStackOverflow className={`text-red-500 ${socialIconStyle}`} />
    </div>
  );
};

const ConnectContainer = () => {
  return (
    <div className="w-full md:w-1/2 h-full mb-5 flex flex-col justify-center items-center">
      <SocialConnections />
      <div className="w-3/4 md:w-2/3 h-full flex justify-evenly items-center mt-10 animate-fade-up animate-ease-in">
        <div className="w-1/2 h-1 bg-white rounded-lg"></div>
        <p className="text-white font-bold px-3">OR</p>
        <div className="w-1/2 h-1 bg-white rounded-lg"></div>
      </div>
      <ContactForm />
    </div>
  );
};

export default function ConnectPage() {
  return (
    <section
      className={`h-full w-full items-center flex flex-col bg-black ${raleway.className}`}
    >
      <AboutHeadingContainer />
      <ConnectContainer />
    </section>
  );
}
