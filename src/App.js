import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SearchResults from './components/SearchResults';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  let handleChange = (e)=>{
    setValue(e.target.value)
  }
  let handleClick = (e)=>{
    setQuery(value)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="px-4 pt-5 my-5 text-center">
          <h1 className="display-4 fw-bold">Superheroes in Detail</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Want to know more about your Favourite Superhero? Want to know their biography, their life and where they are from? Then you've come to the right place. Here you get to know accurate details about your favourite Superhero. So what are you waiting for? Just type in any Superhero name and start learning about them.</p>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5 d-flex">
              <input className="form-control me-2 p-2" value={value} onChange={handleChange} type="search" placeholder="Type in any Superhero name.." aria-label="Search" />
              <Link className="btn btn-outline-success" to="/search" onClick={handleClick}>Search</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Popular />}></Route>
          <Route path='/search' element={<SearchResults query={query} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
