import React from 'react'
import { useForm } from "react-hook-form";
import Navbar from './Navbar';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div>
                <Navbar />
                <div className="flex h-screen items-center justify-center">
                <div className='modal-box'>
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <h3 className="font-bold text-2xl">Contact Us</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter your name' className='w-80 px-3 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Email address' className='w-80 px-3 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Text Area */}
                            <div className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />

                                <textarea className="textarea textarea-bordered w-80 px-3 border rounded-md outline-none" placeholder="Type your message"
                                    {...register("textarea", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className='mt-4'>
                                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
        </>
    )
}



export default Contact