import Link from 'next/link'
import { Disclosure } from '@headlessui/react'

import tailwindClassNames from '@/helpers/tailwindClassNames'

type Item = {
    name: string
    href: string
    current: boolean
}

type PropTypes = {
    navigation: Item[]
}

const MobileMenuNav = ({ navigation }: PropTypes) => {
    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        passHref
                        legacyBehavior
                    >
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
                ))}
            </div>
        </Disclosure.Panel>
    )
}

export default MobileMenuNav
