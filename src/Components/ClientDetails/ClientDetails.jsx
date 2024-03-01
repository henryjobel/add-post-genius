import React from 'react';

const ClientDetails = () => {
    return (
        <div>
            <div className='w-[1322px] bg-white h-[300px] rounded-2xl p-6 '>
                <h1 className='text-[24px] font-bold'>General Information</h1>
                <p className='text-[16px] font-medium pt-4'>Tree Masters, based in Toronto, is a premier tree cutting company offering expert and reliable services to residential and commercial clients alike. With years of experience in the industry, our skilled team specializes in safe and efficient tree removal, pruning, and maintenance, ensuring the health and aesthetics of your outdoor space. Committed to environmental sustainability and customer satisfaction, Tree Masters is your go-to source for all tree-related needs. </p>
                <div>
                <ul className='flex pt-16 gap-20'>
                    <li>
                        <p className='text-[14px]'>Location</p>
                        <h1 className='text-[20px] font-bold'>Toronto, Canada</h1>
                    </li>
                    <li>
                        <p className='text-[14px]'>Language/s</p>
                        <h1 className='text-[20px] font-bold'>English</h1>
                    </li>
                    <li>
                        <p className='text-[14px]'>Industry</p>
                        <h1 className='text-[20px] font-bold'>Tree Cutting  </h1>
                    </li>
                    <li>
                        <p className='text-[14px]'>Active Since</p>
                        <h1 className='text-[20px] font-bold'>December 7, 2019</h1>
                    </li>
                </ul>
            </div>
            </div>
          
        </div>
    );
};

export default ClientDetails;