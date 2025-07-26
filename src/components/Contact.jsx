import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import { CiLocationOn, CiAt } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-black py-10 px-4" id="contact">
      <div className="bg-white rounded-2xl max-w-[1400px] mx-auto border flex flex-col lg:flex-row justify-between gap-10 lg:gap-[5rem] p-6 lg:p-[80px]">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-bold mb-5">
            Let’s Discuss Your Project
          </h1>
          <p className="text-base lg:text-lg text-gray-500 mb-6">
            Interested in working together or have a question? Let's connect and
            make something great!
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex p-5 border rounded-md gap-4 items-center">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded">
                <CiLocationOn size={28} color="#a53dff" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <h1 className="font-medium">Lagos, Nigeria</h1>
              </div>
            </div>

            <div className="flex p-5 border rounded-md gap-4 items-center">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded">
                <CiAt size={28} color="#a53dff" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <h1 className="font-medium">alakaalamin@gmail.com</h1>
              </div>
            </div>

            <div className="flex p-5 border rounded-md gap-4 items-center">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded">
                <BsTelephone size={28} color="#a53dff" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Call</p>
                <h1 className="font-medium">+234-810-0059-684</h1>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/share/18LSoXzaRW/"
              target="_blank"
            >
              <FaFacebook color="#a53dff" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/al-amin-alaka/"
              target="_blank"
            >
              <FaLinkedin color="#a53dff" size={24} />
            </a>
            <a
              href="https://www.instagram.com/prometheus8092?igsh=MXdma292NW83c2NxdA=="
              target="_blank"
            >
              <FaInstagram color="#a53dff" size={24} />
            </a>
            <a href="https://x.com/prometheus_40" target="_blank">
              <FaXTwitter color="#a53dff" size={24} />
            </a>
            <a href="https://github.com/Allieniaszxy/" target="_blank">
              <FaGithub color="#a53dff" size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-base lg:text-lg font-semibold text-gray-600 mb-6">
            Fill out the form and I'll get back to you as soon as possible.
          </h1>

          <form>
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Name*"
                className="border-b border-gray-400 h-12 px-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border-b border-gray-400 h-12 px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Location"
                className="border-b border-gray-400 h-12 px-2 outline-none"
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Budget*"
                  className="border-b border-gray-400 h-12 px-2 outline-none w-full sm:w-1/3"
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  className="border-b border-gray-400 h-12 px-2 outline-none w-full sm:w-2/3"
                />
              </div>

              <textarea
                placeholder="Your Message*"
                className="border-b border-gray-400 h-28 px-2 py-2 outline-none resize-none"
              ></textarea>

              <button className="flex items-center gap-2 px-6 py-3 bg-[#a53dff] text-white rounded-lg font-semibold w-max">
                Submit
                <FiSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
