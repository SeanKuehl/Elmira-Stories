

import { useState } from 'react'
import './PageStyles/MemorialTreeSearchPage.css'


function MemorialTreeSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [treeList, setTreeList] = useState([]);

  

  const helpMessageDict = {"Memorial ID": "This is the unique number given to each tree or bench to help keep them organized. This has to do with cataloging them and they are not found on the memorials themselves.",
    "Dedicated To": "This is the person or persons the tree or bench has been planted or placed to remember.",
    "Dedicated By": "This is the person or persons who commissioned the tree or bench to be planted or placed.",
    "Date Added": "This is the date the memorial was added to the catelogue. This is not when the memorial was first placed or planted.",
    "Approximate Location": "This is the longitude and lattitude that the memorial is located near. If you wish to visit the memorial in person, this will give you a good place to start looking.",
    "Side of Trail": "This is the side of the trail the memorial is located on. This is usually either 'Right' or 'Left', but may be different if there are special circumstances surrouding the memorial's location.",
    "Additional Description": "If there is something special or notable about the memorial, it will be mentioned here. For example, a short biography of the person the memorial is dedicated to.",
    "Tree Image": "This button will take you to the most recent picture taken of the memorial."
  }
  

  function helpButtonMouseEnter(buttonName){
    var helpTextDisplay = document.getElementById("HelpMessage");
    var helpTitleDisplay = document.getElementById("HelpTitle");
    

    
    var helpMessage = helpMessageDict[buttonName];

    helpTextDisplay.innerHTML = helpMessage;
    helpTitleDisplay.innerHTML = buttonName;
    
  }

  function  helpButtonMouseLeave(){
    var helpTextDisplay = document.getElementById("HelpMessage");
    var helpTitleDisplay = document.getElementById("HelpTitle");
    
    
    helpTextDisplay.innerHTML = "";
    helpTitleDisplay.innerHTML = "";
    
  }


  function dateFormatter(inputDateString){
    var justYearMonthDay = inputDateString.split('T')[0];
    var withSlashesInsteadOfDashes = justYearMonthDay.replaceAll('-', '/');
    return withSlashesInsteadOfDashes;

  }


  const fetchImage = async (imageFileName) => {

    
    const res = await fetch('http://localhost:5000/get_tree_image/'+imageFileName, {  
      method: "get",
        
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    var body = await res.text();
    window.open(body);
    
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let localSearchTerm = searchTerm;

    //check for the search term being empty, as a truly empty string "" will cause a problem on the backend
    
    if (localSearchTerm.length === 0){
      localSearchTerm = "Dan Kuso The GOAT";  //this is the 'super secret' key for the backend to return all results
    }
    
    
    let result = await fetch(
      //note: the {} is javascript tells it to interperet something as javascript and not string.
      //if used here, it works as intended. If used above, it creates problems
    'http://localhost:5000/get_trees_by_search_term/'+localSearchTerm, {
        method: "get",
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    
    if (result) {
        
        setTreeList(result);
        
        
    }
}




  return (
    <div>
      <h2> Memorial Tree Search </h2>
      <p className="ExplanationText">If you would like to search for a memorial tree outside of Elmira, please visit <a href="http://www.lfcmemorialforest.org/">here</a>.
        The previous link has lots of information on memorial trees and some from Elmira.
        This link, however, only has 14 entries for memorial trees in Elmira as of October 2024
        when in fact there are hundreds. This is the reason for this project. We are working to
        document all the memorial trees and benches in Elmira to preserve their stories and legacies.
        You can search the trees we have added so far by searching below.
      </p>

      <br></br>

      <input type="text" placeholder="Search Here" value={searchTerm} className="SearchBox" onChange={(e) => setSearchTerm(e.target.value)}></input>
      <input type="submit" value="Search Memorials" onClick={handleOnSubmit} className="SearchButton"></input>


      <div id="HelpDiv" className="HelpDiv">
        <h3 id="HelpTitle"></h3>
        <p id="HelpMessage"></p>
      </div>


      

      <table>
                <thead>
                  <tr>
                    <th>Memorial ID <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Memorial ID")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Dedicated To <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Dedicated To")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Dedicated By <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Dedicated By")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Date Added <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Date Added")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Approximate Location <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Approximate Location")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Side of Trail <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Side of Trail")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Additional Description <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Additional Description")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>

                    <th>Tree Image <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Tree Image")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>
                  </tr>
                </thead>
                <tbody>
                {treeList.map(x => (
                  <tr>
                    <td>{x.memorial_ID}</td>
                    <td>{x.dedicated_to}</td>
                    <td>{x.dedicated_by}</td>
                    <td>{dateFormatter(x.date_added)}</td>
                    <td>{x.approximate_location}</td>
                    <td>{x.side_of_trail}</td>
                    <td>{x.additional_description}</td>
                    <td><button onClick={() => {fetchImage(x.tree_image)}} className="ViewImageButton">View Image</button></td>
                    </tr>
                ))}
                </tbody>
              </table>




    </div>
  );
}

export default MemorialTreeSearchPage;
