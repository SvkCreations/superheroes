import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Nodata from "./Nodata";

export default function SearchResults(props) {
  const [state, setState] = useState({
    success: true,
    loading: true,
    results: []
  });
  const url = "https://superheroapi.com/api/3409596655930415/search/" + props.query;
  const fetchPost = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.response === "success") {
          setState({
            loading: false,
            success: true,
            results: res.results
          })
        }
        else {
          setState({
            loading: false,
            success: false,
            results: res.response
          })
        }
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="container mt-3 p-4 p-md-0">
      {state.success &&
        <div>
          <h2 className="text-success pb-3 pb-md-4">Search results for "{props.query}" </h2>
          {state.loading && <Loading />}
          {state.results.map((element) => {
            return (
              <div key={element.id} className="row featurette d-flex align-items-center justify-content-center gap-4 gap-md-0 my-5">
                <div className="col-md-7 order-2 order-md-1">
                  <h2 className="featurette-heading fw-bold lh-1 p-0 m-0 display-5">{element.name}</h2>
                  <small className="text-success fw-bold">{element.biography.publisher}</small>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h4 className="fw-bold">Biography</h4>
                      <p className="p-0 m-0">Full name: <span className="text-success fw-bold">{element.biography["full-name"]}</span> </p>
                      <p className="p-0 m-0">Occupation: {element.work.occupation}</p>
                      <p className="p-0 m-0">Place of Birth: {element.biography["place-of-birth"]}</p>
                      <p className="p-0 m-0">Alter egos: {element.biography["alter-egos"]}</p>
                      <p className="p-0 m-0">First Appearance: {element.biography["first-appearance"]}</p>
                      <h4 className="fw-bold pt-3">Appearance</h4>
                      <p className="p-0 m-0">Gender: {element.appearance.gender}</p>
                      <p className="p-0 m-0">Height: {element.appearance.height[0]}</p>
                      <p className="p-0 m-0">Weight: {element.appearance.weight[1]}</p>
                      <p className="p-0 m-0">Eye Color: {element.appearance["eye-color"]}</p>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <h4 className="fw-bold pb-1">Powerstats</h4>
                      <p className="pt-0 pb-2 m-0">Intelligence</p>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${element.powerstats.intelligence}%` }} aria-valuenow={element.powerstats.intelligence} aria-valuemin="0" aria-valuemax="100">{element.powerstats.intelligence}%</div>
                      </div>
                      <p className="pt-3 pb-2 m-0">Strength</p>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${element.powerstats.strength}%` }} aria-valuenow={element.powerstats.strength} aria-valuemin="0" aria-valuemax="100">{element.powerstats.strength}%</div>
                      </div>
                      <p className="pt-3 pb-2 m-0">Speed</p>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${element.powerstats.speed}%` }} aria-valuenow={element.powerstats.speed} aria-valuemin="0" aria-valuemax="100">{element.powerstats.speed}%</div>
                      </div>
                      <p className="pt-3 pb-2 m-0">Durability</p>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${element.powerstats.durability}%` }} aria-valuenow={element.powerstats.durability} aria-valuemin="0" aria-valuemax="100">{element.powerstats.durability}%</div>
                      </div>
                      <p className="pt-3 pb-2 m-0">Combat</p>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${element.powerstats.combat}%` }} aria-valuenow={element.powerstats.combat} aria-valuemin="0" aria-valuemax="100">{element.powerstats.combat}%</div>
                      </div>
                      <p className="pt-3 pb-2 m-0">Power</p>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${element.powerstats.power}%` }} aria-valuenow={element.powerstats.power} aria-valuemin="0" aria-valuemax="100">{element.powerstats.power}%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="450" src={element.image.url} alt="" style={{ border: "4px solid white" }} />
                </div>
              </div>
            )
          })}
        </div>
      }
      {!state.success &&
        <Nodata />
      }
    </div>
  );
}
