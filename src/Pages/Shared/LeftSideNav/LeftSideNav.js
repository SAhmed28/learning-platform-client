import React, { useEffect } from 'react';

const LeftSideNav = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div>
            <h2>This will be left nav</h2>
        </div>
    );
};

export default LeftSideNav;