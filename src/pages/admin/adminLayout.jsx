import React from "react";
import AdminHeader from "../components/admin-header";

export default function AdminLayout({ children }) {
   return (
      <>
         <AdminHeader />
         {children}
      </>
   );
}
