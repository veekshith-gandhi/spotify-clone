export function supportController(){
  var arr1 = [
    "clickDrop1",
    "clickDrop2",
    "clickDrop3",
    "clickDrop4",
    "clickDrop5",
    "clickDrop6",
  ];
  
  var i = 1;
  arr1.forEach((el) => {
    let id_name = `drop${i}`;
    console.log(el);
    let dropHeader = document.getElementById(el);
    dropHeader.addEventListener("click", function () {
      dropBtn(id_name);
    });
    i++;
  });
  
  function dropBtn(id_name) {
    if (id_name === "drop1") {
      funShow(id_name);
    } else if (id_name === "drop2") {
      funShow(id_name);
    } else if (id_name === "drop3") {
      funShow(id_name);
    } else if (id_name === "drop4") {
      funShow(id_name);
    } else if (id_name === "drop5") {
      funShow(id_name);
    } else if (id_name === "drop6") {
      funShow(id_name);
    }
  }
  
  function funShow(id) {
    document.getElementById(id).classList.toggle("show");
  }
  
  console.log("Support Page")


}


  /*inplementing search function*/
    
  function handleDebounce(){
    console.log("handleDebounce")
    const supportSearch  = document.getElementById("supportSearch").value;
    debounceFunction(searchForHelp(supportSearch),3000)
  }

  const debounceFunction = (func, delay) => {
    console.log("debounceFunction")
      let debounceTimer;
      return function() {
              clearTimeout(debounceTimer)//clearing the setTimeout delay if it is clicked again.
              debounceTimer = setTimeout(function(){
                  func(value)
              }, delay);//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
      }
  }

  function searchForHelp(value){
    console.log("searchForHelp")
    fetch(`http://localhost:8000/help?q=${value}`)
    .then((res) => res.json())
    .then((res) => {
        console.log("res =>",res)
        displaySupportResults(res);
    })
    .catch((res) =>{
      invalidMsg();
    })
  }

  function displaySupportResults(data){
    console.log("displaySupportResults")
    console.log("data.length=>",data.length === 0);
    if(data.length === 0){
      invalidMsg();
      return;
    }
    
    let supportResults  = document.getElementById("supportResults");
    let nextDiv = document.getElementById("nextDiv");
    console.log("Hello")
    console.log("supportResults=>",supportResults)
    supportResults.innerHTML = "";
    nextDiv.innerHTML = "";
    let ul = document.createElement("ul");
      data.forEach((el)=>{
        
        let li = document.createElement("li");
        li.innerHTML = el.subject;
        li.style.listStyleType="none";
        li.setAttribute("class"," p-2 text-light highlightHover")
        ul.append(li);
      })
      supportResults.setAttribute("class","resultsDiv random")
      supportResults.append(ul);
      nextDiv.innerHTML=`<br/><br/><div class="firstDivFlex reduceMargin" id="nextDiv">
          <div class="boxSupport" id="01">
              <h3 class="noShowSol headsSupp text-light displayAfter">TOP SOLUTIONS</h3>
              <h3 class="headsSupp text-light dontDisplay">CHARGE HELP</h3>
              <a class="paraSupp" href="">Price updates</a>
          </div>
          <div class="boxSupport" id="02">
              <h3 class="headsSupp text-light text-center dontDisplay">AVAILABLE PLANS</h3>
              <a class="paraSupp" href="">Start or join Family plan</a></div>
          <div class="boxSupport" id="03">
              <h3 class="headsSupp text-light text-center dontDisplay">LOGGING IN</h3>
              <a class="paraSupp" href="">Can't reset password</a></div>
          <div class="boxSupport" id="04">
              <h3 class="headsSupp text-light text-center dontDisplay">ACCOUNT SETTINGS</h3>
              <a class="paraSupp" href="">Country or region settings</a></div>
      </div><br/><br/><br/>`;
      const crossButton = document.getElementById("crossButton");
      if(crossButton.classList.contains("noCross")){
        crossButton.classList.remove("noCross");
        crossButton.classList.add("yesCross")
      }
      crossButton.addEventListener("click",function(){
          
          if(crossButton.classList.contains("yesCross")){
            crossButton.classList.remove("yesCross");
            crossButton.classList.add("noCross")
            supportResults.innerHTML = "";
            supportResults.append(nextDiv);
            const searchInp = document.getElementById("supportSearch");
            searchInp.value = "";
          }
      })
      console.log(nextDiv)
      supportResults.append(nextDiv);
      
  }

  function invalidMsg(){
    console.log("invalidMsg")
      const supportResults  = document.getElementById("supportResults");
      const nextDiv = document.getElementById("nextDiv");
      supportResults.innerHTML = "";
      nextDiv.innerHTML = "";
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      li.innerHTML = `<i>No results found. Please try another search.</i>`;
      li.setAttribute("class","ml-1 p-2 text-light");
      ul.append(li);
      ul.style.listStyleType="none";
      supportResults.append(ul);
      nextDiv.innerHTML=`<br/><div class="firstDivFlex reduceMargin" id="nextDiv">
          <div class="boxSupport" id="01">
              <h3 class="noShowSol headsSupp text-light displayAfter">TOP SOLUTIONS</h3>
              <h3 class="headsSupp text-light dontDisplay">CHARGE HELP</h3>
              <a class="paraSupp" href="">Price updates</a>
          </div>
          <div class="boxSupport" id="02">
              <h3 class="headsSupp text-light text-center dontDisplay">AVAILABLE PLANS</h3>
              <a class="paraSupp" href="">Start or join Family plan</a></div>
          <div class="boxSupport" id="03">
              <h3 class="headsSupp text-light text-center dontDisplay">LOGGING IN</h3>
              <a class="paraSupp" href="">Can't reset password</a></div>
          <div class="boxSupport" id="04">
              <h3 class="headsSupp text-light text-center dontDisplay">ACCOUNT SETTINGS</h3>
              <a class="paraSupp" href="">Country or region settings</a></div>
      </div><br/><br/>  `;
      const crossButton = document.getElementById("crossButton");
      if(crossButton.classList.contains("noCross")){
        crossButton.classList.remove("noCross");
        crossButton.classList.add("yesCross")
      }
      crossButton.addEventListener("click",function(){
          
          if(crossButton.classList.contains("yesCross")){
            crossButton.classList.remove("yesCross");
            crossButton.classList.add("noCross")
            supportResults.innerHTML = "";
            supportResults.append(nextDiv);
            const searchInp = document.getElementById("supportSearch");
            searchInp.value = "";
          }
      })
      supportResults.append(nextDiv);
  }

  function handleDebouncing() {
    let searchSupport = document.getElementById("supportSearch");
  
    searchSupport.addEventListener('input',handleDebounce)//adding an event to call function handleDebounce on input.
  }

  if (window.location.href == "http://localhost:8080/support.html") {
    handleDebouncing();
  // return navbarController();
  }
