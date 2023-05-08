import React from 'react';

const SingleData = (props) => {
    console.log(props.singleData)
    const { image, published_in, features, name} = props.singleData;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img className='w-full h-64' src={image} alt="AI" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-secondary font-bold">{name}</h2>
                    {/* <p className='text-primary'>1. {features[0]} <br/> 2. {features[1]} <br /> 3. {features[2]}</p> */}
                    {
                        features.map((feature,index)=>(
                            <p className='text-primary'>{index +1} . {feature}</p>
                        ))
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;