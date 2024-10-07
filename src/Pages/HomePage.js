

import { useState, useEffect } from 'react'






function HomePage() {
    const [treeId, setTreeID] = useState("");
    const [dedicatedTo, setDedicatedTo] = useState("");
    const [dedicatedBy, setDedicatedBy] = useState("");
    const [dateAdded, setDateAdded] = useState("");
    const [approximateLongitude, setApproximateLongitude] = useState("");
    const [approximateLattitude, setApproximateLattitude] = useState("");
    const [image, setImage] = useState("");


    const [that, setThat] = useState("");

    const fetchImage = async () => {
        const res = await fetch('http://localhost:5000/get_tree_image/profile pic.jpg');
        var body = await res.text();
        
        setThat(body);
      };


      useEffect(() => {
        fetchImage();
      }, []);


    


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register_new_memorial_tree', {
            method: "post",
            body: JSON.stringify({ treeId, dedicatedTo, dedicatedBy, approximateLattitude, approximateLongitude,  image }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setTreeID("");
            setDedicatedTo("");
            setDedicatedBy("");
            
            setApproximateLongitude("");
            setApproximateLattitude("");
            setImage("");
        }
    }
    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="tree ID" 
                value={treeId} onChange={(e) => setTreeID(e.target.value)} />

                <input type="text" placeholder="Dedicated To" 
                value={dedicatedTo} onChange={(e) => setDedicatedTo(e.target.value)} />

                <input type="text" placeholder="Dedicated By" 
                value={dedicatedBy} onChange={(e) => setDedicatedBy(e.target.value)} />

                <input type="text" placeholder="Approximate Longitude" 
                value={approximateLongitude} onChange={(e) => setApproximateLongitude(e.target.value)} />

                <input type="text" placeholder="Approximate Lattitude" 
                value={approximateLattitude} onChange={(e) => setApproximateLattitude(e.target.value)} />

                <input type="text" placeholder="Tree Image" 
                value={image} onChange={(e) => setImage(e.target.value)} />


                <button type="submit" 
                onClick={handleOnSubmit}>submit</button>
            </form>


            <img src={that} />

            


        </>
    );
}

//https://elmirastoriestestbucket.s3.us-east-2.amazonaws.com/profile+pic.jpg

export default HomePage;
