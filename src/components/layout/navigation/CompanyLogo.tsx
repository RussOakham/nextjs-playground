import Image from 'next/image'

const CompanyLogo = () => {
    return (
        <div className="flex flex-shrink-0 items-center">
            <Image
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                width={37}
                height={32}
            />
            <Image
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                width={37}
                height={32}
            />
        </div>
    )
}

export default CompanyLogo
