import React , {useState} from "react";

const Form = () =>{
    const [data, setData] = useState({name: '', email: '', password: ''});

    return (
        <div>
            <label>Name: </label>
            <input type="text" placeholder="Name"
                onChange = {(e) =>{
                    const input = e.target.value;
                    setData({...data, name: input});
                }}
            />
            <label>Email: </label>
            <input type="email" placeholder="Email"
                onChange = {(e) =>{
                    const input = e.target.value;
                    setData({...data, email: input});
                }}
            />
            <label>Password: </label>
            <input type="password" placeholder="Password"
                onChange = {(e) =>{
                    const input = e.target.value;
                    setData({...data, password: input});
                }}
            />

            <button onClick = {() => console.log(data)}>Submit</button>
        </div>
    )
}

export default Form