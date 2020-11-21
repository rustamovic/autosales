import React from "react";
import AdminPanelHeader from "../../Containers/AdminPanelHeader/AdminPanelHeader";

const AdminList = () => {
  return (
    <AdminPanelHeader>
      <p>Admin List</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dicta
        facilis, voluptatibus excepturi odit dignissimos veniam possimus iste
        voluptate in, explicabo corporis ut quae aliquam ipsum necessitatibus
        laborum aut at.
      </p>
    </AdminPanelHeader>
  );
};

export default React.memo(AdminList);
