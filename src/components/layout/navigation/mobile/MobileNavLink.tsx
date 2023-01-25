import Link from 'next/link'
import { Disclosure } from '@headlessui/react'

import tailwindClassNames from '@/helpers/tailwindClassNames'

type PropTypes = {
    item: {
        name: string
        href: string
        current: boolean
    }
}

const MobileNavLink = ({ item }: PropTypes) => {
    return (
        <Link key={item.name} href={item.href} passHref legacyBehavior>
            <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={tailwindClassNames(
                    item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
            >
                {item.name}
            </Disclosure.Button>
        </Link>
    )
}

export default MobileNavLink
