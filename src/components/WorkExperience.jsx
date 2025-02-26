import Card from "./Card";
import MilestoneList from "./MilestoneList";
import MilestoneListItem from "./MilestoneListItem";

const Title = () => (
  <>
    Work <strong className="text-secondary font-semibold">Experience</strong>
  </>
);

const WorkExperience = () => {
  return (
    <Card title={<Title />}>
      <div>
        <p>Here are some of my work experiences:</p>
        <MilestoneList>
          <MilestoneListItem
            title="Freelance"
            subtitle="Web Development (2020-2024)"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur incidunt dolore quasi totam, error fugit eligendi delectus quisquam magnam laudantium unde facilis quo qui tempore commodi excepturi, voluptas dignissimos."
          />
          <MilestoneListItem
            title="University of Singaperbangsa Karawang"
            subtitle="Web Development (2019)"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur incidunt dolore quasi totam, error fugit eligendi delectus quisquam magnam laudantium unde facilis quo qui tempore commodi excepturi, voluptas dignissimos."
          />
        </MilestoneList>
      </div>
    </Card>
  );
};

export default WorkExperience;
