import "./MilestoneList.css";

const MilestoneList = ({ children, ...rest }) => {
  return (
    <ol className="milestone" {...rest}>
      {children}
    </ol>
  );
};

export default MilestoneList;
