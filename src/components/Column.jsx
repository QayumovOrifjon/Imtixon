import React from 'react'

const Column = () => {
  return (
    <div className='w-[390px] bg-[#1F1D2B] h-[737px] p-6 fixed rounded-r-lg'>
<h1 className='text-[25px] font-semibold text-white mb-6'>Orders #34562</h1>
<div className='flex text-white gap-2 mb-6'>
  <h1 className='px-[12px] py-[8px] border rounded-xl text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#393C49]'>Dine In</h1>
  <h1 className='px-[12px] py-[8px] border rounded-xl text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#393C49]'>To Go</h1>
  <h1 className='px-[12px] py-[8px] border rounded-xl text-[14px] font-semibold leading-[140%] text-[#EA7C69] border-[#393C49]'>Delivery</h1>
</div>

<div className='flex justify-between text-white'> 
  <p>Item</p>
  <div className='flex gap-[43px]'>
  <p>Qty</p>
  <p>Price</p>

  </div>
</div>
<hr className='mt-6 border-[#393C49]'/>
    </div>
  )
}

export default Column