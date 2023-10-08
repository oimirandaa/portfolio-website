import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngular,
    faCss3,
    faGitAlt,
    faGolang,
    faHtml5,
    faJava,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx={15}
                    />
                </h1>

                <p>Include ambition</p>
                <p>Likeness</p>
                <p>Future</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespineer'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGolang} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJava} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#EC4D28"/>
                    </div>

                </div>

            </div>

        </div>
    )

}
export default About;