import { FaFacebookF, FaGithub, FaYoutube } from 'react-icons/fa'
import { GrInstagram, GrTwitter } from 'react-icons/gr'

import CopyWrite from './CopyWrite'
import SocialLinkArray from './SocialLinkArray'

const navigation = [
    {
        name: 'Facebook',
        href: '#',
        image: <FaFacebookF key="facebook" />,
    },
    {
        name: 'Instagram',
        href: '#',
        image: <GrInstagram key="Instagram" />,
    },
    {
        name: 'Twitter',
        href: '#',
        image: <GrTwitter key="Twitter" />,
    },
    {
        name: 'GitHub',
        href: '#',
        image: <FaGithub key="GitHub" />,
    },
    {
        name: 'YouTube',
        href: '#',
        image: <FaYoutube key="YouTube" />,
    },
]

type PropTypes = {
    className?: string
}

const Footer = ({ className }: PropTypes) => {
    return (
        <footer className={`${className} bg-gray-800 text-white`}>
            <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                <SocialLinkArray navigation={navigation} />
                <CopyWrite />
            </div>
        </footer>
    )
}

export default Footer
