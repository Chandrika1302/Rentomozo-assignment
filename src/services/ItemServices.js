import axios from "axios";
import { useEffect } from "react";

function Exp({ setData, data }) {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`
        );

        setData(
          response.data
            .filter((g) => g.title)
            .map((g, i) => {
              g.visible = true;
              g.id = i;
              return g;
            })
        );
      } catch (err) {
        setData(null);
      } finally {
      }
    };
    getData();
  }, []);

  let relevantData = [];
  if (data) {
    relevantData = data.filter((g) => g.visible);
  }


  return (
    <div className="App">
      <h1>API Posts</h1>
      <div className="flex flex-row flex-wrap text-start justify-center">
      {relevantData && relevantData.map((game) => {
            return <div>
              <div className="flex flex-col p-4 font-serif text-xl my-2">
                <div className="flex-1 w-64"><span className="font-bold">Name: </span> {game.title}</div>
                <div className="flex-1 w-64"><span className="font-bold">Platform:</span> {game.platform}</div>
                <div className="flex-1 w-64"><span className="font-bold">Score: </span> {game.score}</div>
                <div className="flex-1 w-64"><span className="font-bold">Genre: </span> {game.genre}</div>
                <div className="flex-1 w-64"><span className="font-bold">Editor's Choice: </span>{game.editors_choice}</div>
                <br /> 
              </div>
            </div>
        }
        )}

      </div>
       
    </div>
  );
}

export default Exp;
