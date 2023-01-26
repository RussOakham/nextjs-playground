import { useMemo } from 'react'
import Link from 'next/link'
import { IconContext, IconType } from 'react-icons'

type Item = {
    name: string
    href: string
    image: IconType | JSX.Element
}

type PropTypes = {
    navigation: Item[]
}

const SocialLinkArray = ({ navigation }: PropTypes) => {
    const iconStyles = useMemo(() => ({ className: 'h-6 w-6' }), [])

    return (
        <div className="flex justify-center space-x-6 md:order-2">
            <IconContext.Provider value={iconStyles}>
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-white hover:text-gray-500"
                    >
                        <>
                            <span className="sr-only">{item.name}</span>
                            {item.image}
                        </>
                    </Link>
                ))}
            </IconContext.Provider>
        </div>
    )
}

export default SocialLinkArray
