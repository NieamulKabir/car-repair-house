import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </div>
    );
};

export default Loading;