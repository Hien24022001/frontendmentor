import React, { useEffect, useRef, useState } from 'react'
import iconCorrect from 'assets/images/icon-correct.svg';
import iconIncorrect from 'assets/images/icon-incorrect.svg';

const optionMapping = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
}

const STATUS = {
    INIT: 'initial',
    SELECTING: 'selecting',
    SUBMITTED: 'submitted',
}

const getSpecifiedStyle = (isSelected, isCorrect, status) => {
    let containerStyle = '';
    let optionStyle = '';
    let Icon;
 
    if (status === STATUS.SUBMITTED && isCorrect) {
        Icon = <img src={iconCorrect} className='w-8 h-8' />
    }
    
    if (!isSelected) {
        containerStyle = 'inset-ring-transparent';
        optionStyle = 'bg-blue-100 text-grey-500';
    } else {
        if (status === STATUS.SELECTING) {
            containerStyle = 'inset-ring-purple-600';
            optionStyle = 'bg-purple-600 text-white';
        } else if (status === STATUS.SUBMITTED) {
            if (isCorrect) {
                containerStyle = 'inset-ring-green-500';
                optionStyle = 'bg-green-500 text-white';
            } else {
                containerStyle = 'inset-ring-red-500';
                optionStyle = 'bg-red-500 text-white';
                Icon = <img src={iconIncorrect} className='w-8 h-8' />
            }
        }
    }

    return { containerStyle, optionStyle, Icon }
}

function Options({ options, answer, currentIndex, handleNextQuestion, addPoint }) {
    const [status, setStatus] = useState(STATUS.INIT);
    const [selectedOption, setSelectedOption] = useState('');

    const chooseOptionHandler = (item) => {
        if (status === STATUS.SUBMITTED) return;
        setStatus(STATUS.SELECTING);
        setSelectedOption(item);
    }

    const onSubmitHandler = () => {
        if (!selectedOption) {
            setStatus(STATUS.SELECTING);
        } else {
            setStatus(STATUS.SUBMITTED)
            if (selectedOption === answer) addPoint();
        }
    }

    useEffect(() => {
        setStatus(STATUS.INIT);
        setSelectedOption('');
    }, [currentIndex]);

    return (
        <div className='flex flex-col gap-4 md:gap-8 xl:w-[564px]'>
            <div className='flex flex-col gap-4'>
                {
                    options.map((item, index) => {
                        const isCorrect = item === answer;
                        const isSelected = item === selectedOption;
                        const { containerStyle, optionStyle, Icon } = getSpecifiedStyle(isSelected, isCorrect, status)
                        return (
                        <div 
                            key={index} 
                            className={`p-4 min-h-[72px] grid grid-cols-[40px_1fr_32px] items-center gap-4 bg-white rounded-xl shadow-1 cursor-pointer md:gap-8 xl:p-6 inset-ring-[3px] dark:bg-blue-850 ${containerStyle}`}
                            onClick={() => chooseOptionHandler(item)}
                        >
                            <div className={`w-[40px] h-[40px] text-preset-4 rounded-md text-center leading-[40px] md:w-[56px] md:h-[56px] md:leading-[56px] ${optionStyle}`}>
                                {optionMapping[index]}
                            </div>
                            <span className='text-preset-4'>
                                {item}
                            </span>
                            { Icon }
                        </div>
                    )})
                }
            </div>
            {status === STATUS.SUBMITTED && (
                <button className='btn text-preset-4' onClick={handleNextQuestion}>
                    Next Question
                </button>
            )}
            {(status === STATUS.INIT || status == STATUS.SELECTING) && (
                <button className='btn text-preset-4' onClick={onSubmitHandler}>
                    Submit Answer
                </button>
            )}
            { status === STATUS.SELECTING && !selectedOption && (
                <div className='flex gap-2 items-center justify-center'>
                    <img src={iconIncorrect} className='w-8 h-8' />
                    <span className='text-preset-4 text-red-500'>
                        Please select an answer
                    </span>
                </div>
            )}
        </div>
    )
}

export default Options
