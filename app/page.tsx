"use client"
import Image from 'next/image'
import {  useEffect, useState } from 'react'

export default function Home() {
  const [bill,setBill] = useState('')
  const [b1,setB1] = useState(false)
  const [b2,setB2] = useState(false)
  const [b3,setB3] = useState(false)
  const [b4,setB4] = useState(false)
  const [b5,setB5] = useState(false)
  const [custom,setCustom] = useState('')
  const [people,setPeople] = useState('')
  const [tax,setTax] = useState('')
  const [tip,setTip] = useState('0.00')
  const [total,setTotal] = useState('0.00')
  const [complete,setComplete] = useState(false)


  useEffect(() => {
    
    if((bill !== "0") && (tax !== "0") && (people !== "0")){
      let ctip = ((parseFloat(tax)/100 ) * parseFloat(bill))/parseInt(people)
      let ctotal = (((parseFloat(tax)/100 )+1) * parseFloat(bill))/parseInt(people)
      if(ctip > 0.0){
        setTip((((parseFloat(tax)/100 ) * parseFloat(bill))/parseInt(people)).toFixed(2).toString())
      }
      if(ctotal > 0.0){
        setTotal(((((parseFloat(tax)/100 )+1) * parseFloat(bill))/parseInt(people)).toFixed(2).toString())
      }    
      if(ctotal > 0 && ctip >0){
        setComplete(true)
      }
    }
    
  }, [bill,tax,people,tip,total]);
  
  return (
    <div className=' w-screen justify-center h-screen flex items-center flex-col'>
      <Image
      src={"/images/logo.svg"}
      width={87}
      height={54}
      className=' md:pt-0 pt-60'
      alt='logo'/>
      
      <div className='mt-10 md:mt-20 w-full md:w-11/12 min-[1024px]:w-[1024px] p-7 flex-col flex md:flex-row rounded-xl bg-white'>
        <div className=' w-full md:w-1/2 p-5 space-y-10'>
          <div>
            <div className=' flex justify-between'>
              <div className=' text-custom-300 font-bold'>
                Bill
              </div>
              {bill === '0' && (
                <div className=' font-bold text-red-400'>
                  Can't be zero
                </div>
              )}
              
            </div>
            <div className={bill === '0' ? 'e' : "n"}>
              <div className='flex items-center ml-3'>
                <Image
                src={"/images/icon-dollar.svg"}
                width={11}
                height={17}
                alt='dollar'
                className=' w-[11px] h-[17px]'/>
              </div>
              <input type="number" value={bill} onChange={(e)=>{setBill(e.currentTarget.value)
              if(tax === ""){
                setTax("0")
              }
              if(people === ""){
                setPeople("0")
              }
              }} className='text-[24px] focus:outline-none w-full mr-3 rounded-sm focus-within:cursor-pointer bg-custom-600 text-end font-bold text-custom-200' placeholder='0' />
            </div>
          </div>
          <div>
            <div className=' flex justify-between'>
              <div className=' text-custom-300 font-bold'>
              Select Tip %
              </div>
              {tax === '0' && (
                <div className=' font-bold text-red-400'>
                  Please Select
                </div>
              )}
              
            </div>

            <div className=' mt-3 w-full flex space-y-4 flex-col '>
              <div className=' w-full grid gap-2 grid-cols-2 md:grid-cols-3'>
                <button onClick={()=>{setB1(true),setB2(false),setB3(false),setB4(false),setB5(false),setTax('5')}} className={b1 ? 's' : 'u'}>
                  5%
                </button>
                <button onClick={()=>{setB1(false),setB2(true),setB3(false),setB4(false),setB5(false),setTax('10')}} className={b2 ? 's' : 'u'}>
                  10%
                </button>
                <button onClick={()=>{setB1(false),setB2(false),setB3(true),setB4(false),setB5(false),setTax('15')}} className={b3 ? 's' : 'u'}>
                  15%
                </button>
                <button onClick={()=>{setB1(false),setB2(false),setB3(false),setB4(true),setB5(false),setTax('25')}} className={b4 ? 's' : 'u'}>
                  25%
                </button>
                <button onClick={()=>{setB1(false),setB2(false),setB3(false),setB4(false),setB5(true),setTax('50')}} className={b5 ? 's' : 'u'}>
                  50%
                </button>
                <input value={custom}  onChange={(e)=>{setTax(e.currentTarget.value),setCustom(e.currentTarget.value),setB1(false),setB2(false),setB3(false),setB4(false),setB5(false)}} type="text" placeholder='Custom' className=' placeholder-custom-300 bg-custom-600 text-custom-200 focus:outline-none focus:ring-2 rounded-sm text-end text-2xl font-bold pr-2 focus:ring-custom-100' name="" id="" />

              </div>
            </div>
          </div>
          <div>
            <div className=' flex justify-between'>
              <div className=' text-custom-300 font-bold'>
                Number of People
              </div>
              {people === '0' && (
                <div className=' font-bold text-red-400'>
                  Can't be zero
                </div>
              )}
            </div>
            <div className={people === '0' ? 'e' : "n"}>
              <div className='flex items-center ml-3'>
                <Image
                src={"/images/icon-person.svg"}
                width={13}
                height={16}
                alt='person'
                className=' w-[13px] h-[16px]'/>
              </div>
              <input type="number" value={people} onChange={(e)=>{
              setPeople(e.currentTarget.value)
              if(tax === ""){
                setTax("0")
              }
              if(bill === ""){
                setBill("0")
              }
              }} className='text-[24px] focus:outline-none w-full mr-3 rounded-sm focus-within:cursor-pointer bg-custom-600 text-end font-bold text-custom-200' placeholder='0' />
            </div>
          </div>
        </div>
        <div className=' relative w-full md:w-1/2 bg-custom-200 h-80 mt-3 md:mt-0 md:h-full md:ml-7 rounded-xl'>
          <div className=' flex w-full p-10 justify-between flex-row'>
            <div className=' flex flex-col'>
              <div className=' text-white'>
                Tip Amount
              </div>
              <div className=' text-custom-400'>
                / person
              </div>
            </div>
            <div className='text-3xl md:text-5xl min-[1024px]:text-6xl font-bold text-custom-100'>
              
             ${tip}
            </div>
          </div>
          <div className=' flex w-full px-10 justify-between flex-row'>
            <div className=' flex flex-col'>
              <div className=' text-white'>
                Total
              </div>
              <div className=' text-custom-400'>
                / person
              </div>
            </div>
            <div className='text-3xl md:text-5xl min-[1024px]:text-6xl  font-bold text-custom-100'>
             ${total}
            </div>
          </div>
          <div className=' px-10 bottom-10 left-0 w-full absolute'>
            {!complete && (
              <button disabled className=' py-3 bg-custom-300 cursor-not-allowed rounded-md text-xl font-bold w-full'>
                RESET
              </button>
            ) }
            {complete && (
              <button onClick={()=>{
                setBill('')
                setB1(false)
                setB2(false)
                setB3(false)
                setB4(false)
                setB5(false)
                setPeople('')
                setTax('')
                setTip("0.00")
                setTotal("0.00")
                setCustom('')
                setComplete(false)
              }} className=' bg-custom-100 py-3 hover:bg-custom-500 rounded-md text-xl font-bold w-full'>
                RESET
              </button>
            ) }
          </div>
        </div>
      </div>
    </div>
  )}
