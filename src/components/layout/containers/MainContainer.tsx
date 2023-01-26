import { ReactNode } from 'react'

type PropTypes = {
    children: ReactNode
    className?: string
}

const MainContainer = ({ children, className }: PropTypes) => {
    return (
        <main className={`${className} mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8`}>
            {children}
        </main>
    )
}

export default MainContainer
