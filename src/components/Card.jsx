const Card = ({ title, children, className = "", ...rest }) => {
  return (
    <div
      className={`relative bg-[#292929] p-[30px] rounded-md ${className}`}
      {...rest}
    >
      {title && (
        <h2 className="text-light font-light text-4xl mb-5">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Card;
