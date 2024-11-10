import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoMicOutline } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaCameraRetro } from "react-icons/fa";

function Services() {
  return (
    <main className="main">
      <div className="ser-container">
        {/* top div */}
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
          <p className="des-ser">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            mollitia?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis,Lorem, ipsum. Lorem.
          </p>
        </div>
        {/* bottom div */}
        <div className="boxes-con">
          <div className="box">
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>
          <div className="box">
            <LiaLaptopCodeSolid className="ser-icon" />
            <h3>UI/UX Design</h3>
            <span>Mobile App,Website Design</span>
          </div>
          <div className="box">
            <IoMicOutline className="ser-icon" />
            <h3>Sound Design</h3>
            <span>Voice Over, Beat making</span>
          </div>
          <div className="box">
            <SiNextdotjs className="ser-icon" />
            <h3>Next.Js</h3>
            <span>Lorem ipsum dolor sit.</span>
          </div>
          <div className="box">
            <FaCameraRetro className="ser-icon" />
            <h3>Photography</h3>
            <span>Porttrait, Product Photography</span>
          </div>
          <div className="box">
            <h3 className="ser-h3">Advertising</h3>
            <span className="span-ser">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              maiores porro Lorem ipsum dolor sit amet.
            </span>
            <p className="p-ser">Order Now</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
