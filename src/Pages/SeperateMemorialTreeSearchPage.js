

import { useState, useEffect } from 'react'
import { browserName } from 'react-device-detect'
import './PageStyles/MemorialTreeSearchPage.css'
import './PageStyles/GeneralPageStyle.css'

import Footer from '../Components/Footer'


function SeperateMemorialTreeSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [treeList, setTreeList] = useState([]);

  const [pagedListStartIndex, setPagedListStartIndex] = useState(0);
  const [realSliceSize, setRealSliceSize] = useState(0);
  const [displayStartIndex, setDisplayStartIndex] = useState(0);
  const pagedListSliceSize = 10;

  const [firstLoad, setFirstLoad] = useState(true);

  
  

  const helpMessageDict = {"Memorial ID": "This is the unique number given to each tree or bench to help keep them organized. This has to do with cataloging them and they are not found on the memorials themselves.",
    "Dedicated To": "This is the person or persons the tree or bench has been planted or placed to remember.",
    "Dedicated By": "This is the person or persons who commissioned the tree or bench to be planted or placed.",
    "Date Added": "This is the date the memorial was added to the catelogue. This is not when the memorial was first placed or planted.",
    "Approximate Location": "This is the start and end Geohashes of the area where the tree is located. You can search the locations of the hashes here: https://www.geohash.es/decode",
    "Side of Trail": "This is the side of the trail the memorial is located on. The North/South orientation is with Downtown Elmira to the South and Elmira Pet Foods, Floradale and Fergus to the North.",
    "Additional Description": "If there is something special or notable about the memorial, it will be mentioned here. For example, a short biography of the person the memorial is dedicated to.",
    "Memorial Image": "This button will take you to the most recent picture taken of the memorial."
  }


  function IncrementPagesListIndex(){
    if ((pagedListStartIndex + pagedListSliceSize) <= treeList.length){
      setPagedListStartIndex(pagedListStartIndex + pagedListSliceSize);
      setDisplayStartIndex(pagedListStartIndex + pagedListSliceSize + 1);

      //if we can show the next ten elements after the new index
      if ((pagedListStartIndex + (pagedListSliceSize+pagedListSliceSize)) <= treeList.length) {
        
        setRealSliceSize(pagedListStartIndex + (pagedListSliceSize+pagedListSliceSize));
      }
      //if there aren't 10 more elements left
      else {
        
        setRealSliceSize(treeList.length);
      }

    }
  }


  function DecrementPagesListIndex(){
    if ((pagedListStartIndex - pagedListSliceSize) >= 0){
      setRealSliceSize(pagedListStartIndex);
      setPagedListStartIndex(pagedListStartIndex - pagedListSliceSize);
      setDisplayStartIndex(pagedListStartIndex - pagedListSliceSize + 1);
      
    }
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





  function getLinkFromApproximateLocationGeohash(stringWithGeohashes, startOrFinishLocation) {
    //the start and end location geohashes are a string in the format: "dpy8nf2t - dpy8nf2q"

    var geohashToReturn = 0;

    geohashToReturn = stringWithGeohashes.replace(/ /g, '');  //this removes the whitespace from the string
    geohashToReturn = geohashToReturn.split('-');

    if (startOrFinishLocation === "Start") {
      
      geohashToReturn = geohashToReturn[0];

    }
    else if (startOrFinishLocation === "Finish") {
      geohashToReturn = geohashToReturn[1];
    }

    var linkToReturn = "https://www.geohash.es/decode?geohash=" + geohashToReturn; //add the geohash into the link and return the link
    return linkToReturn;

  }

 


  const fetchImage = async (imageFileName) => {
    
    
    
    const res = await fetch(process.env.REACT_APP_API_PATH+'/get_memorial_image/'+imageFileName, {  
      method: "get",
        
        headers: {
            'Content-Type': 'application/json'
        }
    }
  );
    var body = await res.text();

    

    if (browserName === "Mobile Safari" || browserName === "Safari"){
      window.location.assign(body); //this works in safari while the below method doesn't
    }
    else {
      window.open(body, '_blank');  //this open the url in a new window or tab depending on the user preference which is better because it doesn't lose the current page
    }

    
    
      
    
  };


  const handleOnKeyUp = async (e) => {
    e.preventDefault();

    //if the user pressed the enter key while having the search bar in focus, we should search for the term
    //this is a very commmon shortcut that we need to support
    if (e.key === "Enter"){
      let localSearchTerm = searchTerm;

      //check for the search term being empty, as a truly empty string "" will cause a problem on the backend
      
      if (localSearchTerm.length === 0){
        localSearchTerm = "Dan Kuso The GOAT";  //this is the 'super secret' key for the backend to return all results
      }
      
      
      let result = await fetch(
        //note: the {} is javascript tells it to interperet something as javascript and not string.
        //if used here, it works as intended. If used above, it creates problems
      process.env.REACT_APP_API_PATH+'/get_memorial_by_search_term/'+localSearchTerm, {
          method: "get",
          
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      
      if (result) {

          //set the values back to the "first page"
          //this is because we want to show the start of the search results, not page x of them which might be blank
          
          
          setTreeList(result);
          
          
      }
      
    }
  }




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
    process.env.REACT_APP_API_PATH+'/get_memorial_by_search_term/'+localSearchTerm, {
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

    useEffect(() => {
      //this triggers whenever there's a render event. setState calls trigger render events
      function CheckTreeListPageSize(){
        if (realSliceSize === 0 && treeList.length !== 0){
    
          if ((pagedListStartIndex + pagedListSliceSize) > treeList.length){
            
            setRealSliceSize(treeList.length);
            setDisplayStartIndex(1);
          }
          else {
            
            setRealSliceSize(pagedListSliceSize);
            setDisplayStartIndex(1);
          }
    
          
          
        }
      }
        
        CheckTreeListPageSize();

        //when the user loads the page, there's nothing in the table. This loads the table when the page loads to fix that.
       async function InitialFillOfTreeList(){
        if (treeList.length === 0 && firstLoad){
          setFirstLoad(false);
          
          let result = await fetch(
            //note: the {} is javascript tells it to interperet something as javascript and not string.
            //if used here, it works as intended. If used above, it creates problems
            
          process.env.REACT_APP_API_PATH+'/get_memorial_by_search_term/Dan Kuso The GOAT', {
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
        
        }

        InitialFillOfTreeList();
        
        
        
        
    });




  return (
    <div align="center">
      <h2> Memorial Tree Search </h2>
      <p  className="LeftPText"> The Elmira memorial forest is a collection of dedicated trees and benches that run
         along part of the Kissing Bridge Trailway. Both the Elmira part of the trail and the memorial forest
        are maintained by the <a href="https://elmiralions.ca/">Elmira Lions Club</a>. 
        The Elmira part of the trail also features a polinator preserve, resting places and
        runs alongside the Elmira golf course. To dedicate a tree or bench, please visit <a href="https://elmiralions.ca/elmira-memorial-forest/">here</a>.
        To search for memorial trees outside of Elmira, visit <a href="http://www.lfcmemorialforest.org/">here</a>.
        The previous link has lots of information on memorial trees and some from Elmira.
        This link, however, only has 14 entries for memorial trees in Elmira as of October 2024
        when in fact there are hundreds. This is the reason for this project. We are working to
        document all the memorial trees and benches in Elmira to preserve their stories and legacies.
        You can search the trees we have added so far by searching below. To search a memorial's Geohash location,
        (they usually look something like "dpy8nf2t") please see <a href="https://www.geohash.es/decode">here</a>. 
        If the memorial tree you're looking for isn't in our catalog yet, please contact the <a href="https://elmiralions.ca/contact/">Elmira Lions Club</a>.
      </p>

      <br></br>

      <input type="text" placeholder="Search Here" value={searchTerm} className="SearchBox" onChange={(e) => setSearchTerm(e.target.value)} onKeyUp={handleOnKeyUp}></input>
      <input type="submit" value="Search Memorials" onClick={handleOnSubmit} className="SearchButton"></input>


      <div id="HelpDiv" className="HelpDiv">
        <h3 id="HelpTitle"></h3>
        <p id="HelpMessage"></p>
      </div>


      
      <div className="MobileHelpButtonDiv">
        
      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Memorial ID")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Memorial ID?</button>
      
      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Dedicated To")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Dedicated To?</button>

      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Dedicated By")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Dedicated By?</button>

      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Date Added")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Date Added?</button>

      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Approximate Location")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Approximate Location?</button>

      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Side of Trail")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Side of Trail?</button>

      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Additional Description")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Additional Description?</button>

      <button className="MobileHelpButton" onTouchStart={() => {helpButtonMouseEnter("Memorial Image")}}
                          onTouchEnd={() => {helpButtonMouseLeave()}}>What is Memorial Image?</button>
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

                    <th>Memorial Image <button className="HelpButton" onMouseEnter={() => {helpButtonMouseEnter("Memorial Image")}}
                          onMouseLeave={() => {helpButtonMouseLeave()}}>?</button></th>
                  </tr>
                </thead>
                <tbody>

                
                {
                  treeList.slice(pagedListStartIndex, realSliceSize).map(x => (
                    <tr key={x.memorial_id}>
                      <td>{x.memorial_id}</td>
                      <td>{x.dedicated_to}</td>
                      <td>{x.dedicated_by}</td>
                      <td>{x.date_added}</td>
                      <td><a href={getLinkFromApproximateLocationGeohash(x.approximate_location, "Start")} target="_blank" rel="noopener noreferrer">Here</a> To <a href={getLinkFromApproximateLocationGeohash(x.approximate_location, "Finish")} target="_blank" rel="noopener noreferrer">Here</a></td> 
                      <td>{x.side_of_trail}</td>
                      <td>{x.additional_description}</td>
                      <td><button onClick={() => {fetchImage(x.memorial_image)}} className="ViewImageButton">View Image</button></td>
                      
                    </tr>
                  )
                )
              }
                
               
                </tbody>
              </table>

              <div className="ListPageDiv">
              
              <p> <button className="PagedListButtons" onClick={() => {DecrementPagesListIndex()}}>&lt;</button> Showing {displayStartIndex} - {realSliceSize} of {treeList.length} memorial entries <button className="PagedListButtons" onClick={() => {IncrementPagesListIndex()}}>&gt;</button></p>
              
              </div>

    </div>
  );
}

export default SeperateMemorialTreeSearchPage;
