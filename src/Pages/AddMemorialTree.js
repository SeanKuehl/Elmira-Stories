

import { useState } from 'react'






function AddMemorialTree() {
    const [memorialId, setMemorialID] = useState("");
    const [dedicatedTo, setDedicatedTo] = useState("");
    const [dedicatedBy, setDedicatedBy] = useState("");
    const [approximateLocation, setApproximateLocation] = useState("");
    const [sideOfTrail, setSideOfTrail] = useState("");
    const [additionalDescription, setAdditionalDescription] = useState("");
    
    const [image, setImage] = useState("");


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register_new_memorial', {
            method: "post",
            body: JSON.stringify({ memorialId, dedicatedTo, dedicatedBy, approximateLocation, sideOfTrail, additionalDescription,  image }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setMemorialID("");
            setDedicatedTo("");
            setDedicatedBy("");
            
            setApproximateLocation("");
            setSideOfTrail("");
            setAdditionalDescription("");
            setImage("");
        }
    }
    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="Memorial ID" 
                value={memorialId} onChange={(e) => setMemorialID(e.target.value)} />

                <input type="text" placeholder="Dedicated To" 
                value={dedicatedTo} onChange={(e) => setDedicatedTo(e.target.value)} />

                <input type="text" placeholder="Dedicated By" 
                value={dedicatedBy} onChange={(e) => setDedicatedBy(e.target.value)} />

                <input type="text" placeholder="Approximate Location" 
                value={approximateLocation} onChange={(e) => setApproximateLocation(e.target.value)} />

                <input type="text" placeholder="Side Of Trail" 
                value={sideOfTrail} onChange={(e) => setSideOfTrail(e.target.value)} />

                <input type="text" placeholder="Additional Description" 
                value={additionalDescription} onChange={(e) => setAdditionalDescription(e.target.value)} />

                <input type="text" placeholder="Memorial Image" 
                value={image} onChange={(e) => setImage(e.target.value)} />


                <button type="submit" 
                onClick={handleOnSubmit}>submit</button>
            </form>


            

            


        </>
    );
}



export default AddMemorialTree;
