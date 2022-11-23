import React, { useState, useEffect } from "react";

export default function SearchResults(props) {
  const [state, setState] = useState([
    {
      id: "332",
      name: "Hulk",
      powerstats: {
        intelligence: "88",
        strength: "100",
        speed: "63",
        durability: "100",
        power: "98",
        combat: "85",
      },
      biography: {
        "full-name": "Bruce Banner",
        "alter-egos": "No alter egos found.",
        aliases: [
          "Annihilator",
          "Captain Universe",
          "Joe Fixit",
          "Mr. Fixit",
          "Mechano",
          "Professor",
          "Jade Jaws",
          "Golly Green Giant",
        ],
        "place-of-birth": "Dayton, Ohio",
        "first-appearance": "Incredible Hulk #1 (May, 1962)",
        publisher: "Marvel Comics",
        alignment: "good",
      },
      appearance: {
        gender: "Male",
        race: "Human / Radiation",
        height: ["8'0", "244 cm"],
        weight: ["1400 lb", "630 kg"],
        "eye-color": "Green",
        "hair-color": "Green",
      },
      work: {
        occupation: "Nuclear physicist, Agent of S.H.I.E.L.D.",
        base: "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico",
      },
      connections: {
        "group-affiliation":
          "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
        relatives:
          "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg",
      },
    },
  ]);
  const url = "https://superheroapi.com/api/3409596655930415/search/" + props.query;
  const fetchPost = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setState(res.results)
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="container">
      <div className="container mt-5">
        <h2 className="fw-bold text-success">Search Results for {props.query}</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
          {state.map((element) => {
            return (
              <div className="col" key={element.id}>
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                    <img
                      src={element.image.url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">
                        {element.connections["group-affiliation"].slice(0, 100)}
                        ...
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
