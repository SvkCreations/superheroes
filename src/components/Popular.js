import React, { useState, useEffect } from "react";
export default function Popular() {
    const [pop1, setpop1] = useState([
        {
            "id": "70",
            "name": "Batman",
            "powerstats": {
                "intelligence": "100",
                "strength": "26",
                "speed": "27",
                "durability": "50",
                "power": "47",
                "combat": "100"
            },
            "biography": {
                "full-name": "Bruce Wayne",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "Insider",
                    "Matches Malone"
                ],
                "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
                "first-appearance": "Detective Comics #27",
                "publisher": "DC Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'2",
                    "188 cm"
                ],
                "weight": [
                    "210 lb",
                    "95 kg"
                ],
                "eye-color": "blue",
                "hair-color": "black"
            },
            "work": {
                "occupation": "Businessman",
                "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
            },
            "connections": {
                "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
                "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/639.jpg"
            }
        }
    ])
    const [pop2, setpop2] = useState([
        {
            "id": "732",
            "name": "Ironman",
            "powerstats": {
                "intelligence": "100",
                "strength": "85",
                "speed": "58",
                "durability": "85",
                "power": "100",
                "combat": "64"
            },
            "biography": {
                "full-name": "Tony Stark",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "Iron Knight",
                    "Hogan Potts",
                    "Spare Parts Man",
                    "Cobalt Man II",
                    "Crimson Dynamo",
                    "Ironman"
                ],
                "place-of-birth": "Long Island, New York",
                "first-appearance": "Tales of Suspence #39 (March, 1963)",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'6",
                    "198 cm"
                ],
                "weight": [
                    "425 lb",
                    "191 kg"
                ],
                "eye-color": "Blue",
                "hair-color": "Black"
            },
            "work": {
                "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
                "base": "Seattle, Washington"
            },
            "connections": {
                "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
                "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/85.jpg"
            }
        }
    ])
    const [pop3,setpop3] = useState([
        {
            "id": "332",
            "name": "Hulk",
            "powerstats": {
                "intelligence": "88",
                "strength": "100",
                "speed": "63",
                "durability": "100",
                "power": "98",
                "combat": "85"
            },
            "biography": {
                "full-name": "Bruce Banner",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "Annihilator",
                    "Captain Universe",
                    "Joe Fixit",
                    "Mr. Fixit",
                    "Mechano",
                    "Professor",
                    "Jade Jaws",
                    "Golly Green Giant"
                ],
                "place-of-birth": "Dayton, Ohio",
                "first-appearance": "Incredible Hulk #1 (May, 1962)",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human \/ Radiation",
                "height": [
                    "8'0",
                    "244 cm"
                ],
                "weight": [
                    "1400 lb",
                    "630 kg"
                ],
                "eye-color": "Green",
                "hair-color": "Green"
            },
            "work": {
                "occupation": "Nuclear physicist, Agent of S.H.I.E.L.D.",
                "base": "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
            },
            "connections": {
                "group-affiliation": "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
                "relatives": "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/83.jpg"
            }
        }
        
    ])
    return (
        <div className="container mt-5">
            <h2 className="fw-bold text-success">Popular Superheroes</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
                {pop1.map((element) => {
                    return (<div className="col" key={element.id}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                                <img src={element.image.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">
                                        {element.connections["group-affiliation"].slice(0,100)}...
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
                {pop2.map((element) => {
                    return (<div className="col" key={element.id}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                                <img src={element.image.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">
                                        {element.connections["group-affiliation"].slice(0,100)}...
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
                {pop3.map((element) => {
                    return (<div className="col" key={element.id}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                                <img src={element.image.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">
                                        {element.connections["group-affiliation"].slice(0,100)}...
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}
