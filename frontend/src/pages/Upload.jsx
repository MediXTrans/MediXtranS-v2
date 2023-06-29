import React from 'react';
import { vector_right, mediXtransFlow1, mediXtransUseCase1, Os_upgrade_2 } from '../assets';
import { Navbar } from '../components';

export default function Upload() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='w-[100vw] md:mx-[30px] flex flex-col flex-wrap items-center justify-center lg:flex-row md:p-[5%]'>
        <div className='flex-[6] md:w-[100%] h-[100%] flex flex-col flex-wrap justify-between'>
          <div className='h-[60%] m-0 p-[10px] md:p-0 flex-1 flex flex-col'>
            <h2 className='text-[#FFC727] text-[40px] md:text-[48px] lg:text-[60px] font-[700]'>Get best speech to text results </h2>
            <p className='text-[20px] font-[300] mt-5'>Upload any audio file format to convert it to text format</p>
          </div>
          <div className='flex-1 mt-12 justify-center items-center text-[22px] font-[Roboto] font-[700] flex flex-col sm:flex-row sm:justify-start'>
            <button className='w-[197px] h-[44px] shrink-0 justify-center bg-[#6A6868] rounded-[6px] text-white' type="submit">
              <p className='font-[Roboto] font-[700]'>Upload File</p>
            </button>
            <button className='w-[197px] h-[44px] shrink-0 justify-center mt-2 sm:mt-0 rounded-[6px] bg-white text-[#6A6868] md:ml-[45px] border-2 border-[#6A6868]' type="submit">
              <p className='font-[Roboto] font-[700] flex flex-row justify-evenly items-center'>
                <div>Transcribe</div>
                <div><img src={vector_right} alt="" /></div>
              </p>
            </button>
          </div>
        </div>
        <div className='flex-[4] flex justify-center shrink-0'>
          <div><img width={"632px"} height={"632px"} src={Os_upgrade_2} alt="" /></div>
        </div>
      </div>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
      <div className='flex items-center justify-center text-[40px] md:text-[56px] font-[700] font-[Roboto] mt-12 text-[#555555]'>
        <h1>How it Works?</h1>
      </div>
      <div className='flex justify-center flex-col p-5 py-[80px] md:p-[60px] md:flex-row'>
        <div className=' justify-center items-center'>
          <img src={mediXtransFlow1} alt="" />
        </div>
        <div className='border-2 m-20 h-relative border-[#555555]'></div>
        <div className=' justify-center items-center'>
          <img src={mediXtransUseCase1} alt="" />
        </div>
      </div>
    </div>
  );
}
