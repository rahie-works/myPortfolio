"use client";
import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";
const raleway = Raleway({ subsets: ["latin"] });
import emailjs from "@emailjs/browser";

// icons
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { CgSpinner } from "react-icons/cg";

// utils
import { handleSocialClick } from "@/app/utils/useSocialNavigation";

// constants
import {LINKS } from "@/app/constants/enums";
import { AlertTypes } from "@/app/constants/alert";
import Alert from "../Alert/Alert";
import { fetchExternalLinks } from "@/app/utils/dbHandler/fetchExternalLinks";
import { ExternalLinks } from "@/app/types/homePageContentTypes";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertVisible, setAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: AlertTypes.SUCCESS,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const SERVICE_KEY = process.env.EMAILJS_SERVICE_KEY || "";
  const TEMPLATE_KEY = process.env.EMAILJS_TEMPLATE_KEY || "";
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || "";

  const handleFormFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsDisabled(!formData.email || !formData.message || !formData.message);
  };

  const submitForm = (event: React.FormEvent) => {
    setIsLoading(true);
    event.preventDefault();

    const templateParams = {
      from_name: formData.name,
      to_name: "Raheesh Muhamed",
      message: formData.message,
      from_email: formData.email,
      reply_to: formData.email,
    };

    emailjs
      .send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        templateParams,
        PUBLIC_KEY
      )
      .then(
        () => {
          setAlert({
            message: `Email Successfully Sent..! Thanks for reaching out. Will get back to you soon.`,
            type: AlertTypes.SUCCESS,
          });
          setAlertVisible(true);
        },
        (error) => {
          setAlert({
            message: `Oops..! Something unexpected happened. Please try again.
                Error: ${error}`,
            type: AlertTypes.ERROR,
          });
        }
      );
  };

  const completeEmailSent = () => {
    setAlertVisible(false);
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <form
        onSubmit={(event) => submitForm(event)}
        className="w-full h-full px-10 shadow-md rounded-lg text-white animate-fade-up animate-ease-in"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormFieldChange}
            className="mt-1 block w-full text-white p-3 md:p-5 rounded-md bg-gray-500 focus:bg-white focus:text-black"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormFieldChange}
            className="mt-1 block w-full p-3 text-white md:p-5 bg-gray-500 rounded-md focus:bg-white focus:text-black"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            value={formData.message}
            onChange={handleFormFieldChange}
            className="mt-1 block h-3/4 text-white md:h-full w-full p-3 md:p-5 rounded-md bg-gray-500 focus:bg-white focus:text-black resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full flex justify-center items-center ${
            isDisabled ? "bg-gray-500" : "bg-blue-500"
          } text-white font-medium py-2 px-4 rounded-md transition duration-300`}
        >
          {"Send Message"}{" "}
          {isLoading ? (
            <CgSpinner className="ml-2 animate-spin text-xl" />
          ) : (
            <SiMinutemailer className="text-2xl ml-5" />
          )}
        </button>
      </form>
      <div
        className={`flex absolute top-10 right-0 z-50 w-full md:w-grow md:max-w-md animate-fade-up animate-ease-in z-99 ${
          alertVisible ? "" : "hidden"
        }`}
      >
        {alertVisible && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => completeEmailSent()}
          />
        )}
      </div>
    </>
  );
};

const SocialConnections = ({externalLinks}:{externalLinks: ExternalLinks}) => {
  const socialIconStyle =
    "cursor-pointer hover:scale-105 transition-all duration-300";

  return (
    <div className="w-full h-full flex justify-evenly items-center mt-5 text-4xl animate-fade-up animate-ease-in">
      <FaLinkedin
        onClick={() => handleSocialClick(externalLinks.linkedIn)}
        className={`text-blue-700 ${socialIconStyle}`}
      />
      <FaGithub
        onClick={() => handleSocialClick(externalLinks.github)}
        className={`text-white ${socialIconStyle}`}
      />
      <FaInstagram
        onClick={() => handleSocialClick(externalLinks.instagram)}
        className={`text-pink-700 ${socialIconStyle}`}
      />
      <FaStackOverflow
        onClick={() => handleSocialClick(externalLinks.stackoverflow)}
        className={`text-red-500 ${socialIconStyle}`}
      />
    </div>
  );
};

const ConnectContainer = ({externalLinks} : {externalLinks : ExternalLinks}) => {
  const lineStyle = "w-1/2 h-1 bg-white rounded-lg";
  return (
    <div className="w-full md:w-1/2 h-full mb-5 flex flex-col justify-center items-center pb-10">
      <SocialConnections externalLinks={externalLinks}/>
      <div className="w-3/4 md:w-2/3 h-full flex justify-evenly items-center mt-10 animate-fade-up animate-ease-in">
        <div className={lineStyle}></div>
        <p className="text-white font-bold px-3">OR</p>
        <div className={lineStyle}></div>
      </div>
      <ContactForm />
    </div>
  );
};

export default function ConnectPage() {

  const [data, setData] = useState<{externalLinks: ExternalLinks | null}>({
    externalLinks: null,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchExternalLinks({setData, setIsLoading})
  }, []);

  if (isLoading || !data.externalLinks) {
    return <CgSpinner className="ml-2 animate-spin text-6xl text-white" />;
  }

  return (
    <section
      className={`h-screen w-full items-center flex flex-col bg-black ${raleway.className}`}
    >
      <AboutHeadingContainer />
      <ConnectContainer externalLinks={data.externalLinks} />
    </section>
  );
}
