import Link from 'next/link'

import tailwindClassNames from '@/helpers/tailwindClassNames'

type PropTypes = {
    item: {
        name: string
        href: string
        current: boolean
    }
}

const NavLink = ({ item }: PropTypes) => {
    return (
        <Link
            key={item.name}
            href={item.href}
            className={tailwindClassNames(
                item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
        >
            {item.name}
        </Link>
    )
}

export default NavLink
