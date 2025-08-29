import React from "react";
import AddComponent from "../../components/todo/AddComponent";

const AddPage = () => {
  const [users, setUsers] = useState({});
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo Add Page</div>
      <AddComponent />
    </div>
  );
};

export default AddPage;
