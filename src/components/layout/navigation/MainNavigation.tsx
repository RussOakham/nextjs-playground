import { Disclosure } from '@headlessui/react'

import CompanyLogo from './CompanyLogo'
import NavLink from './NavLink'
import NotificationButton from './NotificationButton'
import ProfileButton from './ProfileButton'
import MobileHamburger from './MobileHamburger'
import MobileMenuNav from './MobileMenuNav'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

type PropTypes = {
    className?: string
}

const MainNavigation = ({ className }: PropTypes) => {
    const displayNotificationButton = false

    return (
        <Disclosure as="nav" className={`${className} bg-gray-800`}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <MobileHamburger open={open} />
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <CompanyLogo />
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                item={item}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {displayNotificationButton && (
                                    <NotificationButton />
                                )}

                                <ProfileButton />
                            </div>
                        </div>
                    </div>

                    <MobileMenuNav navigation={navigation} />
                </>
            )}
        </Disclosure>
    )
}

export default MainNavigation
