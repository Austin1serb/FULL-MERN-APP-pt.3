import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default props => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title:'',
        price: "",
        description: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target
        
        setFormData(currentData => ({ ...currentData, [name]: value }))
        console.log(formData)


    }

    const onSubmitHanlder = e =>{
        e.preventDefault();
        axios.post(`http://localhost:8000/products`,formData)
        .then(res=>{
            setFormData({
                title:"",
                price: "",
                description: "",
            })
        props.updateList()
        })
        // .then(navigate('/'))
        // console.log(formData)
        .catch(err=>console.log("Error: ", err))
    }

    return(
        <div>
            <fieldset>
               <legend>Add a new Product </legend>
            <form onSubmit={onSubmitHanlder}  >
             
                <p>
                    <label >Title: </label>
                    <input name="title" type="text" value={formData.title}  onChange={handleChange} />
                </p>
                <p>
                    <label >Price: </label>
                    <input name="price" type="text" value={formData.price}  onChange={handleChange} />
                </p>
                <p>
                    <label >Description: </label>
                    <input name="description" type="text" value={formData.description} onChange={handleChange} />
                </p>
                
                        <button>ADD</button>
            </form>
            </fieldset>
           
        </div>
    )



}