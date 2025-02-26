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
          >
            Developing a custom CMS for landing page and participate in
            Developing KKN Website for UNSIKA, as well as handling technical
            matters in the field.
          </MilestoneListItem>
          <MilestoneListItem
            title="University of Singaperbangsa Karawang"
            subtitle="Web Development (2019)"
          >
            Developing applications for online clients. Some projects done
            inclues:
            <ul className="list-disc ml-6">
              <li>E-Commerce</li>
              <li>Point of Sales (POS)</li>
              <li>Desktop based Warehouse app</li>
              <li>Custom CMS</li>
              <li>Custom Web App with REST API and Webhook support</li>
            </ul>
          </MilestoneListItem>
        </MilestoneList>
      </div>
    </Card>
  );
};

export default WorkExperience;
