import "./App.css";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";
import MyEducation from "./components/MyEducation";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="outer-wrapper relative max-w-full mx-20 xl:w-[1100px] xl:mx-auto flex flex-col md:flex-row gap-10 pt-32 sm:max-md:pt-8 pb-8">
      <div className="flex flex-col gap-12 md:min-w-[300px]">
        <Profile />
        <MyEducation className="hidden md:block" />
        <ContactMe className="hidden md:block" />
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
