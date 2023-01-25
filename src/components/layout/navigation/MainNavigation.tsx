import { Disclosure } from '@headlessui/react'

import useWindowDimension from '@/hooks/useWindowDimension'

import CompanyLogo from './CompanyLogo'
import NotificationButton from './NotificationButton'
import ProfileButton from './ProfileButton'
import NavMenu from './NavMenu'
import MobileHamburger from './mobile/MobileHamburger'
import MobileMenuNav from './mobile/MobileMenuNav'

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

    const { width } = useWindowDimension()

    return (
        <Disclosure as="nav" className={`${className} bg-gray-800`}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {width < 640 ? (
                                <MobileHamburger open={open} />
                            ) : null}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <CompanyLogo />
                                {width >= 640 ? (
                                    <NavMenu navigation={navigation} />
                                ) : null}
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {displayNotificationButton && (
                                    <NotificationButton />
                                )}

                                <ProfileButton />
                            </div>
                        </div>
                    </div>

                    {width < 640 ? (
                        <MobileMenuNav navigation={navigation} />
                    ) : null}
                </>
            )}
        </Disclosure>
    )
}

export default MainNavigation
