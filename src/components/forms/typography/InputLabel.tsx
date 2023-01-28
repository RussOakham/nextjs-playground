import React from 'react'

type PropTypes = {
    inputId: string
    inputLabel: string
}

const InputLabel = ({ inputId, inputLabel }: PropTypes) => {
    return (
        <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
        >
            {inputLabel}
        </label>
    )
}

export default InputLabel
