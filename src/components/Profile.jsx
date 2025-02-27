import Card from "./Card";
import ProfileInfo from "./ProfileInfo";
import Typewriter from "./Typewriter";
import ProfilePicture from "../assets/profile.png";

import { IoLocationSharp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Profile = () => {
  return (
    <Card className="sm:max-md:flex sm:max-md:gap-6">
      <div className="flex items-center">
        <img
          src={ProfilePicture}
          alt="Profile Picture"
          className="rounded-full object-cover absolute sm:max-md:static size-52 left-1/2 transform sm:max-md:transform-none -translate-x-1/2 top-0 -translate-y-1/2 object-top"
        />
      </div>
      <div className="mt-24 sm:max-md:mt-0 flex flex-col gap-2">
        <div className="text-center sm:max-md:text-left">
          <div className="text-light font-medium text-xl">
            Samsul Arif Zulvian
          </div>
          <div className="text-secondary h-10">
            <Typewriter texts={["Software Engineer", "Web Developer"]} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <ProfileInfo icon={<IoLocationSharp />} name="Location">
            Indonesia
          </ProfileInfo>
          <ProfileInfo icon={<IoLogoGithub />} name="Github">
            <a href="https://www.github.com/kangzoel" target="_blank">
              Kangzoel
            </a>
          </ProfileInfo>
          <ProfileInfo
            icon={<IoLogoLinkedin />}
            name="LinkedIn"
            value="Samsul Arif Zulvian"
          >
            <a
              href="https://www.linkedin.com/in/samsul-arif-zulvian-b27129239"
              target="_blank"
            >
              Samsul A. Z.
            </a>
          </ProfileInfo>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
