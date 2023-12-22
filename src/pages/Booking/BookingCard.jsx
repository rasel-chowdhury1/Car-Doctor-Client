import React from 'react';

const BookingCard = ({booking,handleDeleteButton}) => {
    console.log(booking)
    const {_id,Service,Photo,Price,Date,Email} = booking;
    console.log(handleDeleteButton);

    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteButton(_id)} className="btn btn-sm btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-24 h-24">
                    <img src={Photo} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
            </div>
            </td>
            <td>
              {Service}
            </td>
            <td>
              {Price}
            </td>
            <td>
              {Email}
            </td>
            <td>{Date}</td>
            <th>
            <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingCard;