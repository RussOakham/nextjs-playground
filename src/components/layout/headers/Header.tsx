import React from 'react'

type PropTypes = {
    title: string
    subtitle1?: string
    subtitle2?: string
}

const Header = ({ title, subtitle1, subtitle2 }: PropTypes) => {
    return (
        <div className="shadow-lg bg-violet-900 opacity-90 h-60 full-bleed shadow-violet-900/50">
            <div className="flex items-center justify-center h-full mx-auto max-w-7xl">
                <div className="text-center">
                    {subtitle1 && (
                        <p className="text-lg font-semibold text-indigo-600">
                            {subtitle1}
                        </p>
                    )}
                    <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    {subtitle2 && (
                        <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                            {subtitle2}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
