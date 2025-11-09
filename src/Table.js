import React, { useState } from 'react';

//traditional way of declaring function
/*function Table({ data }) {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
}*/
 



//modern way of declaring function using arrow function syntax
const Table = () => {

    const [data, setData] = useState([
        { id: 1, name: 'Alice', role: 'Admin', location: 'New York' },
        { id: 2, name: 'Bob', role: 'User', location: 'San Francisco' },
        { id: 3, name: 'Charlie', role: 'Moderator', location: 'Los Angeles' }
    ]);

    const AddRow = () =>{
        const newId = data.length + 1;
        const newName = "New User " + newId;
        const newRole = "Intern";
        const newLocation = "Toronto";
        const newRow = {
            id: newId,
            name: newName,
            role: newRole,
            location: newLocation
        };

        setData([...data, newRow]);
    }

    return(
        <div>
            <button onClick={AddRow} style ={{marginBottom: '20px'}}>
                Add Employee
            </button>

            <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: "collapse", width: "80%" }}>
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
            </table>'
        </div>
    );
};

export default Table;