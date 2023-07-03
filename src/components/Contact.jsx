"use client";
import { MdMail, MdPhone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_2zyzrqx",
        "template_pc7uavk",
        form.current,
        "_Ta7b7E4ze00hFEuj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="#contact" className="text-white pt-12 pb-24 bg-slate-900 ">
      <h3 className="text-4xl font-bold text-center pb-16 pt-8">
        Get In <span className="text-purple-900">Touch</span>
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,2fr] lg:gap-x-10 px-6 sm:px-20 md:px-12">
        <div>
          <h3 className="text-2xl font-bold">DON'T BE SHY !</h3>
          <p className="py-3">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex items-center space-x-3 pb-5">
            <p className="text-5xl text-slate-700">
              <MdMail />
            </p>
            <p className="text-sm">
              <h3 className="text-gray-400">MAIL</h3>
              <h5>furqanupom978@gmail.com</h5>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-5xl text-slate-700">
              <MdPhone />
            </p>
            <p className="text-sm">
              <h3 className="text-gray-400">CALL</h3>
              <h5>(+880) 1910882855</h5>
            </p>
          </div>

          <div className="text-2xl flex items-center space-x-4 pt-7">
            <a target="_blank" href="https://www.facebook.com/fab.rupom">
              <button className="p-1 bg-slate-800 hover:bg-purple-900 duration-300 rounded-full">
                {" "}
                <FaFacebookF />
              </button>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/furqan-ahmad-6149ba281/">
              <button className="p-1 bg-slate-800 hover:bg-purple-900 duration-300 rounded-full">
                <FaLinkedinIn />
              </button>
            </a>
            <a target="_blank" href="https://github.com/furqanRupom">
              <button className="p-1 bg-slate-800 hover:bg-purple-900 duration-300 rounded-full">
                <FaGithub />
              </button>
            </a>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row w-full space-y-8 md:space-y-0 md:space-x-5  pt-12">
              <input
                className=" bg-gray-800 px-3 py-2 w-full md:w-1/2 focus:ring ring-purple-900 outline-none rounded-full"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />

              <input
                className=" bg-gray-800 px-3 py-2 w-full md:w-1/2 focus:ring ring-purple-900 outline-none rounded-full"
                type="email"
                name="user_email"
                placeholder="Your Email"
              />
            </div>

            <textarea
              className="w-full rounded-3xl bg-gray-800 p-3 focus:ring ring-purple-900 outline-none mt-8"
              rows={7}
              cols={45}
              name="message"
              placeholder="Your Message"
            />

            <div className="flex items-center mt-8 space-x-3 text-xl p-3 rounded-full ring ring-purple-950 w-fit cursor-pointer">
              <input
                className="cursor-pointer hover:text-purple-900 duration-200"
                type="submit"
                value="SEND MESSAGE"
              />
              <span className="text-purple-900">
                {" "}
                <FaArrowCircleRight />
              </span>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
