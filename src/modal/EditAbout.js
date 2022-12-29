import React from 'react';

const EditAbout = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <form className="w-2/3 mx-auto">
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
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                    Save
                </label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EditAbout;