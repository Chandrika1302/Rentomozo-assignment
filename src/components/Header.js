import React, { useState } from "react";
import ItemServices from "../services/ItemServices";
import InputTab from "./InputTab";
function Header() {
  const [data, setData] = useState(null);

  return (
    <React.Fragment>
      <div className="flex items-center justify-center flex-col space-y-6 bg-orange-200 p-2">
        <div className="text-4xl text-gray-700 ">Games-Finder</div>
      </div>
      <InputTab
        data={data}
        setData={setData}
      ></InputTab>
      <ItemServices
        data={data}
        setData={setData}
      ></ItemServices>
    </React.Fragment>
  );
}

export default Header;
