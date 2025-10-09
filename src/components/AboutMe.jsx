import Card from "./Card";
import SkillBox from "./SkillBox";

const Title = () => (
  <>
    About <strong className="text-secondary font-semibold">Me</strong>
  </>
);

const AboutMe = () => {
  return (
    <Card title={<Title />}>
      <div className="flex flex-col gap-8">
        <div>
          Hello! I'm <span className="text-light">Samsul Arif Zulvian</span>, a
          passionate <span className="text-light">Web Developer</span> dedicated
          to creating engaging and intuitive web experiences. I thrive on
          turning ideas into functional, interactive websites that delight users
          and drive results. With a focus on innovation and attention to detail,
          I'm always excited to take on new challenges and collaborate to bring
          your vision to life. Let's build something great together!
        </div>
        <div>
          <SkillBox name="HTML" />
          <SkillBox name="CSS" />
          <SkillBox name="JavaScript" />
          <SkillBox name="PHP" />
          <SkillBox name="SQL" />
          <SkillBox name="Spring Boot" />
          <SkillBox name="Laravel" />
          <SkillBox name="Angular" />
          <SkillBox name="Vue" />
        </div>
        <div className="flex gap-8">
          <div>
            <div className="text-5xl font-bold text-secondary mb-2">40+</div>
            Handled Projects
          </div>
          <div>
            <div className="text-5xl font-bold text-secondary mb-2">16</div>
            Open Source Projects
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
