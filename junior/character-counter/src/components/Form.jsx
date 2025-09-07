import React, { useState } from 'react'
import CheckIcon from '../assets/images/icon-check.svg'

function Form({ values, setValues }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'isExcludeSpace' || name === 'isSetCharLimit') {
            setValues((prevValues) => ({
                ...prevValues,
                [name]: e.target.checked,
            }))
            return;
        }
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    return (
        <form className='flex flex-col gap-4 px-4 md:px-8 text-neutral-200'>
            <textarea 
                name='text'
                value={values.text}
                onChange={handleChange} 
                placeholder='Start typing here… (or paste your text)' 
                className='h-[200px] w-full p-5 bg-neutral-700 rounded-xl border-2 border-neutral-600 text-preset-3'
            />
            <div className='flex flex-col gap-3 text-preset-4 md:flex-row md:gap-6'>
                <label className="flex items-center gap-2">
                    <input
                        name="isExcludeSpace"
                        type="checkbox"
                        checked={values.isExcludeSpace}
                        onChange={handleChange}
                        className="hidden peer"
                    />
                    <span className="w-4 h-4 bg-neutral-900 border border-neutral-200 rounded-sm peer-checked:bg-blue-400 peer-checked:border-none flex-shrink-0">
                        <img src={CheckIcon} className="w-4 h-4" />
                    </span>
                    <span>Exclude Space</span>
                </label>
                <label className='flex items-center gap-2'>
                    <input
                        name="isSetCharLimit"
                        type="checkbox"
                        checked={values.isSetCharLimit}
                        onChange={handleChange}
                        className="hidden peer"
                    />
                    <span className="w-4 h-4 bg-neutral-900 border border-neutral-200 rounded-sm peer-checked:bg-blue-400 peer-checked:border-none flex-shrink-0">
                        <img src={CheckIcon} className="w-4 h-4" />
                    </span>
                    <span>Set character limit</span>
                    {
                        values.isSetCharLimit && 
                        <input 
                            name='charLimit'
                            type='number' 
                            value={values.charLimit} 
                            onChange={handleChange} 
                            disabled={!values.isSetCharLimit} 
                            className='ml-2 px-3 py-1 border border-neutral-600 rounded-md'
                        />
                    }
                </label>
            </div>
        </form>
    )
}

export default Form