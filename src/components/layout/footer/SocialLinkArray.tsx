import Link from 'next/link'

type Item = {
    name: string
    href: string
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

type PropTypes = {
    navigation: Item[]
}

const SocialLinkArray = ({ navigation }: PropTypes) => {
    return (
        <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-500"
                >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
            ))}
        </div>
    )
}

export default SocialLinkArray
