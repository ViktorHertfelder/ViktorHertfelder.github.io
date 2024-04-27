import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Socials() {
    return (
        <div id="socials" className="vh-50 text-white d-flex justify-content-center align-items-center p-5">
            <a href="https://github.com/ViktorHertfelder" target="_blank" rel="noopener noreferrer" className="px-3">
                <FontAwesomeIcon icon={faGithub} size="5x"/>
            </a>
            <a href="" target="_blank" rel="noopener norefferer" className="px-3">
                <FontAwesomeIcon icon={faLinkedin} size="5x"/>
            </a>
            <a href="" target="_blank" rel="noopener norefferer" className="px-3">
                <FontAwesomeIcon icon={faEnvelope} size="5x"/>
            </a>
        </div>
    );
}

export default Socials;