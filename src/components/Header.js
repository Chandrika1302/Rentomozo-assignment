import React, { useState } from "react";
import ItemServices from "../services/ItemServices";
import InputTab from "./InputTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const [data, setData] = useState(null);

  return (
    <React.Fragment>
      <div>
        <div className="bg-amber-300">
          <div className="shadow-xl rounded-md bg-opacity-50 backdrop-blur-md text-2xl p-2 font-bold">
            Games-Finder
          </div>
        </div>
        <InputTab data={data} setData={setData}></InputTab>
        <ItemServices data={data} setData={setData}></ItemServices>
      </div>
    </React.Fragment>
  );
}

export default Header;
