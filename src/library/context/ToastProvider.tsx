import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

type ToastProviderProps = {
    children: ReactNode
}

type ToastContextType = {
    toast: {
        title: string
        message: string
        severity: string
    }
    addToast: (
        title: string,
        message: string,
        severity: string,
    ) => void
    removeToast: (
    ) => void
}

export const ToastContext = createContext<ToastContextType>({
    toast: {
        title: '',
        message: '',
        severity: '',
    },
    addToast: (
        title: string,
        message: string,
        severity: string,
    ) => {
        return { title, message, severity }
    },
    removeToast: (
    ) => {
        return { title: '', message: '', severity: '' }
    },
})

const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toast, setToast] = useState({
        title: '',
        message: '',
        severity: '',
    })

    const addToast = useCallback((title: string, message: string, severity: string) => setToast({
        title,
        message,
        severity,
    }), []);

    const removeToast = useCallback(() => setToast({
        title: '',
        message: '',
        severity: '',
    }), []);


    const context = useMemo(() => ({
        toast,
        addToast,
        removeToast,
    }), [addToast, toast, removeToast])


    return (
        <ToastContext.Provider value={context}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider