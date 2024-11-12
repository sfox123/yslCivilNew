import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import menu_data from "../../../layout/headers/menu-data";

const sidebar_contents = {
  title: <>Reinforce concrete frame.</>,
  inst_imgs: [
    "/assets/img/offcanvas/insta-1.jpg",
    "/assets/img/offcanvas/insta-2.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
  ],
};
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        " https://us-central1-bute-backend.cloudfunctions.net/app/ysl",
        JSON.stringify({ email: email }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success(
          `${email.split("@")[0]}, your message was sent successfully`,
          {
            position: "top-left",
          }
        );
      } else {
        toast.error(`Error: ${response.data.message}`, {
          position: "top-left",
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error); // Debug: log error
      toast.error(`Network error: ${error.message}`, {
        position: "top-left",
      });
    } finally {
      setIsLoading(false);
      setEmail("");
      setIsOpen(false);
    }
  };

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo/logo-white.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            {/* <p>{title}</p> */}
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li
                    key={i}
                    className={
                      !menu.has_dropdown
                        ? ""
                        : navTitle === menu?.title
                        ? "has-droupdown active"
                        : "has-droupdown"
                    }
                  >
                    {menu.has_dropdown && (
                      <button onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}{" "}
                      </button>
                    )}
                    <ul
                      className={
                        navTitle === menu?.title
                          ? "sub-menu active"
                          : "sub-menu"
                      }
                    >
                      {menu?.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && (
                      <Link href={menu.link}>{menu.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a
                  href="https://goo.gl/maps/abHegV4AoiJA6Syd8"
                  rel="noreferrer"
                  target="_blank"
                >
                  15 Meadow Croft Hatfield AL10 0SG
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="tel:8180012345678">07929 363732</a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="mailto:Collaxmail@gmail.com">
                  info@yslcivilsltd.co.uk
                </a>
              </li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form onSubmit={handleFormSubmit} className="p-relative" action="#">
              <input
                onChange={handleChange}
                type="email"
                value={email}
                placeholder="Enter mail"
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          {/* <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                {inst_imgs.map((img, i) => (
                  <div key={i} className="col-3 col-sm-3"><a href="#">
                    <img src={img} alt="" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;
