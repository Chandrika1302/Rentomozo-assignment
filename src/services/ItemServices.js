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
      <ul>
        {relevantData && relevantData.map((game) => {
            return <li className="game-card">
                <h3>{game.title}</h3>
                <p>{game.platform}</p>
                <br /> 

            </li>
        }
        
        )}
      </ul>
    </div>
  );
}

export default Exp;
