import React from 'react';
import EditAbout from '../modal/EditAbout';

const About = () => {

    return (
        <div>
            <div className='grid h-screen place-items-center'>
                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display relative">
                    <label htmlFor="my-modal" className='btn btn-primary absolute top-5 right-5'>Edit</label>
                        <form className="artboard artboard-demo phone-1 bg-sky-200">
                            <label className="label">
                                    <span className="label-text text-black">Your Name</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6'></input>
                            <label className="label">
                                    <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6'></input>
                            <label className="label">
                                    <span className="label-text text-black">University</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6'></input>
                            <label className="label">
                                    <span className="label-text text-black">Address</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6'></input>
                        </form>
                    </div>
                </div>
            </div>
            <EditAbout></EditAbout>
        </div>
    );
};

export default About;