import React, { useEffect, useState } from 'react'
import lapimage from '../Image/lapimage.jpg'
import lapimage2 from '../Image/lapimage 2.jpg'
import './Home.css'
import { LiaCertificateSolid } from "react-icons/lia";
import { SlChemistry } from "react-icons/sl";
import { GiFruitBowl,GiHypodermicTest } from "react-icons/gi";
import { RiEmotionHappyLine } from "react-icons/ri";
// import { BiLeftArrow } from 'react-icons/bi';
import { FcLeft, FcRight } from 'react-icons/fc';
// import { data } from 'autoprefixer';


const Home = () => {
    const [banner,setBanner] = useState(lapimage);
    const [product,setProduct] = useState([
      {
        'before':'image1before',
        'after':'image1',
        'des':'Hair Growth Serum with 3% Redensyl, 2% Anagain'
      },{
        'before':'image2before',
        'after':'image2',
        'des':'Zero Hairfall % Zero Dandruff Hair shampooo, 250ml'
      },{
        'before':'image3before',
        'after':'image3',
        'des':'Hair Health & Deep Nourishment Onion Hair Oil, 100ml'

      },{
        'before':'image4before',
        'after':'image4',
        'des':'Hair Conditioner For Men & Women, 250ml'
      }
    ])

    const reveiw =[1,2,3,4,5];

    const imagereveiw = ['“I am able to see amazing results in 3 months, new hair growth in my baldness area is seen.” - Raj',
      '“I lost most of my hair during pregnancy, started to use this serum, now hair fall has reduced and hair volume increased” - Selvi',
      '“I am 34 years old male, no baldness, hair fall started to occur few weeks back, started to use Redensyl, now hair fall has completely stopped.” - Shankar']

      const about = [
        {
          des:"It's a really great product , i am really aware of that great changes due to haircolor gone really wrong,my hair got really frizzy and bad damaged now 3 weeks later i can see the difference",
          user:"madhan"
        },
        {
          des:"Great product!! Tried Natural infusions Hair Growth serum for the past 2 months.i seeenewwgrowth in places whre my hair is almostbald.I'm so excited. Ihave tried many other products in the past with zero Results,Thanks for this procudt that really works",
          user:"Siraj"
        }]
        const [aboutindex,setaboutindex]= useState(0);

    useEffect(()=>{
      const interval = setInterval(() => {
        setBanner((prev)=>prev===lapimage?lapimage2:lapimage);
      }, 3000);
      return () => clearInterval(interval);
    })
  return (
    <div >
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel sticky z-10 ">
                <img src={banner} className="d-block w-100 transition-opacity duration-100"   alt="banner"/>
      </div>
      <div className='flex justify-center py-8'>
        <div className='w-1/2'>
          <h1 className='text-center font-bold text-5xl py-6'>Natural and organic Haircare</h1>
          <p className='text-center' >Natural Infusion is a clean haircare line infused with nourishing, desert-derived botanicals and dreamlike scents. Every product is intentionally crafted to honor your haircare rituals from sunrise to sunset.</p>
        </div>
      </div>
      <div className='flex justify-center py-8 bg-neutral-100'>
        <div className='w-1/2'>
          <h1  className='text-center font-bold text-5xl py-6'>The Best Of Hair Care</h1>
          <p className='text-center'>Shop a complete array of best-in-class products for personalised hair care. Validated by dermatologists for visible results and suitable for all hair types.Hair gets healthy day after day!.</p>
        </div>

        
      </div>

      <div className="product_container overflow-scroll w-full bg-neutral-100">
        <div className="inner_product_container w-[120vw] flex justify-between list-none  gap-10 mx-32">
          {product.map((imgpath)=>(
            <li className='w-[50vw]   rounded-2xl overflow-hidden'>


              <div className='product flex w-full overflow-hidden  rounded-3xl   bg-white z-0 relative '>
                <img src={`/product/${imgpath.before}.jpg`} alt={`${imgpath.before}`} className='w-full  flex justify-center z-10 ' />
                <img src={`/product/${imgpath.after}.jpg`} alt={`${imgpath.after}`} className='z-20 first -translate-x-full opacity-0 ' />
              </div>


              <div className='p-4 text-sm'>
                <p className='flex justify-center font-semibold text-zinc-700 '>{imgpath.des}</p>
                <p className='flex justify-center font-thin '>From Rs. 599 <span style={{textDecoration:'line-through',marginLeft:'10px'}}>Rs. 999</span></p>
                <button className='flex justify-self-center my-4  font-extrabold  text-white bg-green-800 px-6 py-3 rounded-full '>QUICK VIEW</button>
              </div>
            </li>
          ))}

        </div>
      </div>
      <div>
        <h2 className='text-5xl font-sans font-semibold text-center py-8'>Watch & Buy</h2>
        <div className='w-full flex gap-16 px-20 py-10'>
          {
            reveiw.map((items)=>(
              <div className='w-1/5 h-[50vh] rounded-xl bg-neutral-300 justify-center items-center flex font-bold'> Reveiw {items}</div>
            ))
          }
        </div>
      </div>

      <div className='bg-green-800 text-white'>
        <h2 className='font-bold text-4xl py-10 text-center '>Naturally Infused With Goodness</h2>
        <ul className='specials'>
          <li>
            <div><LiaCertificateSolid  className='h-20 w-20 ' style={{strokeWidth:''}}/></div>
            <p>Guaranteed Hair Care</p>
          </li>
          <li>
            <div><SlChemistry className='h-20 w-20'/></div>
            <p>No Harsh Chemicals</p>
          </li>
          <li>
            <div><GiFruitBowl className='h-20 w-20 '/></div>
            <p>Natural Ingredients</p>
          </li>
          <li>
            <div><GiHypodermicTest className='h-20 w-20'/></div>
            <p>Dermatologist Tested</p>
          </li>
          <li>
            <div><RiEmotionHappyLine className='h-20 w-20'/></div>
            <p>10,000+ Happy Customers</p>
          </li>
        </ul>
      </div>

      <div className='flex px-14'>
        <div className=' flex justify-center items-center'>
          <div className='w-1/2  flex flex-col items-center'>
              <h1 className='text-2xl font-bold'>How Does It Work?</h1>
              <p className='text-center py-6'>This novel ingredient blend combines two patented molecules — dihydroquercetin-glucoside (DHQG) and Epigallocatechin gallate (EGCG2) — to help prevent the appearance of hair loss and boost the reactivation of hair growth by targeting hair follicle stems cells & reactivation of stem cells.</p>
              <button className='bg-green-800 py-2 rounded-full text-white px-4'>KNOW MORE</button>
          </div>
        </div>
        <img src={'/product/hairoot.png'} alt="Hairroot" />

      </div>

      <div>
        <h2 className='text-5xl font-sans font-semibold text-center py-8'>See Results in Just 2-3 Months</h2>
        <div className='flex px-5 gap-10'>
          {
            imagereveiw.map((item)=>(
              <div className='w-1/3'>
                <div className='flex gap-6'>
                  <div className="w-1/2 h-[50vh] bg-slate-200 rounded-xl"></div>
                  <div className="w-1/2 h-[50vh] bg-slate-200 rounded-xl"></div>
                </div>
                <p className='text-center'>{item}</p>
              </div>

            ))
          }

        </div>
      </div>

      <div className='bg-yellow-100 bg-opacity-75 px-[20vw]'>
        <h2 className='text-5xl font-bold py-10 '>Check What Our Customers are Saying</h2>

        {about.filter((data,index)=>index===aboutindex).map((data)=>(
          <div className=' before:opacity-0 after:opacity-0 reveiw' key={aboutindex}>
            <h1 className='text-2xl font-bold px-10 py-10'>{data.des}</h1>
            <p className='text-xl'>" {data.user} "</p>
          </div>
        ))}

        <div className='w-fit my-6 py-2 px-4  '>
          <button className=' left border-2 border-black  rounded-l-full overflow-hidden ' onClick={()=>setaboutindex((prev)=>prev===0?1:0)}><FcLeft className='leftinner h-full w-full py-2 px-4  '/></button>
          <button className='right border-2 border-black  rounded-r-full overflow-hidden ' onClick={()=>setaboutindex((prev)=>prev===0?1:0)}><FcRight className='rightinner h-full w-full py-2 px-4'/></button>
        </div>

      </div>

      
    </div>

  )
}

export default Home