const ProfileInfo = ({ icon, name, children }) => {
  return (
    <div className="flex gap-3">
      <div className="flex items-center justify-center text-2xl">{icon}</div>
      <div>
        <div className="text-sm">{name}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
