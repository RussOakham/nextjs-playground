import Link from 'next/link'
import { IconType } from 'react-icons'

type SocialLinkButtonProps = {
    href: string
    label: string
    icon: IconType | JSX.Element
}

const SocialLinkButton = ({ href, label, icon }: SocialLinkButtonProps) => {
    return (
        <div>
            <Link
                href={href}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
                <>
                    <span className="sr-only">{label}</span>
                    {icon}
                </>
            </Link>
        </div>
    )
}

export default SocialLinkButton
