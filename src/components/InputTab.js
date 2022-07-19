import React, { useState } from "react";
function InputTab({ setData, data }) {
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
      const relevantGame = copyOfData.find((g) => g.id === game.id);
      if (relevantGame) {
        relevantGame.visible = true;
      }
    }

    setData(copyOfData);
  };

  return (
    <div className="flex space-x-6 items-center justify-center my-10">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter the name of the game"
        value={inputValue}
        className="border rounded p-2 w-64"
      />
      <button
        onClick={searchItems}
        className="px-3 py-2 bg-amber-600 hover:bg-amber-700 rounded text-gray-200"
      >
        Get Games
      </button>
    </div>
  );
}

export default InputTab;
