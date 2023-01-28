type ErrorTextProps = {
    children: string
}

const ErrorText = ({ children }: ErrorTextProps) => {
    return <p className="px-3 text-sm text-red-500">{children}</p>
}

export default ErrorText
