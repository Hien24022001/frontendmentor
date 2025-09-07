import React from 'react'
import { Controller } from 'react-hook-form'
import InfoIcon from '../assets/images/icon-info.svg'
import ErrorIcon from '../assets/images/icon-error.svg'
import UploadIcon from '../assets/images/icon-upload.svg'

function ImagePicker({ control, error }) {
  const [imagePreview, setImagePreview] = React.useState(null);

  const handleRemoveImage = () => {
    setImagePreview(null);
    document.getElementById('file-input').value = null; // Reset file input
  };

  return (
    <label className='flex flex-col gap-3'>
      <p className='text-preset-5'>Upload Avatar</p>
      <Controller 
        name="avatar"
        control={control}
        render={({ field: { onChange } }) => (
          <div className='flex flex-col items-center gap-4 border border-neutral-500 border-dashed rounded-xl px-4 py-3 bg-[rgba(255,255,255,0.08)]'>
            <input
              type="file"
              id="file-input"
              accept=".png, .jpg, .jpeg"
              className='hidden'
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  onChange(file);
                  setImagePreview(URL.createObjectURL(file));
                }
              }}
            />
            {
              imagePreview ? (
                <>
                  <p className='w-[50px] h-[50px] flex justify-center items-center rounded-xl border border-neutral-700'>
                    <img src={imagePreview} alt="Avatar Preview" className='w-[30px] h-[30px]' />
                  </p>
                  <div className='flex gap-2'>
                    <span className='px-2 py-1 rounded-sm text-preset-7 bg-[rgba(255,255,255,0.1)]' onClick={handleRemoveImage}>
                      Remove image
                    </span>
                    <span className='px-2 py-1 rounded-sm text-preset-7 bg-[rgba(255,255,255,0.1)]'>
                      Change image
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <p className='w-[50px] h-[50px] flex justify-center items-center rounded-xl border border-neutral-700'>
                    <img src={UploadIcon} className='w-[30px] h-[30px]' />
                  </p>
                  <p className='text-preset-6'>Drag and drop or click to upload</p>
                </>
              )
            }
          </div>
        )}
      />
      <p className="flex items-center gap-2">
        {
          error ? (
            <>
              <img src={ErrorIcon} />
              <span className='text-preset-7 text-orange-500'>{error}</span>
            </>
          ) : (
              <>
                <img src={InfoIcon} />
                <span className='text-preset-7'>Upload your photo (JPG or PNG, max size: 5MB).</span>
              </>
          )
        }
      </p>
    </label>
  )
}

export default ImagePicker
