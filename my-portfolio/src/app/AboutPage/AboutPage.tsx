import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import React from "react";

const SendEmailButton = (props: any) => {
  return (
    <div
      className="flex flex-col justify-center items-center animate-fade-up animate-ease-in"
      onClick={() => props.optIn(true)}
    >
      <form className="flex flex-col justify-center items-center">
        <button className="flex m-5 text-white rounded border-2 border-white p-2 cursor-pointer">
          <h3 className="mr-5">Send</h3>
          <Image
            src="/connect/gmail-logo.png"
            alt={"gmail"}
            width={20}
            height={20}
            style={{ marginLeft: 5 }}
          />
        </button>
      </form>
    </div>
  );
};

const EmailForm = (props: any) => {
  const [emailSent, setEmailSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const ShowEmailSent = () => {
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Raheesh Muhamed",
      message: ``,
    };

    setEmailSent(true);
    setTimeout(() => {
      props.optOut(false);
      setEmailSent(false);
    }, 3000);
  };
  return (
    <div className="flex flex-col justify-center items-center animate-fade-up animate-ease-in">
      {!emailSent && (
        <form className="flex flex-col justify-center items-center">
          <input
            type="text"
            name="name"
            className="m-2 p-1"
            placeholder=" Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="name"
            className="m-2 p-1"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="name"
            rows={6}
            cols={19}
            wrap="soft"
            className="m-2"
            style={{ textAlign: "center", padding: 5 }}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
          />
          <button
            type="submit"
            className="flex m-5 text-white rounded border-2 border-white p-2"
            onClick={ShowEmailSent}
          >
            <h3 className="mr-5">Send</h3>
            <Image
              src="/connect/gmail-logo.png"
              alt={"gmail"}
              width={20}
              height={20}
              style={{ marginLeft: 5 }}
            />
          </button>
        </form>
      )}
      {emailSent && (
        <button
          type="submit"
          className="flex m-5 text-white rounded border-2 border-white p-2 animate-fade-up animate-ease-in"
        >
          <h3 className="mr-5">Email Sent Succesfully.!</h3>
          <Image
            src="/connect/gmail-logo.png"
            alt={"gmail"}
            width={20}
            height={20}
            style={{ marginLeft: 5 }}
          />
        </button>
      )}
    </div>
  );
};

export default function AboutContent() {
  const [sendEmailOpted, setSendEmailOpted] = React.useState(false);

  const optedToSendEmail = (option: boolean) => {
    setSendEmailOpted(option);
  };
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-center w-full h-3/4 px-4 sm:px-0 overflow-auto">
      <div className="flex lg:flex-row md:items-center justify-center items-centers">
        <Image
          src="/portrait.png"
          alt={"profile"}
          width={130}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="flex lg:flex-col md:items-center justify-center items-center p-20">
        <h2 className="w-1/2 h-1/2 text-md sm:text-xl text-white animate-fade-up animate-ease-in font-name">
          Hello friend,
        </h2>
        <h2 className="w-1/2 h-1/2 text-md sm:text-xl text-white animate-fade-up animate-ease-in font-name">
          I have a profound passion for both technology and artistry, and I've
          been dedicated to honing my craft in this field for the past four
          years. Though I may have only dipped my toes into the vast ocean of
          the tech industry, I'm here with an unwavering commitment to push my
          boundaries and continually surpass my own expectations. As a diligent
          developer, I make it a point to continuously refine my skills and
          expand my knowledge base.
        </h2>
        <h2 className="w-1/2 h-1/2 text-md sm:text-xl text-white animate-fade-up animate-ease-in font-name">
          After all, what's an ocean without its multitude of drops?
        </h2>
      </div>

      <h2 className="text-md sm:text-xl text-white animate-fade-up animate-ease-in font-name">
        Reach out to me
      </h2>

      <div className="flex lg:flex-row md:items-center justify-center items-center animate-fade-up animate-ease-in">
        <Image
          src="/connect/github.png"
          alt={"github"}
          width={50}
          height={50}
          style={{ margin: 15 }}
          onClick={() =>
            window.open("https://github.com/rahie-works", "_blank")
          }
        />
        <Image
          src="/connect/linkedin-logo.png"
          alt={"linkedin"}
          width={50}
          height={50}
          style={{ margin: 15 }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/raheesh-k-muhamed-8b3580129/",
              "_blank"
            )
          }
        />
      </div>
      <h2 className="text-md sm:text-xl text-white animate-fade-up animate-ease-in font-name">
        or
      </h2>
      {!sendEmailOpted && <SendEmailButton optIn={optedToSendEmail} />}
      {sendEmailOpted && <EmailForm optOut={optedToSendEmail} />}
    </div>
  );
}
