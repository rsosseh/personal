import styled from 'styled-components';

const PersonalStyle = styled.div`
    /*ONE*/
    .personal__one-headline{
        position: absolute;
        text-transform: uppercase;
        color: #FFFFFF;
        -webkit-text-stroke: 3px #d7fbff;
        font-size: 96px;
        width: 830px;
        text-align: right;
        top: 15vh;
        z-index: 1;
        font-family: 'Alata', sans-serif;
    }
    .personal__one-cover{
        position: absolute;
        width: 65vw;
        max-width: 600px;
        right: 5vw;
        top: 35vh;
        opacity: 0;
    }
    .personal__one-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color:rgba(142, 186, 191, .7);
    }
    .personal__one-name-circle{
        width: 100px;
        position: absolute;
        top: 70vh;
        left: 10vh;
        transform: none;
        animation: spinner linear infinite;
        animation-duration: 30s;
        animation-fill-mode: forwards;
        transition: 2s ease;
    }
    .personal__one-name-loading{
        top: 45vh;
        left: 45vw;
        z-index: 3;
        position: fixed;
        transform: translate(-50%, -50%);
    }

    /*TWO*/
    .personal__two{
    }
    .personal__two-hint{
        width: 210px;
        position: absolute;
        bottom: 20%;
        left: -60px;
        animation: spinner linear infinite;
        animation-duration: 30s;
        animation-direction: reverse;
    }
    .personal__two-me{
        width: 40vw;
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        padding-top: 40px;
        transition: .3s ease;
    }
    .personal__two-line-container{
        position: absolute;
        font-family: 'Alata', sans-serif;
        font-size: 110px;
        width: 500px;
        height: 80%;
        text-transform: uppercase;
        color: white;
        left: 50%;
        top: 0%;
    }
    .personal__two-line{
        position: -webkit-sticky;
        position: sticky;
        top: 100px;
    }

    /*THREE*/
    .personal__three{
        height: 100vh;
        overflow-x: hidden;
    }
    .personal__three-gleam{
        width: 60vw;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        opacity: 0;
        padding-top: 10px;
        transition: .3s ease;
    }
    .personal__three-nightwalk{
        width: 35vw;
        position: absolute;
        right: -4%;
        top: 32%;
        opacity: 0;
        padding-top: 10px;
        transition: .3s ease;
    }
    .personal__three-napanya{
        width: 60vw;
        position: absolute;
        top: 26%;
        left: 10%;
        opacity: 0;
        padding-top: 10px;
        transition: .3s ease;
    }
    .personal__three-headline{
        font-size: 60px;
        font-family: 'Alata', sans-serif;
        color: transparent;
        text-transform: uppercase;
        position: absolute;
        left: 50%;
        top: 4%;
        transform: translateX(-50%);
        z-index: 2;
        -webkit-text-stroke: 2px white;
        opacity: 0;
        padding-top: 10px;
        transition: .3s ease;
    }
    .personal__three-hint{
        width: 200px;
        position: absolute;
        left: -55px;
        bottom: 8%;
        animation: spinner linear infinite;
        animation-duration: 30s;
        animation-direction: reverse;
    }

    /*FOUR*/
    .personal__four{
        height: 300vh;
        overflow-x: hidden;
    }
    .personal__four-headline{
        font-family: 'Alata', sans-serif;
        font-size: 78px;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 2px #909090;
        width: 700px;
        right: 40px;
        position: absolute;
        line-height: 61px;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-bee{
        position: absolute;
        top: 20%;
        left: -40px;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-careers{
        position: absolute;
        top: 25%;
        width: 70vw;
        right: 2%;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-record{
        position: absolute;
        top: 46%;
        left: 10%;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-shinobi{
        position: absolute;
        width: 55vw;
        top: 55%;
        right: -30px;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-track{
        width: 40vw;
        position: absolute;
        top: 70%;
        left: 0;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-verizon{
        position: absolute;
        top: 83%;
        width: 65vw;
        right: -84px;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-bnr{
        position: absolute;
        top: 90%;
        width: 50vw;
        left: 0;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-sap1{
        width: 21vw;
        position: absolute;
        top: 13%;
        right: 10%;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }
    .personal__four-together{
        width: 40vw;
        position: absolute;
        top: 38%;
        right: 5%;
        opacity: 0;
        padding-top: 20px;
        transition: .3s ease;
    }

    /*FIVE*/
    .personal__five{
    }
    .personal__five-headline{
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        width: 160px;
        color: #ef95e2;
    }
    .personal__five-link-container{
        position: absolute;
        bottom: 3%;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        display: flex;
        justify-content: center;
    }
    .personal__five-link{
        padding: 10px;
    }

    @media (max-width: 768px){
        .personal__one-headline{
            font-size: 80px;
            width: 380px;
        }
        .personal__two-line{
            font-size: 80px;
        }
        .personal__two{
            height: 120vh;
        }
    }
    @media (max-width: 475px){
        .personal__one-headline {
            font-size: 51px;
            width: 290px;
        }
        .personal__one-name-loading{
            left: 35vw;
        }
        .personal__two-line-container{
            width: 56%;
            left: 44%;
        }
        .personal__two-line{
            font-size: 50px;
        }
        .personal__three-gleam{
            top: 43%;
            left: 64%;
            width: 68vw;
        }
        .personal__three-napanya{
            display: none;
        }
        .personal__four-headline{
            width: 270px;
            font-size: 58px;
        }
    }

    @keyframes spinner{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;

export default PersonalStyle;
