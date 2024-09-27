import React, { useEffect, useState } from "react";
import ALt from "../../img/alt.svg";
import LazyImage from "../../components/LazyImage";

export default function About() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-container grid gap-4 grid-cols-3 ">
      {albums.length > 0 &&
        albums.map((value, index) => (
          <div key={index} className="p-5 border-solid border-2 border-sky-600">
            <LazyImage
              src={value.thumbnailUrl}
              alt={ALt}
              placeholder={ALt}
              width={350}
              className="rounded-[30px] blur-[2px] hover:blur-[0px]"
            />
            <h3 className="font-bold pt-2 text-2xl">{value.title}</h3>
          </div>
        ))}
    </div>
  );
}
