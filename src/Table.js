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

    const [editRowId, setEditRowId] = useState(null);
    
    const [editFormData, setEditFormData] = useState({
        name: '',
        role: '',
        location: ''
    });
    
    //method invoked on clicking on edit button
    const handleEditClick = (item) => {
        setEditRowId(item.id);
        setEditFormData({
            name: item.name,
            role:item.role,
            location: item.location
        });
    };

    //method invoked while updating value in row
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEditFormData((prev)=> ({
            ...prev,
            [name]: value
        }))
    };

    // method invoked on clicking on save button
    const handleSaveClick = (id) =>{
        const updatedData = data.map((item) =>
            item.id === id? {...item, ...editFormData}: item
        );
        setData(updatedData);
        setEditRowId(null);
    }

    const handleClickCancel = () => {
        setEditRowId(null);
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>
                        editRowId === item.id ? (
                        //Row in Edit Mode
                       <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <input type="text"
                            name="name"
                            value={editFormData.name}
                            onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input type="text"
                            name="role"
                            value={editFormData.role}
                            onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input type="text"
                            name="location"
                            value={editFormData.location}
                            onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <button onClick={()=> handleSaveClick(item.id)}> Save</button>
                            <button onClick={handleClickCancel}> Cancel </button>
                        </td>
                       </tr>

                    ) : (
                        //Row in View mode
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.location}</td>
                            <td>
                                <button onClick={()=> handleEditClick(item)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;