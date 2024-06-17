'use client'
import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [isFormSucceded, setIsFormSucceded] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setFormMessage('Whoops, make sure it’s an email');
            setIsFormSucceded(false);
            return;
        }{
            setFormMessage('Success! Thankyou for submitting');
            setIsFormSucceded(true);
        }
        console.log('Form submitted');
    };

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full py-20 bg-primary-blue'>
                <div className='w-full h-auto max-w-[442px] mx-auto flex flex-col items-center justify-center gap-y-[30px]'>
                    <div className='text-[13px] leading-[40px] tracking-[5px] font-medium text-white'>35,000+ ALREADY JOINED</div>
                    <div className='text-[32px] leading-[40px] font-medium text-white text-center'>Stay up-to-date with what we’re doing</div>
                    <form className='w-full h-[48px] flex items-center gap-4' onSubmit={handleSubmit}>
                        <div className='w-full max-w-[300px] h-full relative'>
                            <input
                                className={`relative z-10 w-full h-full px-[20px] bg-white rounded-md focus:outline-none border-2 ${formMessage ? (isFormSucceded ? "border-green-500" : "border-primary-red") : "border-white"}`}
                                placeholder='Enter your email address'
                                type='email'
                                value={email}
                                
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {formMessage && (
                                <div className={`absolute inset-0 z-0 w-full h-[70px] px-[12px] py-[4px]  rounded-md flex items-end text-[10px] font-medium italic text-white ${isFormSucceded ? "bg-green-500" : "bg-primary-red"}`}>
                                    {formMessage}
                                </div>
                            )}
                        </div>
                        <button
                            type='submit'
                            className='w-full h-full max-w-[126px] px-5 bg-primary-red rounded-md text-white text-[14px] leading-[28px] font-medium border-2 border-primary-red hover:bg-white hover:text-primary-red transition ease-in-out duration-300'
                        >
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
