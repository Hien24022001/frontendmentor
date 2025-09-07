import { useEffect, useRef, useState } from 'react'
import IconCopy from './assets/icon-copy.svg'
import IconCheck from './assets/icon-check.svg'
import IconArrowRight from './assets/icon-arrow-right.svg'

const fields = [
  {
    id: 'hasUppercase',
    title: 'Include Uppercase Letters',
  },
  {
    id: 'hasLowerCase',
    title: 'Include Lowercase Letters',
  },
  {
    id: 'hasNumber',
    title: 'Include Numbers',
  },
  {
    id: 'hasSymbol',
    title: 'Include Symbols',
  },
]

const generatePassword = (length, hasLowerCase, hasUppercase, hasNumber, hasSymbol) => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characterSet = '', password = '';
  if (hasLowerCase) {
    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    characterSet += lowercaseChars;
  }
  if (hasUppercase) {
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    characterSet += uppercaseChars;
  }
  if (hasNumber) {
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    characterSet += numberChars;
  }
  if (hasSymbol) {
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    characterSet += symbolChars;
  }

  if (password.length < length) {
    for (let i = password.length; i < length; i++) {
      password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }
  }

  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;

}

const getStrength = (count) => {
  let title = '', color = '', arr = [];
  if (count === 1) {
    title = 'TOO WEAK';
    color = '#f64a4a';
    arr = [0];
  } else if (count === 2) {
    title = 'WEAK';
    color = '#fb7658';
    arr = [0, 1];
  } else if (count === 3) {
    title = 'MEDIUM';
    color = '#f8cd65';
    arr = [0, 1, 2];
  } else if (count === 4) {
    title = 'STRONG';
    color = '#a4ffaf';
    arr = [0, 1, 2, 3];
  }
  return {title, color, arr};
}

function App() {
  const [password, setPassword] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [condition, setCondition] = useState({
    length: 0,
    hasUppercase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSymbol: false
  });
  
  const widthPercentage = Math.floor(condition.length * 100 / 20);
  const numOfSelect = Object.values(condition).filter((value) => value === true).length;
  const strength = getStrength(numOfSelect);

  const handleChange= (e) => {
    setCondition((prev) => ({ ...prev, length: e.target.value }))
  }

  const handleSelect = (name) => {
    if (numOfSelect + 1 > condition.length && !condition[name]) return;
    setCondition((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const handleGeneratePassword = () => {
    const { length, hasLowerCase, hasUppercase, hasNumber, hasSymbol } = condition;
    if (length === 0) {
      return;
    }
    if (!(hasLowerCase || hasUppercase || hasNumber || hasSymbol)) {
      return;
    }
    const password = generatePassword(length, hasLowerCase, hasUppercase, hasNumber, hasSymbol);
    setPassword(password);
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, [2000])
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-linear-(--gradient-1) text-white'>
      <div className='w-[343px] flex flex-col gap-4 md:w-[540px] md:gap-8'>
        <h4 className='text-preset-4 text-grey-600'>Password Generator</h4>
        <div className='flex flex-col gap-4 md:gap-6'>
          {/* password container */}
          <div className='flex justify-between items-center p-4 bg-grey-800 md:px-8'>
            {
              password ? (
                <span className='text-preset-2 md:text-[32px]'>{password}</span>
              ) : (
                <span className='text-preset-2 text-grey-700 md:text-[32px]'>P4$5W0rD!</span>
              )
            }
            <div className='flex items-center gap-4'>
              { isCopied && <span className='text-preset-3 text-green-200'>COPIED</span> }
              <img src={IconCopy} className='w-[21px] h-[24px] cursor-pointer' onClick={copyToClipBoard} />
            </div>
          </div>

          {/* options list */}
          <div className='flex flex-col gap-8 p-4 bg-grey-800 md:px-8 md:py-6'>
            {/* character length  */}
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <span className='text-preset-4 md:text-lg'>Character Length</span>
                <span className='text-preset-2 text-green-200 md:text-[32px]'>{condition.length}</span>
              </div>
              <input 
                type='range' 
                value={condition.length} 
                onChange={handleChange} 
                min={0} 
                max={20} 
                style={{ background: `linear-gradient(90deg, #a4ffaf ${widthPercentage}%, #18171f ${widthPercentage}%)` }}
              />
            </div>
            {/* checkbox options */}
            <div className='flex flex-col gap-4'>
              {
                fields.map((item) => (
                  <div key={item.id} className='flex items-center gap-4 md:gap-6'>
                    <div 
                      className={`flex justify-center items-center w-5 h-5 border-2 cursor-pointer ${condition[item.id] ? 'bg-green-200 border-transparent' : 'bg-transparent border-grey-200'}`}
                      onClick={() => handleSelect(item.id)}
                    >
                      { condition[item.id] && <img src={IconCheck} /> }
                    </div>
                    <span className='text-preset-4 text-gray-200 md:text-lg'>{ item.title }</span>
                  </div>
                ))
              }
            </div>
            {/* strength container */}
            <div className='flex flex-col gap-4 md:gap-8'>
              <div className='px-[16px] py-[14px] flex justify-between items-center bg-grey-850 md:px-8 md:py-6'>
                <span className='text-preset-4 text-grey-600 md:text-lg'>STRENGTH</span>
                <div className='flex gap-2 items-center'>
                  <span className='text-preset-3'>{ strength.title }</span>
                  {
                    Array.from({ length: 4 }).map((_, index) => {
                      return(
                      <span 
                        key={index}
                        className='w-[10px] h-[28px]' 
                        style={strength.arr.includes(index) ? {backgroundColor: strength.color} : {border: '2px solid #e6e5ea'}}
                      ></span>
                    )})
                  }
                </div>
              </div>
              <button 
                className='h-[56px] flex justify-center items-center bg-green-200 text-grey-800 cursor-pointer hover:bg-transparent hover:border-2 hover:border-green-200 hover:text-green-200' 
                onClick={handleGeneratePassword}
              >
                <div className='flex gap-4 items-center'>
                  <span className='text-preset-4 md:text-lg'>GENERATE</span>
                  <img src={IconArrowRight} className='w-3 h03' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
