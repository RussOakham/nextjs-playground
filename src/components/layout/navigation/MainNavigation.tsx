import { Disclosure } from '@headlessui/react'

import useWindowDimension from '@/hooks/useWindowDimension'

import CompanyLogo from './CompanyLogo'
import NotificationButton from './NotificationButton'
import ProfileButton from './ProfileButton'
import NavMenu from './desktop/NavMenu'
import MobileHamburger from './mobile/MobileHamburger'
import MobileMenuNav from './mobile/MobileMenuNav'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Blog', href: '/blog', current: false },
]

type PropTypes = {
    className?: string
}

const MainNavigation = ({ className }: PropTypes) => {
    const isAuthed = false
    const displayNotificationButton = false

    const { width } = useWindowDimension()

    return (
        <Disclosure as="nav" className={`${className} bg-gray-800`}>
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            {width < 640 ? (
                                <MobileHamburger open={open} />
                            ) : null}
                            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                                <CompanyLogo />
                                {width >= 640 ? (
                                    <NavMenu navigation={navigation} />
                                ) : null}
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {displayNotificationButton && (
                                    <NotificationButton />
                                )}

                                {isAuthed && <ProfileButton />}
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
