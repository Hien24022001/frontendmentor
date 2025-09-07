import React from 'react'
import Pattern1 from '../assets/images/pattern-character-count.svg'
import Pattern3 from '../assets/images/pattern-sentence-count.svg'
import Pattern2 from '../assets/images/pattern-word-count.svg'

function Statistics({ data, isExcludeSpace }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    let densityRendered;
    if (isExpanded) {
        densityRendered = Object.entries(data.letter_density);
    } else {
        densityRendered = Object.entries(data.letter_density).slice(0, 5);
    }

    const handleExpand = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <section className='flex flex-col gap-6 px-4 md:px-8'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row gap-4 text-neutral-900 relative'>
                    <div className='flex flex-col gap-2 p-5 md:px-3 md:py-4 bg-blue-400 rounded-xl relative overflow-hidden md:w-1/3'>
                        <p className='text-preset-1-mobile'>{data.characters}</p>
                        <p className='text-preset-3'>
                            Total Characters 
                            <span className='text-preset-4'>{isExcludeSpace ? ' (no space)' : ''}</span>
                        </p>
                        <img src={Pattern1} className='absolute -top-[calc((150px-100%)/2)] -right-[50.5px] md:-right-[70.5px] [150px] h-[150px]' />
                    </div>
                    <div className='flex flex-col gap-2 p-5 md:px-3 md:py-4 bg-yellow-500 rounded-xl relative overflow-hidden md:w-1/3'>
                        <p className='text-preset-1-mobile'>{data.words}</p>
                        <p className='text-preset-3'>Word Count</p>
                        <img src={Pattern2} className='absolute -top-[calc((150px-100%)/2)] -right-[50.5px] md:-right-[70.5px] [150px] h-[150px]' />
                    </div>
                    <div className='flex flex-col gap-2 p-5 md:px-3 md:py-4 bg-orange-500 rounded-xl relative overflow-hidden md:w-1/3'>
                        <p className='text-preset-1-mobile'>{data.sentences}</p>
                        <p className='text-preset-3'>Sentence Count</p>
                        <img src={Pattern3} className='absolute -top-[calc((150px-100%)/2)] -right-[50.5px] md:-right-[70.5px] [150px] h-[150px]' />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h5 className='text-preset-2'>Letter Density</h5>
                    <div className='flex flex-col gap-3 text-preset-4'>
                        {densityRendered.map(([key, value]) => {
                            const percentage = ((value / data.characters) * 100).toFixed(2);
                            const barWidth = `${percentage}%`;
                            const barStyle = {
                                width: barWidth,
                            };

                            return(
                            <div key={key} className='flex items-center gap-[14px]'>
                                <span className='w-[16px]'>{key}</span>
                                <div className='grow h-3 bg-neutral-800 rounded-full'>
                                    <div className='h-3 bg-blue-400 rounded-full' style={barStyle}></div>
                                </div>
                                <span className='w-[87px] text-right'>{value} ({barWidth})</span>
                            </div>
                        )})}
                    </div>
                    {
                        data.letter_density && Object.keys(data.letter_density).length > 0
                        ? (<p>
                            <span className='text-preset-3 cursor-pointer' onClick={handleExpand}>{isExpanded ? 'See Less' : 'See more'}</span>
                            <span></span>
                        </p>)
                        : (
                            <p className='text-preset-4'>
                                No characters found. Start typing to see letter density.
                            </p>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Statistics