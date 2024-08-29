import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs'; // Check if this is the correct icon
import { useRouter } from 'next/router';
import { useStateContext } from '@/context/StateContext'; // Ensure this path is correct
import { runFireworks } from '@/lib/utils';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);
    
  useEffect(()=>{
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  },[])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsCheckCircleFill />
        </p>
        <h2>Thank You for your oder!</h2>
        <p className='email-msg'>Check your email inbox for the resceipt</p>
        <p className='description'>
            If you have any questions , please email
            <a className='email' href='mailto:chamodshyamal855@gmail.com'>
                chamodshyamal855@gmail.com
            </a>
        </p>
        <Link href='/'>
            <button type='button' className='btn' width="300px">
                Continue Shopping
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
