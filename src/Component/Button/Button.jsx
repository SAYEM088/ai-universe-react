import React from 'react';

const Button = (props) => {
    const {children} = props;
    console.log(props)
    return (
        <div className='text-center'>
            <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">{children}</button>
        </div>
    );
};

export default Button;