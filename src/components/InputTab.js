import React, { useState } from "react";
// import ItemServices from "../services/ItemServices";
function InputTab({ setData, data }) {
  //    const [games,setGames]=useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    const inputValue = target.value;
    setInputValue(inputValue);
  };
  const searchItems = function () {
    const relevantData = data.filter((game) => {
      return game.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    const copyOfData = [];
    for (const game of data) {
      const gameCopy = Object.assign({}, game);
      gameCopy.visible = false;
      copyOfData.push(gameCopy);
    }

    for (const game of relevantData) {
      const relevantGame = copyOfData.find((g) => g.id == game.id);
      if (relevantGame) {
        relevantGame.visible = true;
      }
    }

    setData(copyOfData);
  };

  return (
    <div className="flex space-x-6 items-center justify-center">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter the name of the dish"
        value={inputValue}
        className="border-2 rounded  p-2 w-64"
      />
      <button
        onClick={searchItems}
        className="px-3 py-2 bg-gray-700 rounded text-gray-200"
      >
        Get Games
      </button>
    </div>
  );
}

export default InputTab;
