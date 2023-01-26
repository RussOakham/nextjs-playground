import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const instagram = {
    name: 'Instagram',
    href: 'https://www.instagram.com/russoakham/',
    image: <GrInstagram key="Instagram" />,
}

const gitHub = {
    name: 'GitHub',
    href: 'https://github.com/RussOakham',
    image: <FaGithub key="GitHub" />,
}

const linkedIn = {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/russell-oakham-11a08585/',
    image: <FaLinkedin key="LinkedIn" />,
}

const navigation = [instagram, gitHub, linkedIn]

export default navigation
