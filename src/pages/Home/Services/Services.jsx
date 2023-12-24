import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [ascend,setAscend] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        fetch(`http://localhost:3000/services?search=${search}&sort=${ascend ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[ascend,search])

    const handleSearch = () =>{
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }
    
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className="text-2xl text-orange-600">Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words do not look even slightly believable. </p>

                <div className="join">
                    <input type='text' ref={searchRef} className="input input-bordered join-item" placeholder="Search..."/>
                    <button onClick={handleSearch} className="btn join-item rounded-r-full">Search</button>
                </div>

                <button
                onClick={() => setAscend(!ascend)}
                className='btn btn-primary'>
                    {ascend ? 
                     "Price: High to Low"
                    :"Price: Low to High"}
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                      key={service._id}
                      service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;