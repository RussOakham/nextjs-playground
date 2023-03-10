/* eslint-disable react/jsx-no-useless-fragment */
import { SignInResponse } from 'next-auth/react'
import { IconType } from 'react-icons'

type SocialLinkButtonProps = {
    onClick?: () => Promise<SignInResponse | undefined>
    label: string
    icon: IconType | JSX.Element
    disabled?: boolean
}

const SocialLinkButton = ({
    onClick,
    label,
    icon,
    disabled,
}: SocialLinkButtonProps) => {
    return (
        <div>
            <button
                onClick={onClick}
                type="button"
                disabled={disabled}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 disabled:bg-gray-200"
            >
                <>
                    <span className="sr-only">{label}</span>
                    {icon}
                </>
            </button>
        </div>
    )
}

export default SocialLinkButton
