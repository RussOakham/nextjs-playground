import { useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'

type PropTypes = {
    item: {
        name: string
        href: string
        current: boolean
    }
    close: () => void
}

const MobileNavLink = ({ item, close }: PropTypes) => {
    const router = useRouter()

    const isActive = router.pathname === item.href

    const handleClick = useCallback(() => {
        close()
    }, [close])

    return (
        <Link key={item.name} href={item.href} passHref legacyBehavior>
            <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={`${
                    isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
                aria-current={item.current ? 'page' : undefined}
                onClick={handleClick}
            >
                {item.name}
            </Disclosure.Button>
        </Link>
    )
}

export default MobileNavLink
