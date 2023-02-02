import TabItem, { Tab } from './TabItem'

type TabsProps = {
    tabs: Tab[]
    activeTab: number
    toggleTab: (id: number) => void
}

const Tabs = ({ tabs, activeTab, toggleTab }: TabsProps) => {
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
                            <TabItem
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
