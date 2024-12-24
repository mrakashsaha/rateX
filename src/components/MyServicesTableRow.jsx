import React from 'react';

const MyServicesTableRow = ({ myService, idx, handleDelete, handleUpdate }) => {
    const { _id, imageURL, title, companyName, companyURL, category, price, date } = myService;
    return (
        <>
            <tr>
                <th>{idx}</th>
                <td>
                    <div className="flex gap-6">
                        <div className="avatar">
                            <div className="mask h-20 w-28">
                                <img
                                    src={imageURL}
                                    alt='thumbnail' />
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <div className="font-bold">{title}</div>
                            <div className="opacity-50">{category}</div>
                            <span className="badge badge-ghost badge-md">${price}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <a href={companyURL} target='_blank' className="font-medium btn-link">{companyName}</a>
                </td>
                <td>
                    <div className="font-medium">{date}</div>
                </td>
                <td>
                    <button onClick={() => handleUpdate(_id)} className='btn btn-md'>Edit</button>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className='btn btn-md'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default MyServicesTableRow;