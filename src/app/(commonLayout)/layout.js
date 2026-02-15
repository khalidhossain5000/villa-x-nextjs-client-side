import Footer from "@/components/Shared/Footer/Footer";
import PublicNavbar from "@/components/Shared/Navbar/PublicNavbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <PublicNavbar />
      {children}
      <Footer/>
    </>
  );
};

export default CommonLayout;
