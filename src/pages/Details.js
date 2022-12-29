import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const post = useLoaderData();

    const { postDescription, image } = post[0];

    console.log(post)

    return (
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
                        {postDescription}
                    </p>
                </div>
                <figure>
                    <img className="w-full" src={image} alt="Shoes"/>
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
    );
};

export default Details;