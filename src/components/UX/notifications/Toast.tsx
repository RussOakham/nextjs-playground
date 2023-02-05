import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

import useToast from '@/library/hooks/useToast'

const Toast = () => {
    const { toast, removeToast } = useToast()
    const [showToast, setShowToast] = useState<boolean>(false)

    const backgroundColor = useMemo(() => {
        if (toast.severity === 'success') {
            return 'bg-green-50'
        }
        if (toast.severity === 'error') {
            return 'bg-red-50'
        }
        if (toast.severity === 'warning') {
            return 'bg-yellow-50'
        }
        return 'bg-blue-50'
    }, [toast.severity])

    const textColor = useMemo(() => {
        if (toast.severity === 'success') {
            return 'text-green-800'
        }
        if (toast.severity === 'error') {
            return 'text-red-800'
        }
        if (toast.severity === 'warning') {
            return 'text-yellow-800'
        }
        return 'text-blue-800'
    }, [toast.severity])

    const secondaryTextColor = useMemo(() => {
        if (toast.severity === 'success') {
            return 'text-green-700'
        }
        if (toast.severity === 'error') {
            return 'text-red-700'
        }
        if (toast.severity === 'warning') {
            return 'text-yellow-700'
        }
        return 'text-blue-700'
    }, [toast.severity])

    const icon = useMemo(() => {
        if (toast.severity === 'success') {
            return <CheckCircleIcon className="w-6 h-6 text-green-400" aria-hidden="true" />
        }
        if (toast.severity === 'error') {
            return <XCircleIcon className="w-6 h-6 text-red-400" aria-hidden="true" />
        }
        if (toast.severity === 'warning') {
            return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" aria-hidden="true" />
        }
        return <InformationCircleIcon className="w-6 h-6 text-blue-400" aria-hidden="true" />
    }, [toast.severity])




    const handleShowToast = useCallback(() => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
            removeToast()
        }, 5000)
    }, [removeToast])

    useEffect(() => {
        if (toast.title !== '') {
            handleShowToast()
        }
    }, [handleShowToast, removeToast, toast])

    const handleRemoveToast = useCallback(() => {
        setShowToast(false)
        removeToast()
    }, [removeToast])


    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6"
            >
                <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={showToast}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className={`w-full max-w-sm overflow-hidden rounded-lg shadow-lg pointer-events-auto ${backgroundColor} ring-1 ring-black ring-opacity-5`}>
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="self-center flex-shrink-0">
                                        {icon}
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className={`text-sm font-semibold ${textColor}`}>{toast.title}</p>
                                        <p className={`mt-1 text-sm ${secondaryTextColor}`}>{toast.message}</p>
                                    </div>
                                    <div className="flex flex-shrink-0 ml-4">
                                        <button
                                            type="button"
                                            className={`inline-flex ${textColor} bg-white rounded-md hover:${textColor}focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                            onClick={handleRemoveToast}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}

export default Toast;