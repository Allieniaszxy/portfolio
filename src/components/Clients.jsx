import Amazon from "../assets/clients/amazon.svg";
import dribbble from "../assets/clients/dribbble.svg";
import google from "../assets/clients/google.svg";
import linkedin from "../assets/clients/linkedin.svg";
import spotify from "../assets/clients/spotify.svg";
import medium from "../assets/clients/medium.svg";
import Contact from "./Contact";

const Clients = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-black py-[7%]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[45px] text-gray-400  mb-[10px] font-bold">
            Happy Clients
          </h1>
          <p className="text-[20px] text-gray-200 w-[80%] text-center mb-[20px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="flex items-center justify-between mb-[5%] max-tablet:flex-wrap">
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={dribbble} alt="" />
          </div>
          <div>
            <img src={linkedin} alt="" />
          </div>
          <div>
            <img src={Amazon} alt="" />
          </div>
          <div>
            <img src={medium} alt="" />
          </div>
          <div>
            <img src={spotify} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[45px] text-gray-400  mb-[10px] font-bold">
            Testimonials
          </h1>
          <p className="text-[20px] text-gray-200 w-[60%] text-center mb-[50px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <h3 className="text-[20px] text-gray-200 w-[60%] text-center mb-[50px]">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut
            sapien.Morbi ornare elit at libero suscipit porta.”
          </h3>
          <a
            href="#"
            className="text-[20px] text-gray-200 w-[60%] text-center mb-[20px] "
          >
            <u className="text-[#a53dff]">Testimonials</u>
          </a>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Clients;
