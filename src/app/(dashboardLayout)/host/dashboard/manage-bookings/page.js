import ManageRoomBookings from "@/components/Dashboard/Host/ManageRoomBooking/ManageRoomBookings";
import PageTitle from "@/components/Shared/Title/PageTitle";


const ManageBookings = () => {
 
  return (
    <>
   
    <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
       Manage Bookings
      </PageTitle>

      <ManageRoomBookings/>
    </>
  );
};

export default ManageBookings;
