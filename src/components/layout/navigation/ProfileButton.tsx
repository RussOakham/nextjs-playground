import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { signOut } from 'next-auth/react'
import { Menu, Transition } from '@headlessui/react'

const ProfileButton = () => {
    const router = useRouter()

    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <Image
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        width={32}
                        height={32}
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        <Link
                            href="/profile"
                            className={`${
                                router.pathname === '/profile'
                                    ? 'bg-gray-100'
                                    : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                        >
                            Your Profile
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link
                            href="/settings"
                            className={`${
                                router.pathname === '/settings'
                                    ? 'bg-gray-100'
                                    : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                        >
                            Settings
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className={`${
                                router.pathname === '/logout'
                                    ? 'bg-gray-100'
                                    : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                        >
                            Logout
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProfileButton
