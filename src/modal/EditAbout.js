import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthProvider';

const EditAbout = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    console.log(user)

    const { data: userDetails, isLoading, refetch} = useQuery({
        queryKey: ['userDetails'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://hashbook-server.vercel.app/users?email=${user?.email}`, {});
                const data = await res.json();
                return data;
            }
            catch (error) {
                
            }
        }
    })

    const handleUpdateInfo = data => {
        console.log(data)

        const user = {
            name: data.name,
            email: data.email,
            university: data.university,
            address: data.address
        }

        fetch(`https://hashbook-server.vercel.app/users/${userDetails[0]._id}`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form className="w-2/3 mx-auto" onClick={handleSubmit(handleUpdateInfo)}>
                            
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text"
                                {...register('name', {
                                    required: "Enter Your Full Name"
                                })}
                                className="input input-bordered w-full"
                                defaultValue={userDetails[0].name}
                            />
                            {errors.name && <p className='text-error' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type="text"
                                {...register('email', {
                                    required: "Enter Your Full Name"
                                })}
                                className="input input-bordered w-full"
                                defaultValue={userDetails[0].email}
                            />
                            {errors.name && <p className='text-error' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">University</span>
                            </label>
                            <input type="text"
                                {...register('university', {
                                    required: "Enter Your Full Name"
                                })}
                                className="input input-bordered w-full"
                                defaultValue={userDetails[0].university}
                            />
                            {errors.name && <p className='text-error' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Address</span>
                            </label>
                            <input type="text"
                                {...register('address', {
                                    required: "Enter Your Full Name"
                                })}
                                className="input input-bordered w-full"
                                defaultValue={userDetails[0].address}
                            />
                            {errors.name && <p className='text-error' role="alert">{errors.name?.message}</p>}
                        </div>
                        <input type="submit" className='btn btn-Primary w-full text-white my-4' value="Save" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAbout;