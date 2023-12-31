import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from "react-router-dom";
import './index.scss';
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'o','b','o','d','a','n']
    const jobArray = ['f', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m,</span>

                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17}/>
                    <br/>
                </h1>

                <h2> Full Stack Developer / Java Expert / Dog dad</h2>

                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
        </div>
            <Logo />
        </>
    )
}

export default Home;