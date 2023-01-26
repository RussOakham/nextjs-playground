import CopyWrite from './CopyWrite'
import SocialLinkArray from './SocialLinkArray'

import navigation from './data/socialLinks'

type PropTypes = {
    className?: string
}

const Footer = ({ className }: PropTypes) => {
    return (
        <footer className={`${className} bg-gray-800 text-white`}>
            <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
                <SocialLinkArray navigation={navigation} />
                <CopyWrite />
            </div>
        </footer>
    )
}

export default Footer
