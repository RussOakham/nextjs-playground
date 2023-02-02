export type Tab = {
    id: number
    name: string
    href: string
    icon: any
    active: boolean
}

type TabProps = {
    tab: Tab
    toggleTab: (id: number) => void
    activeTab: number
}

const TabItem = ({ tab, toggleTab, activeTab }: TabProps) => {
    const isActive = tab.id === activeTab

    return (
        <a
            key={tab.name}
            href={tab.href}
            onClick={() => toggleTab(tab.id)}
            className={`${
                isActive
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }
                'group inline-flex w-full items-center justify-center border-b-2 py-4 px-1 text-sm font-medium
            `}
            aria-current={tab.active ? 'page' : undefined}
        >
            <tab.icon
                className={`${
                    isActive
                        ? 'text-indigo-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                } 
                    '-ml-0.5 w-5' mr-2 h-5
                `}
                aria-hidden="true"
            />
            <span>{tab.name}</span>
        </a>
    )
}

export default TabItem
