import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CreatePost = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const handlePost = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=35e4492ded156a71c6f413af86a2e8c3';

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

            const post = {
            postDescription: data.post,
            image: imgData.data.url
            }

            fetch("http://localhost:5000/allmedias", {
                
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(post)
                })
                    .then(res => res.json())
                    .then(result => { }
                )
        })

        
    }

    return (
        <div className="w-2/3 mx-auto mb-10 bg-sky-200 p-4 rounded-lg">
            <form className="flex flex-col" onSubmit={handleSubmit(handlePost)}>
                
                <div className="form-control w-full">
                    <textarea type="text"
                        {...register('post', {
                            required: "You have to write something."
                        })}
                        placeholder="Write here"
                        className="textarea textarea-primary w-full my-2"
                    />
                    {errors.post && <p className='text-error' role="alert">{errors.post?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-black">Photo</span>
                    </label>
                    <input type="file"
                        {...register('image', {
                        })}
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs my-2"
                    />
                </div>

                <input type="submit" className='btn btn-primary my-2' value="Submit" />
                
            </form>
        </div>
    );
};

export default CreatePost;