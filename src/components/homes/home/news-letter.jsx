import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const news_letter_contents = {
  bg_img: "/assets/img/news/news-shape.png",
  subtitle: "Get in-touch",
  title: "Let us know your email address",
  btn_text: "Get in-touch",
  news_l_img: "/assets/img/news/news-1.png",
  shape_img: "/assets/img/news/news-shape-2.png",
};

const { bg_img, btn_text, news_l_img, shape_img, subtitle, title } =
  news_letter_contents;

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        " https://us-central1-bute-backend.cloudfunctions.net/app/yslEmail",
        JSON.stringify({ email: email }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success(
          `${
            email.split("@")[0]
          }, Welcome to the YSL family!, We'll be in touch soon.`,
          {
            position: "top-left",
          }
        );
        setEmail("");
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
    }
  };

  return (
    <div
      className="tp-news-letter-area pb-140 wow tpfadeUp"
      data-wow-duration=".7s"
      data-wow-delay=".4s"
      style={{ background: "white" }}
    >
      <div className="container">
        <div
          className="tp-news-letter-box p-relative"
          style={{
            backgroundImage: `url(${bg_img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "contain",
          }}
        >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-12  ">
              <div className="tp-news-wrapper pl-90 z-index-1">
                <div className="tp-news-letter-section-box">
                  <h5 className="tp-subtitle subtitle-secondary-color">
                    {subtitle}
                  </h5>
                  <h2 className="tp-title tp-white-text">{title}</h2>
                </div>
                <div className="tp-news-button p-relative">
                  <form onSubmit={handleSubmit}>
                    <input
                      value={email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your mail"
                      required
                    />
                    <button
                      className="tp-submit-button tp-btn-yellow-semilar"
                      type="submit"
                    >
                      {btn_text} <i className="far fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end col-md-4  ">
              <div className="tp-news-letter-img">
                <img src={news_l_img} alt="" />
              </div>
            </div>
          </div>
          <div className="tp-news-shape-img">
            <img src={shape_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
