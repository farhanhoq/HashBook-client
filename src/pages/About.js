import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import EditAbout from '../modal/EditAbout';

const About = () => {

    const { user } = useContext(AuthContext);

    console.log(user)

    const { data: userDetails, isLoading, refetch} = useQuery({
        queryKey: ['userDetails'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://hashbook-server.vercel.app/users?email=${user?.email}`, {});
                const data = await res.json();
                refetch();
                return data;
            }
            catch (error) {
                
            }
        }
    })

    if (isLoading) {
        return <h1>Loading</h1>
    }

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
                            <input type='text' className='input input-bordered w-5/6' defaultValue={userDetails[0].name} readOnly/>
                            <label className="label">
                                    <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6' defaultValue={userDetails[0].email} readOnly/>
                            <label className="label">
                                    <span className="label-text text-black">University</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6' defaultValue={userDetails[0].university} readOnly/>
                            <label className="label">
                                    <span className="label-text text-black">Address</span>
                            </label>
                            <input type='text' className='input input-bordered w-5/6' defaultValue={userDetails[0].address} readOnly/>
                        </form>
                    </div>
                </div>
            </div>
            <EditAbout></EditAbout>
        </div>
    );
};

export default About;