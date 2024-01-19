import React from 'react'
import event1 from"@/assets/images/event1.webp"
import event2 from"@/assets/images/event2.webp"
import event3 from"@/assets/images/event3.webp"
import Image from 'next/image'

const PromotionSection = () => {
  return (
    <>
    <div className="flex flex-col ">
      <p className="text-blue-600 font-bold text-md text-center pt-10">
        PROMOTIONS
      </p>
      <h2 className="text-gray-900  text-center text-2xl  md:text-4xl py-2 font-bold">
        Our Promotions Events
      </h2>
      <div className=" flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 px-2 lg:px-10 pt-6 justify-center items-stretch">
        <div className=" flex flex-col justify-between lg:w-2/5 ">
          <div className="bg-[#d6d6d8] flex flex-col flex-grow md:flex-row pt-5 md:pt-0 items-center px-5 md:justify-center ">
            <div>
              <p className="text-2xl text-black font-bold">
                GET UP TO <br /> <span className="text-4xl">60%</span>{" "}
              </p>
              <p className="text-lg font-semibold text-[#232323] pt-2">
                For the summer season
              </p>
            </div>
            <div>
              <Image src={event1} alt="" className='mt-10'>

              </Image>
            </div>
          </div>
          <div className="bg-black text-white text-center py-10 mt-4 md:px-0 flex flex-col flex-grow">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              GET 30% Off
            </h2>
            <p className="text-md py-4">USE PROMO CODE</p>
            <button className="tracking-widest bg-gray-700 px-10 md:px-16 w-fit mx-auto py-2 border border-transparent rounded-lg font-bold items-center">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:w-3/5 py-4 md:py-0 ">
          <div className="bg-orange-100  flex flex-grow flex-col justify-between  md:pt-10">
            <div>
              <p className="text-md md:pl-2 text-center md:text-left pt-3 md:pt-0">
                Flex Sweatshirt
              </p>
              <p className="text-md md:text-lg md:pl-2 text-center md:text-left pt-3 md:pt-0 ">
                <span className="line-through"> $100.00 </span>{" "}
                <span className="font-semibold ml-2">$75.00</span>{" "}
              </p>
            </div>
            <Image src={event2} alt="" className="mx-auto"></Image>
          </div>
          <div className="bg-gray-200 flex flex-grow flex-col justify-between  md:pt-10 ">
            <div>
              <p className=" text-md md:pl-2 text-center md:text-left pt-3 md:pt-0">
                Flex Push Button Bomber
              </p>
              <p className="text-md md:text-lg md:pl-2 text-center md:text-left pt-3 md:pt-0 ">
                <span className="line-through"> $225.00 </span>{" "}
                <span className="font-semibold ml-2">$190.00</span>{" "}
              </p>
            </div>
            <Image src={event3} alt="" className="mx-auto"></Image>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default PromotionSection