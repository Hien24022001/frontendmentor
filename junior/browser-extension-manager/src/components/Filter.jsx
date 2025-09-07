import React from 'react'

const statusList = ['All', 'Active', 'Inactive']

function Filter({ status, setStatus }) {
    return (
        <section className='flex flex-col gap-6 md:flex-row md:justify-between md:items-center'>
            <h2 className='text-preset1 text-center'>Extension List</h2>
            <ul className='flex justify-center items-center gap-3'>
                {statusList.map((item) => (
                    <li
                        key={item.toLowerCase()}
                        className={`text-center pt-2 px-5 pb-2.5 rounded-[999px] cursor-pointer ${status === item.toLowerCase() ? 'bg-red-700 text-neutral-0' : 'bg-neutral-0 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600'}`}
                        onClick={() => setStatus(item.toLowerCase())}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Filter