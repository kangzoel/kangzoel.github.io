const MilestoneListItem = ({ title, subtitle, description, ...rest }) => {
  return (
    <li {...rest}>
      <div className="text-white">{title}</div>
      <div className="text-sm">{subtitle}</div>
      {description && <div className="mt-2">{description}</div>}
    </li>
  );
};

export default MilestoneListItem;
