import { useState } from 'react'

import { InboxIcon, UserIcon } from '@heroicons/react/20/solid'
import { fromPairs } from 'lodash'
import Tab from './Tab'

const tabs = [
    {
        id: 1,
        name: 'Secure Email',
        href: '#secure-email',
        icon: UserIcon,
        active: true,
    },
    {
        id: 2,
        name: 'User Login',
        href: '#user-login',
        icon: InboxIcon,
        active: false,
    },
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const toggleTab = (id: number) => {
        if (activeTab !== id) {
            setActiveTab(id)
        }
    }

    return (
        <div className="mb-4">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue={tabs.find((tab) => tab.active).id}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav
                        className="flex justify-center -mb-px"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                tab={tab}
                                toggleTab={toggleTab}
                                activeTab={activeTab}
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Tabs
