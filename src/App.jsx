import "./App.css";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";
import MyEducation from "./components/MyEducation";
import Profile from "./components/Profile";
import { useRef, useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [snapBottom, setSnapBottom] = useState(false);
  const [invisible, setInvisible] = useState(true);
  const [snapTop, setSnapTop] = useState(false);
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const $sidebar = sidebarRef.current;

    const dynamicSidebar = () => {
      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + windowHeight;

      const sidebarTop = $sidebar.offsetTop + 128;
      const sidebarHeight = $sidebar.offsetHeight;
      const sidebarBottom = sidebarTop + sidebarHeight;

      if (scrollBottom > sidebarBottom) {
        setSnapBottom(true);
      } else if (prevScrollTop > scrollTop && snapBottom) {
        setSnapBottom(false);
      } else if (prevScrollTop > scrollTop && scrollTop < sidebarTop - 128) {
        setSnapTop(true);
      } else if (prevScrollTop < scrollTop) {
        setSnapTop(false);
      }

      if (snapBottom) {
        $sidebar.style.top =
          Math.min(scrollBottom - sidebarHeight - 128) + "px";
      } else if (snapTop) {
        $sidebar.style.top = scrollTop + "px";
      }

      if (sidebarTop - 128 != 0) {
        window.localStorage.setItem("top", sidebarTop - 128);
      }

      setPrevScrollTop(scrollTop);
    };

    const reloadSidebar = () => {
      $sidebar.style.top = window.localStorage.getItem("top") + "px";
      window.localStorage.setItem("top", $sidebar.offsetTop);
    };

    window.addEventListener("load", reloadSidebar);
    window.addEventListener("scroll", dynamicSidebar);
    setInvisible(false);

    return () => {
      window.removeEventListener("load", reloadSidebar);
      window.removeEventListener("scroll", dynamicSidebar);
    };
  });

  return (
    <div
      className={`outer-wrapper max-w-full mx-20 xl:w-[1100px] xl:mx-auto flex flex-col md:flex-row gap-10 pt-32 sm:max-md:pt-8 pb-8 ${
        invisible ? "hidden" : ""
      }`}
    >
      <div className="relative md:min-w-[300px]">
        <div
          className="absolute flex flex-col gap-12 pb-8 w-[300px]"
          ref={sidebarRef}
        >
          <Profile />
          <MyEducation className="hidden md:block" />
          <ContactMe className="hidden md:block" />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <AboutMe />
        <MyEducation className="md:hidden" />
        <WorkExperience />
        <FeaturedProjects />
        <ContactMe className="md:hidden" />
      </div>
    </div>
  );
};

export default App;
