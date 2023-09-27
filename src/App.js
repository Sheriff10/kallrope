import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/admin/dashboard";
import Drivers from "./pages/admin/drivers";
import Emergencies from "./pages/admin/emergencies";
import Panic from "./pages/admin/panics";
import Users from "./pages/admin/users";
import Footer from "./pages/components/footer";
import Header from "./pages/components/header";
import Apply from "./pages/driver/apply/apply";
import DriverLogin from "./pages/driver/apply/driver-login";
import DriverInformation from "./pages/driver/apply/information ";
import Upload from "./pages/driver/apply/upload";
import AssignedRoute from "./pages/driver/dashboard/assigned-route";
import DriverDashboard from "./pages/driver/dashboard/dashboard";
import Information from "./pages/user/auth/registration/information ";
import Subscription from "./pages/user/auth/registration/subscription";
// import Signup from "./pages/user/auth/login";
import Book from "./pages/user/book/book";
import BookingRoute from "./pages/user/book/route";
import Home from "./pages/user/home/home";
import AdminLogin from "./pages/admin/admin-login";
import ViewEmergency from "./pages/admin/view-emergency";
import AdminAssignedRoute from "./pages/admin/assigned-route";
import ViewAllRoutes from "./pages/admin/view-all-routes";
import UserSignup from "./pages/user/auth/signup";
import UserLogin from "./pages/user/auth/user-login";
import BookingContextWrap from "./functions/bookingContext";
import CheckOut from "./pages/user/book/checkout";
import Ticket from "./pages/user/book/ticket";
import VerifyTicket from "./pages/driver/dashboard/verify-ticket";

function App() {
   // window.api = "http://localhost:5000";
   window.api = "https://yellow-coypu-tam.cyclic.app";
   return (
      <div className="App">
         <BookingContextWrap>
            <Routes>
               <Route path="/" element={<Home />} />

               {/* Booking routes */}
               <Route path="/booking" element={<Book />} />
               <Route path="/booking/route" element={<BookingRoute />} />
               <Route path="/booking/route/checkout" element={<CheckOut />} />
               <Route path="/booking/route/checkout/ticket" element={<Ticket />} />

               {/* Registration Routes */}
               <Route path="/auth/information" element={<Information />} />
               <Route path="/auth/subcription" element={<Subscription />} />
               <Route path="/auth/user/login" element={<UserLogin />} />
               <Route path="/auth/user/signup" element={<UserSignup />} />

               {/* Driver Routes */}
               <Route path="/driver/login" element={<DriverLogin />} />
               <Route path="/driver/dashboard" element={<DriverDashboard />} />
               <Route path="/driver/verify-ticket" element={<VerifyTicket />} />
               <Route
                  path="/driver/assigned-route"
                  element={<AssignedRoute />}
               />
               <Route
                  path="/apply/driver/information"
                  element={<DriverInformation />}
               />
               <Route path="/apply/driver" element={<Apply />} />
               <Route path="/apply/driver/upload" element={<Upload />} />

               {/* Admin Routes */}
               <Route path="/admin/dashboard" element={<Dashboard />} />
               <Route path="/admin/user-list" element={<Users />} />
               <Route path="/admin/driver-list" element={<Drivers />} />
               <Route path="/admin/emergencies" element={<Emergencies />} />
               <Route
                  path="/admin/assign-route"
                  element={<AdminAssignedRoute />}
               />
               <Route
                  path="/admin/assign-route/view-all"
                  element={<ViewAllRoutes />}
               />
               <Route
                  path="/admin/view-emergency/:id"
                  element={<ViewEmergency />}
               />
               <Route path="/admin/panic" element={<Panic />} />
               <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
         </BookingContextWrap>
         <Footer />
      </div>
   );
}

export default App;
