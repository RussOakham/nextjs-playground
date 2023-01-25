import { getCurrentYear } from '@/helpers/dateTimes'

const CopyWrite = () => {
    const year = getCurrentYear()

    const content = `${year} Your Company, Inc. All rights reserved.`

    return (
        <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-white">
                &copy; {content}
            </p>
        </div>
    )
}

export default CopyWrite
