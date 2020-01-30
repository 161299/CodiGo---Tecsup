import React from "react";
import NavAdmin from "../components/admin/NavAdmin";



const AdminLayout = ({children}) => {
  return (
    <div>
      <NavAdmin />
      {children}
    </div>
  );
};

export default AdminLayout;
