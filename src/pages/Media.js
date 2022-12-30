import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Media = () => {

    const { data: allmedias, isLoading} = useQuery({
        queryKey: ['media'],
        queryFn: async () => {
            const res = await fetch("https://hashbook-server.vercel.app/allmedias");
            const data = await res.json();
            return data;
        }

    })

    if (isLoading) {
        return <h1>Loading</h1>;
    }
    // console.log(allmedias)

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                allmedias.map(media =>
                    <div className="mb-10">
                        <div className="card card-compact w-2/3 bg-sky-200 shadow-xl mx-auto my-5">
                            <div className="card-body my-5">
                                <div className="flex flex-row justify-between my-2">
                                    <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                    </div>
                                </div>
                                <p className="my-2">
                                    {media.postDescription}
                                </p>
                            </div>

                            <figure>
                            <img className="w-full" src={media.image} alt="Shoes"/>
                            </figure>

                            <div className="card-body flex flex-row items-center">
                                <button className="btn btn-md btn-circle btn-primary">
                                    Like
                                </button>
                                <textarea
                                    className="textarea w-full h-10"
                                    placeholder="Write a comment"
                                ></textarea>
                                <button className="btn btn-md btn-primary">Post</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Media;