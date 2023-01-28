type MainButtonProps = {
    type: 'button' | 'submit' | 'reset'
    text: string
}

const MainButton = ({ text, type }: MainButtonProps) => {
    return (
        <button
            type={type}
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            {text}
        </button>
    )
}

export default MainButton
