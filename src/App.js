import React, { Component, Fragment } from 'react';
import logo from './logo.png';
import './components/App.css';
import Affiche from './components/affiche';
import { Row, Col } from 'antd';
import Nouveautes from './components/nouveautes';
import Suggestions from './components/suggestions';


export default class App extends Component {

  state = {
    listMovies: []
  };

  routeCompanies = (name) => {
    this.props.history.push(`/company/${name}`)
  }  

  banSugg = (sugg) => {
    this.props.history.push(`/movie/${sugg}`)
  }
  


  async moviesExtract() {
    let response = await fetch("http://api.elorri.fr/disney-plus/movies")
                          .then(response => response.json());
    // let data = await response.json();
    // console.log("API response")
    // console.log(data);
    this.setState({
      listMovies: response
    });

  }

  componentDidMount() {
    this.moviesExtract();
  }




  //Préparation affichage image bannière

  render() {
    console.log("LIST MOVIES STATE")
    console.log(this.state.listMovies);
    const companies = ["disney","marvel","pixar","starwars"];
    let banMovies = this.state.listMovies.filter((movie) => movie.highlighted);
    let banAffiche = banMovies.map(movie => {
      return(
        <Affiche
            key={movie.id}
            id={movie.id}
            highlighted={movie.highlighted}
            cover={movie.cover}
        />
      )
    });

    let banCompanies = companies.map(comp => {
      return (
        <button onClick = {() => this.routeCompanies(comp)}><img src={`${process.env.PUBLIC_URL}/img/companies/logo-${comp}.png`} alt="" /></button>
      )
    });

    

    //tirage au sort des posters pour encart Nouveautés


    const posters = [...this.state.listMovies];
    const tirageResult = [];
    if (posters.length > 0) {
      for (let i = 0; i < 6; i++) {

        let tirage = Math.floor(Math.random() * posters.length)
        tirageResult.push({id: posters[tirage].id, poster: posters[tirage].poster})
        
        posters.splice(tirage, 1)
        console.log("coucou")
        console.log(tirageResult)
      }
      
    }

    const affichagePosters = tirageResult.map((film) => {
      return (
        <Nouveautes
         link={`/movie/${film.id}`}
         new={film.poster}
        />

      )
    })

    

    // tirage au sort pour suggestions

    const affiche = [...this.state.listMovies];
    const selectionAffiches = [];
    console.log(affiche);

    if (posters.length > 0) {
      for (let j = 0; j < 3; j++) {

        let index = Math.floor(Math.random() * affiche.length)
        selectionAffiches.push({poster : affiche[index].cover, id:affiche[index].id})
        affiche.splice(index, 1)

      }
      console.log(selectionAffiches);
    }

    const suggestions = selectionAffiches.map ( (aff) => {
      return (
        
        <img onClick = { () => this.banSugg(aff.id)} src={aff.poster} alt=""/>
        

        
    )});





    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="affiches">
        {banAffiche}
        </div>   


        <div className="btn">
          {banCompanies}
          </div>
          
          
          <h2>Nouveautés</h2>
           <div className="newFilms">
          
          
       { affichagePosters }
       </div>
       <div>
            <h2>Suggestions</h2>
             <div className="suggestions">
            {suggestions}
            </div>

            </div>

        
      </div>





    )
  }
}








