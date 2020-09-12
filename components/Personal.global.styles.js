import css from 'styled-jsx/css'

export default css.global`
    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    img{
        width: 100%;
    }
    .personal{
        transition: background-color 1s ease;
    }
    .personal__container{
        position: relative;
        height: 170vh;
        width: 100%;
    }
    .personal__loading-screen{
        z-index: 3;
        background-color: #8EBABF;
        width: 100%;
        height: 100%;
        position: fixed;
        transition: .3s ease;
    }
    .seen{
        opacity: 1 !important;
        padding-top: 0 !important;
        transition: .5s ease;
    }
    .hidden{
        opacity: 0 !important;
        height: 0 !important;
        transition: 2s ease;
    }
`