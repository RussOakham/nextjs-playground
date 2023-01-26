import Link from 'next/link'
import { useRouter } from 'next/router'

type PropTypes = {
    item: {
        name: string
        href: string
        current: boolean
    }
}

const NavLink = ({ item }: PropTypes) => {
    const router = useRouter()

    return (
        <Link
            key={item.name}
            href={item.href}
            className={`${
                router.pathname === item.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } px-3 py-2 rounded-md text-sm font-medium`}
            aria-current={item.current ? 'page' : undefined}
        >
            {item.name}
        </Link>
    )
}

export default NavLink
