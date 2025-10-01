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
            title="PT. Jiwalu Kreasi Studio"
            subtitle="Frontend Developer (2025)"
          >
            Developing Tracking Web App, ERP, and Internal Software
          </MilestoneListItem>
          <MilestoneListItem
            title="Freelance"
            subtitle="Full Stack Developer (2020-2024)"
          >
            Developing applications for online clients. Some projects done
            includes:
            <ul className="list-disc ml-6">
              <li>E-Commerce</li>
              <li>Point of Sales (POS)</li>
              <li>Desktop based Warehouse app</li>
              <li>Custom CMS</li>
              <li>Custom Web App with REST API and Webhook support</li>
            </ul>
          </MilestoneListItem>
          <MilestoneListItem
            title="University of Singaperbangsa Karawang"
            subtitle="Full Stack Developer - Intern (2019)"
          >
            Developing a custom CMS for landing page and participate in
            Developing KKN Website for UNSIKA, as well as handling technical
            matters in the field.
          </MilestoneListItem>
        </MilestoneList>
      </div>
    </Card>
  );
};

export default WorkExperience;
