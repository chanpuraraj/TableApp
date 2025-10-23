import React from 'react';

// how to pass props to a React component:
// 1. Table component that receives data as a prop
// and uses it directly without additional destructuring

// 2. I could write it like this: function Table(props) {}
// but then I'll have to use props.data inside the function

// 3. By destructuring in the parameter list, I can access data directly
//if I have more than one props, I can destructure them all here like:
// function Table({ data, title, loading, onRowClick, className }) {}

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