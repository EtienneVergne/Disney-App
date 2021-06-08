import React, { Component,  } from 'react'
import logo from '../logo.png';
import '../components/pagefilm.css';
import Teaser from './teaser';
import {Icon, Modal} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons'

export default class Pagefilm extends Component {

    state = {
        films: {},
        isLoading: true,
        iframeVisible: false
    }

    async getFilms(id) {
        console.log(`http://api.elorri.fr/disney-plus/movie/${id}`);
        let data = await fetch(`http://api.elorri.fr/disney-plus/movie/${id}`).then(response => response.json());

        this.setState({
            films: data,
            isLoading: false
        })
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        console.log(this.props.match.params.id)
        this.getFilms(this.props.match.params.id)
       
    }

     


    videoRun() {
        this.setState({
            iframeVisible:true
        })
    }

    backHome(){
        this.props.history.push("/");
    }



    render() {

        console.log(this.state.films.video)

        if (!this.state.isLoading) {
            return (
                <div className="pagefilm">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="homepage">
                            
                            </div>
                    </header>

                    <div className="corpus">
                        <div className="affiche-clic" >
                        <img src={this.state.films.poster} alt=""  />
                        <div className="icon-play" >
                        <PlayCircleOutlined onClick={() => this.videoRun()}/>
                        </div>
                        
                       </div>
                        <div className="text-presentation">
                            <h1>{this.state.films.title}</h1>
                            <h3>{this.state.films.company}</h3>
                            <p>{this.state.films.description}</p>
                        </div>
                    </div>

                    <Teaser isVisible={this.state.iframeVisible} video={this.state.films.video}/>
                    
                    <div className="backHome">
                    <div className="iconText">
                    <img onClick={ ()=> this.backHome()} src={`${process.env.PUBLIC_URL}/img/icon/icons8-disney-movies-48.png`}/>
                    <p>Home</p>
                    </div>
                    </div>
                </div>
            )
        } else {
            return <p>Chargement du film</p>
        }
    }
}

