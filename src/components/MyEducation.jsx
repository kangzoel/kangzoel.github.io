import Card from "./Card";
import MilestoneList from "./MilestoneList";
import MilestoneListItem from "./MilestoneListItem";

const Title = () => (
  <>
    My <strong className="text-secondary font-semibold">Education</strong>
  </>
);

const MyEducation = ({ ...props }) => {
  return (
    <Card title={<Title />} {...props}>
      <div>
        <p>Here are some of my educational qualifications:</p>
        <MilestoneList>
          <MilestoneListItem
            title="Singaperbangsa Karawang"
            subtitle="Bachelor's degree (2024)"
          />
          <MilestoneListItem
            title="SMAN 1 Rengasdengklok"
            subtitle="High School (2017)"
          />
        </MilestoneList>
      </div>
    </Card>
  );
};

export default MyEducation;
