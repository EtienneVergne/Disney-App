import React, { Component } from 'react';
import logo from '../logo.png';
import Companiesdisplay from './companiesdisplay';
import '../components/pagecompagnies.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';


export default class Pagecompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies:[],
            isLoading: true
        }
    }
    

    async getCompanies(name) {
        let data = await fetch(`http://api.elorri.fr/disney-plus/company/${name}`).then(response => response.json());

        this.setState({
            companies: data,
            isLoading: false
        })
    }

    componentDidMount() {

        console.log(this.props.match.params.name)
        this.getCompanies(this.props.match.params.name)
    }

    backHome(){
        this.props.history.push("/");
    }

    

    render() {

        const company = this.props.match.params.name;

        const afficheCompanies = this.state.companies.map((movies)=> {
            return (
                
                <Companiesdisplay

                key= {movies.id}
                id= {movies.id}
                poster= {movies.poster}
                link={`/movie/${movies.id}`}

                />
                
            )
        })

        
        console.log("kouraboumga")
        console.log(this.state.companies);

        if (!this.state.isLoading) {
            return (
                <div className="company">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>

                    <div className="logo_company">
                        <img src={`${process.env.PUBLIC_URL}/img/companies/logo-${company}.png`} alt="company"/>
                        <div className="catalogue">
                            <span>Vous Présente</span>
                            <span>Tout son</span>
                            <span>catalogue</span>
                        </div>
                    </div>
                     
                    <div className="poster">
                        <Row gutter = {[0,16]}>
                    { afficheCompanies }
                    </Row>

                    </div>

                    <div className="backHome">
                    <div className="iconText">
                    <img onClick={ ()=> this.backHome()} src={`${process.env.PUBLIC_URL}/img/icon/icons8-disney-movies-48.png`}/>
                    <p>Home</p>
                    </div>
                    </div>
                    

                    

                </div>
            )
        }else{
            return <p>Chargement des films...</p>
        }

    }
}
