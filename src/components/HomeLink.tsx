import { Link } from "react-router-dom";
import '../index.css'

interface homeLinkProps {
    isEng: boolean
}

const HomeLink = ({isEng}:homeLinkProps) => {
    return(<Link to={'/'} className="home-link">{isEng ? 'Home' : 'मुखपुष्ठ'}</Link>)
}

export default HomeLink;