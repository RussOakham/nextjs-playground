import Image from 'next/image'
import Link from 'next/link'

const FormBanner = () => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={72}
                height={72}
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
                Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
                Or{' '}
                <Link
                    href="/register"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Register
                </Link>
            </p>
        </div>
    )
}

export default FormBanner
