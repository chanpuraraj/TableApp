import React from 'react';

//traditional way of declaring function
/*function Table({ data }) {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
}*/

//modern way of declaring function using arrow function syntax
const Table = ({data}) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return(
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;