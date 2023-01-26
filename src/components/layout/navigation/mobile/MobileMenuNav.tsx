import { Disclosure } from '@headlessui/react'

import MobileNavLink from './MobileNavLink'

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
            {({ close }) => (
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <MobileNavLink
                            key={item.name}
                            item={item}
                            close={close}
                        />
                    ))}
                </div>
            )}
        </Disclosure.Panel>
    )
}

export default MobileMenuNav
