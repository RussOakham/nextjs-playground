import NavLink from './NavLink'

type Item = {
    name: string
    href: string
    current: boolean
}

type PropTypes = {
    navigation: Item[]
}

const NavMenu = ({ navigation }: PropTypes) => {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {navigation.map((item) => (
                    <NavLink key={item.name} item={item} />
                ))}
            </div>
        </div>
    )
}

export default NavMenu
