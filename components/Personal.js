import React from 'react';
import "./Personal.css";
import ReactGA from 'react-ga';

class Personal extends React.Component{
    constructor(){
        super();
        this.colors = ['#8EBABF', '#deb887', '#212121', '#efefef', '#fff0fc']
        this.offset = 500
        this.containers
        this.introStart = []
        this.state={
            color: '#8EBABF'
        }
    }
    
    componentDidMount(){
        this.containers = document.getElementsByClassName('personal__container');
        this.introStart.push(window.getComputedStyle(document.querySelector('.personal__one-cover')).top)
        this.introStart.push(window.getComputedStyle(document.querySelector('.personal__one-headline')).top)
        window.addEventListener("scroll", this.handleScroll);
        window.setTimeout(this.removeLoad, 2000);

        ReactGA.initialize('UA-154800081-1');
        ReactGA.pageview(window.location.pathname);
    }

    removeLoad = () => {
        window.scrollTo(0,0);
        document.querySelector('.personal__loading-screen').classList.add('hidden')
        document.querySelector('.personal__one-name-circle').classList.remove('personal__one-name-loading')
        window.setTimeout(()=>{document.querySelector('.personal__one-cover').classList.add('seen')}, 1000)
    }
    handleScroll = () => {
        this.colorSroll()
        if(window.pageYOffset < document.querySelector('.personal__two').offsetTop){
            this.moveIntro()
        }
        this.showImages()
    }
    moveIntro = () => {
        let m = (100/window.innerHeight)
        let y = m * window.pageYOffset;
        let neg_y = (-1.5 * m) * window.pageYOffset;
        document.querySelector('.personal__one-cover').style.top = `${window.parseInt(this.introStart[0]) + neg_y}px`
        document.querySelector('.personal__one-headline').style.top = `${window.parseInt(this.introStart[1]) + y}px`
    }
    colorSroll = () => {
        for(let i=0; i<this.containers.length;i++){
            if(window.pageYOffset + this.offset > this.containers[i].offsetTop &&
                window.pageYOffset + this.offset < (this.containers[i].offsetTop + this.containers[i].clientHeight)){
                if(this.state.color != this.colors[i]){
                    this.setState({color: this.colors[i]});
                }
            }
        }
    }
    showImages = () => {
        this.reveal('.personal__two-me', '.personal__two')
        this.reveal('.personal__three-headline', '.personal__three')
        this.reveal('.personal__three-gleam', '.personal__three')
        this.reveal('.personal__three-nightwalk', '.personal__three')
        this.reveal('.personal__three-napanya', '.personal__three')
        this.reveal('.personal__four-headline', '.personal__four')
        this.reveal('.personal__four-bee', '.personal__four')
        this.reveal('.personal__four-careers', '.personal__four')
        this.reveal('.personal__four-record', '.personal__four')
        this.reveal('.personal__four-shinobi', '.personal__four')
        this.reveal('.personal__four-track', '.personal__four')
        this.reveal('.personal__four-verizon', '.personal__four')
        this.reveal('.personal__four-bnr', '.personal__four')
        this.reveal('.personal__four-sap1', '.personal__four')
        this.reveal('.personal__four-together', '.personal__four')
    }
    reveal = (selector, container) => {
        if(window.pageYOffset + (window.innerHeight * .7) > document.querySelector(selector).offsetTop + document.querySelector(container).offsetTop){
            if(!document.querySelector(selector).classList.contains('seen')){
                document.querySelector(selector).classList.add('seen');
            }
        } else {
            if(document.querySelector(selector).classList.contains('seen')){
                document.querySelector(selector).classList.remove('seen');
            }
        }
    }
    render(){
        return(
            <div className="personal" style={{backgroundColor:this.state.color}}>
                <div className="personal__loading-screen"/>
                <div className="personal__container personal__one">
                    <div className="personal__one-headline">
                        Try to look past the symbol
                    </div>
                    <div className="personal__one-cover">
                        <img className="personal__one-image" src="/money.png"/>
                        <span className="personal__one-overlay" />
                    </div>
                    <img className="personal__one-name-circle personal__one-name-loading" src="/name-circle.png" />
                </div>
                <div className="personal__container personal__two">
                    <img className="personal__two-me" src="/me.gif" />
                    <img className="personal__two-hint" src="/dance.png" />
                    <div className="personal__two-line-container">
                        <div className="personal__two-line">I'm Ray, Today</div>
                    </div>
                </div>
                <div className="personal__container personal__three">
                    <div className="personal__three-headline">Your value is internal</div>
                    <div className="personal__three-cover personal__three-gleam">
                        <img src="/gleam.png" />
                        <span className="personal__three-overlay" />
                    </div>
                    <div className="personal__three-cover personal__three-nightwalk">
                        <img src="/nightwalk.png" />
                        <span className="personal__three-overlay" />
                    </div>
                    <div className="personal__three-cover personal__three-napanya">
                        <img src="/napanya.jpg" />
                        <span className="personal__three-overlay" />
                    </div>
                    <img className="personal__three-hint" src="/a-home.png" />
                </div>
                <div className="personal__container personal__four">
                    <div className="personal__four-headline">Things I've made for me and you with you</div>
                    <a href="https://vimeo.com/155072344">
                        <div className="personal__four-cover personal__four-bee">
                            <img src="/bee.png" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <a href="https://www.groupninemedia.com/careers">
                        <div className="personal__four-cover personal__four-careers">
                            <img src="/careers.gif" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <a href="https://soundcloud.com/greytail/sets/you-can-do-it">
                        <div className="personal__four-cover personal__four-record">
                            <img src="/record.jpg" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <a href="https://vimeo.com/151452558">
                        <div className="personal__four-cover personal__four-sap1">
                            <img src="/sap1.png" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <div className="personal__four-cover personal__four-shinobi">
                        <img src="/shinobi.gif" />
                        <span className="personal__four-overlay" />
                    </div>
                    <a href="https://vimeo.com/217888898">
                        <div className="personal__four-cover personal__four-together">
                            <img src="/together.png" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <a href="https://soundcloud.com/candy_fiend/half-priced-candy-the-day-after-valentines-day">
                        <div className="personal__four-cover personal__four-track">
                            <img src="/track.jpg" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <a href="https://www.thrillist.com/city-of-more">
                        <div className="personal__four-cover personal__four-verizon">
                            <img src="/verizon.gif" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                    <a href="https://www.thrillist.com/best-new-restaurants-2019">
                        <div className="personal__four-cover personal__four-bnr">
                            <img src="/bnr.gif" />
                            <span className="personal__four-overlay" />
                        </div>
                    </a>
                </div>
                <div className="personal__container personal__five">
                    <div className="personal__five-headline">i hope youre ok. its not alway easy</div>
                    <div className="personal__five-link-container">
                        <a href="mailto:ray.sosseh@gmail.com">
                            <div className="personal__five-link">email</div>
                        </a>
                        <a href="https://www.linkedin.com/in/raysosseh/">
                            <div className="personal__five-link">linkedin</div>
                        </a>
                        <a href="https://www.instagram.com/boy_friday_/">
                            <div className="personal__five-link">insta</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Personal;