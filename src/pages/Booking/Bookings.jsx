import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingCard from './BookingCard';
import Swal from 'sweetalert2';

// import BookingCard from './BookingCard';

const Bookings = () => {
    const [bookings,setBooking] = useState([]);
    const {user,loading} = useContext(AuthContext);
    console.log(user.email)
    
    const uri = `http://localhost:3000/booking?Email=${user.email}`
        useEffect(() =>{
            fetch(uri)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBooking(data);
                })
        },[])

        const handleDeleteButton = id =>{
            console.log('service id : ',id)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              })
              .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/bookings/${id}`,{
                            method: "DELETE"
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                                if(data.deletedCount > 0){
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your booking service has been deleted.",
                                        icon: "success"
                                    });

                                    const remaining = bookings.filter(booking => booking._id !== id)
                                    setBooking(remaining);
                                }
                        })
                  
                }
              });
        }


    return (
        <div>
            <h1>Your Bookings : {bookings.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-bold text-xl'>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th> Photo</th>
                        <th> Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => <BookingCard
                          key={booking._id}
                          booking = {booking}
                          handleDeleteButton={handleDeleteButton}
                        ></BookingCard>)}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default Bookings;