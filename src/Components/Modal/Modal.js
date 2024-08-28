import React, { useState } from "react";
import { BsFillXSquareFill } from "react-icons/bs";
import './Modal.css';
function Modal({modalClose,handleSubmition,editedRow, handleEditedSubmission}){
    const reducedRow=editedRow.reduce((elem)=>elem);
    const [warningNote, setwarningNote]=useState(null);
    const [inputData,setinputData] = useState(reducedRow);
    const handleChange =(e)=>{
        setinputData({...inputData,[e.target.name]: e.target.value});
    }
    const validateForm =()=>{
        if(inputData.tittle==="" || inputData.description===""){
            let errorFields=[];
            for(const [key,value] of Object.entries(inputData)){
                if(!value){
                    errorFields.push(key.toUpperCase());
                }
            }
            console.log(errorFields);
            setwarningNote(errorFields.join(",  "));
            console.log(warningNote);
            return true;
        }
        else{
            setwarningNote("");
            return false;
        }
    }
    function handleSubmit(e){
        if(reducedRow.tittle!=="" && reducedRow.description!==""){
        handleEditedSubmission({inputData});
        }
        else{
            console.log(inputData);
            if(validateForm()){
                return;
            }
            else{
                console.log(warningNote);
                handleSubmition(inputData);
            }
        }
        modalClose();
    }
    return (
    <>
    <div className="modal-container" onClick={(e)=>{
        if(e.target.className==="modal-container"){
            modalClose();
        }
    }}>
        <div className="modal">
        <BsFillXSquareFill className="close-logo" onClick={()=>modalClose()}/>
            <form className="form-group">
                <label htmlFor="tittle">Tittle</label>
                <input type="text" placeholder="Enter Tittle......" name="tittle" value={inputData.tittle} onChange={handleChange}/>
                <label htmlFor="description">Description</label>
                <textarea placeholder="Enter Description......." name="description" value={inputData.description} onChange={handleChange}/>
            </form>
            {warningNote && <div className="error-note">Please Include:<span>{warningNote}</span></div>}
            <button type="submit" className="save-btn" onClick={handleSubmit}>Save</button>
        </div>
    </div>
    </>
    );
}

export default Modal;