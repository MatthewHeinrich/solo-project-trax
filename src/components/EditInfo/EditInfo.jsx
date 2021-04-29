import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function EditInfo() {
    const [editFirst, setEditFirst] = useState('');
    const [editLast, setEditLast] = useState('');
    const [editUsername, setEditUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const editUser = (event) => {
        event.preventDefault();
        if(editFirst === ''){
            alert('Provide First Name');
        } else if(editLast === ''){
            alert('Provide Last Name');
        } else if(editUsername === ''){
            alert('Provide Username');
        } else {
        dispatch({
            type: 'EDIT_USER',
            payload: {
                editFirst: editFirst,
                editLast: editLast,
                editUsername: editUsername,
                // password: password,
                user: user,
            },
        });
            history.push('/user');
        }
    }; // end registerUser

    return (
        <form className="formPanel" onSubmit={editUser}>
            <h2>Edit User Info</h2>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )}
            <div>
                <label htmlFor="username">
                    First Name:
            <input
                        type="text"
                        name="firstname"
                        value={editFirst}
                        required
                        onChange={(event) => setEditFirst(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="username">
                    Last Name:
            <input
                        type="text"
                        name="lastname"
                        value={editLast}
                        required
                        onChange={(event) => setEditLast(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="username">
                    Username:
            <input
                        type="text"
                        name="username"
                        value={editUsername}
                        required
                        onChange={(event) => setEditUsername(event.target.value)}
                    />
                </label>
            </div>
            {/* <div>
                <label htmlFor="password">
                    Password:
            <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div> */}
            <div>
                <input className="btn" type="submit" name="submit" value="Edit" />
            </div>
        </form>
    );
}

export default EditInfo;