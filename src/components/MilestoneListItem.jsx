const MilestoneListItem = ({ title, subtitle, children, ...rest }) => {
  return (
    <li {...rest}>
      <div className="text-white">{title}</div>
      <div className="text-sm">{subtitle}</div>
      {children && <div className="mt-2">{children}</div>}
    </li>
  );
};

export default MilestoneListItem;
