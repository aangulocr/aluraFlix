import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";

import { useState, useEffect } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  return (
    <>
      <Banner
        img="banner.png"
        color="red"
      />
      <Titulo>
        <h1>Videos tutoriales para aprender</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return (
            <Card
              {...video}
              key={video.id}
            />
          );
        })}
      </section>
    </>
  );
}

export default Inicio;