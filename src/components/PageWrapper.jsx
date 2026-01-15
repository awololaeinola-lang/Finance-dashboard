const PageWrapper = ({ title, subtitle, children }) => {
  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{subtitle}</p>
      {children}
    </div>
  );
};

export default PageWrapper;
