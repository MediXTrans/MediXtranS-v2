import React,{useRef} from 'react';
import { audit, vector_down,vector_send } from '../assets';
import { Footer, Navbar } from '../components';
export default function Transcription() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='w-[100vw] md:mx-[30px] flex flex-col flex-wrap items-center justify-center lg:flex-row md:p-[5%]'>
        <div className='flex-[6] md:w-[100%] h-[100%] flex flex-col flex-wrap justify-between'>
          <div className='h-[60%] m-0 p-[10px] md:p-0 flex-1 flex flex-col'>
            <h2 className='text-[#FFC727] text-[40px] md:text-[48px] lg:text-[60px] font-[700]'>Get Name Entity Recognition</h2>
            <p className='text-[20px] font-[300] mt-5'>get transcription report of recent recorded/uploaded input document.</p>
          </div>
          <div className='flex-1 mt-12 justify-center items-center text-[22px] font-[Roboto] font-[700] flex flex-col md:flex-row md:justify-start'>
            <button className='w-[242px] h-[44px] shrink-0 justify-center mt-2 sm:mt-0 rounded-[6px] bg-white text-[#6A6868] border-2 border-[#6A6868]' type="submit">
              <p onClick={scrollToTarget} className='font-[Roboto] font-[700] flex flex-row justify-evenly items-center'>
                <div>Transcription Report</div>
                <div><img src={vector_down} alt="" /></div>
              </p>
            </button>
          </div>
        </div>
        <div className='flex-[4] flex justify-center shrink-0'>
          <div><img width={"632px"} height={"632px"} src={audit} alt="" /></div>
        </div>
      </div>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
      <div className='flex items-center justify-center text-[40px] p-5 md:text-[56px] font-[700] font-[Roboto] mt-5 sm:mt-12 text-[#555555]'>
        <h1>Here’s the transcription report</h1>
      </div>
      <div ref={targetRef} className='flex justify-center flex-col py-[30px] sm:py-[80px] p-5 md:p-[100px] lg:flex-row'>
        <div className='flex-[5] border-2 w-auto h-auto flex justify-center lg:w-[680px] lg:h-[651px] shrink-0 shadow-md p-3 md:text-[19px] font-[Roboto] font-[300]'>
          <p className='text-justify'>
            Generated text will be displayed here Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
        </div>
      </div>
      <div className='my-8 justify-center items-center text-[22px] font-[Roboto] font-[700] flex flex-col sm:flex-row '>
        <button className='w-[197px] h-[44px] shrink-0 justify-center bg-[#6A6868] rounded-[6px] text-white' type="submit">
          <p className='font-[Roboto] font-[700]'>Download pdf</p>
        </button>
        <button className='w-[197px] h-[44px] shrink-0 justify-center mt-2 sm:mt-0 rounded-[6px] bg-white text-[#6A6868] sm:ml-[45px] border-2 border-[#6A6868]' type="submit">
          <p className='font-[Roboto] font-[700] flex flex-row justify-evenly items-center'>
            <div>Send pdf</div>
            <div><img src={vector_send} alt="" /></div>
          </p>
        </button>
      </div>
      <Footer />
    </div>
  );
}
