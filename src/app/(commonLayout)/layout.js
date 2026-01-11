import PublicNavbar from "@/components/Shared/Navbar/PublicNavbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
};

export default CommonLayout;
