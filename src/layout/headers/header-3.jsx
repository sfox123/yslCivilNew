import Link from "next/link";
import React from "react";
import useSticky from "../../hooks/use-sticky";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";

const HeaderThree = ({ fixed }) => {
  const { headerSticky } = useSticky();
  return (
    <>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent hasdropdown-white pl-170 
        pr-170`}
          style={{ background: "white", padding: "1rem" }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/logo-white.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 tp-menu-black">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-white.png"} bg={"tp-green-bg"} />
      {/* <!-- mobile-menu-area-end --> */}
    </>
  );
};

export default HeaderThree;
