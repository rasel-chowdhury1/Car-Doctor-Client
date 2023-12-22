import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const loadedService = useLoaderData()
    const {user} = useContext(AuthContext);
    const {_id,title,price,img} = loadedService;

    const handleConfirmButton = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const order = {
            CustomerName: name,
            Email: email,
            Date: date,
            Service: title,
            ServiceId: _id,
            Photo: img,
            Price: price 
        }
        console.log(order)

        fetch('http://localhost:3000/booking',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: "Successfully!",
                text: "Your service added in booking",
                icon: "success"
            });
            form.reset()
        })
    }

    return (
        <div className='mx-auto'>
            <h3 className='text-3xl text-center'>Book Service : {title}</h3>
            
            <form onSubmit={handleConfirmButton}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name='amount' value={`$ `+ price} className="input input-bordered" required />
                    </div>
                </div>

                <div className='my-6'>
                    <input type="submit" value="ORDER CONFIRM" className='btn btn-block btn-primary' />
                </div>
            </form>
        </div>
    );
};

export default Checkout;