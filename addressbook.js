var buttonContainer = document.getElementById('buttonContainer');
for (var i = 65; i <= 90; i++) {
    var letter = String.fromCharCode(i);
    let button = document.createElement('button');
    button.type = "button"
    button.innerText = letter;
    button.id = letter;
    button.classList.add('letter-button');
    button.onclick = function() {
        alphaButtonClicked(button.id);
    };
    // (function closure(button) {  "closure"
    //     button.onclick = function() {
    //     alphaButtonClicked(button.id);
    //     };
    // })
    //closure(button);  //with button as var button
    buttonContainer.appendChild(button);
}
function openPopup(){
    document.getElementById("addemp-popup").style.display="flex";
}
function closePopup(){
    document.getElementById("errormsg").innerHTML=""
    document.getElementById("addemp-popup").style.display="none";
}
function clearSearchBar(){
    document.getElementById("search").value="";
    displayEmployeeDetails(employees)
}


let employees=[
    {
        firstName:"John",
        lastName:"Andrews",
        preferedName:"John Andrews",
        email:"john.a@gmail.com",
        location:"Boston",
        job:"Recruiting Expert",
        department:"Human Resources",
        skypeid:"345671"
    },
    {
        firstName:"Lea",
        lastName:"Dilallo",
        preferedName:"Lea Dilallo",
        email:"lea.d@gmail.com",
        location:"Seattle",
        job:".Net developer",
        department:"IT department",
        skypeid:"236849"
    },
    {
        firstName:"Shaun",
        lastName:"Murphy",
        preferedName:"Shaun Murphy",
        email:"shaun@gmail.com",
        location:"Seattle",
        job:"Product Manager",
        department:"IT department",
        skypeid:"346721"
    },
    {
        firstName:"Audrea",
        lastName:"Lim",
        preferedName:"Audrea Lim",
        email:"audrealim@gmail.com",
        location:"Seattle",
        job:"System Analyst",
        department:"IT department",
        skypeid:"563728"
    },
    {
        firstName:"Neil",
        lastName:"Melendez",
        preferedName:"Neil Melendez",
        email:"melendez@gmail.com",
        location:"Portland",
        job:"Data Analyst",
        department:"IT department",
        skypeid:"890123"
    },
    {
        firstName:"Aaron",
        lastName:"Glassman",
        preferedName:"Aaron Glassman",
        email:"dr.glassman@gmail.com",
        location:"Boston",
        job:"Chief Marketing Officer",
        department:"Marketing department",
        skypeid:"781234"
    },
    {
        firstName:"Radhika",
        lastName:"Murthy",
        preferedName:"Radhika Murthy",
        email:"mradhika@gmail.com",
        location:"Chicago",
        job:"Product Manager",
        department:"IT department",
        skypeid:"127801"
    },
    {
        firstName:"James",
        lastName:"Robert",
        preferedName:"James Robert",
        email:"jrobert@gmail.com",
        location:"Chicago",
        job:"Product Manager",
        department:"IT department",
        skypeid:"818132"
    },
    {
        firstName:"Michael",
        lastName:"Anderson",
        preferedName:"Michael Anderson",
        email:"amichael@gmail.com",
        location:"Portland",
        job:"Junior Software Engineer",
        department:"IT department",
        skypeid:"567183"
    },
    {
        firstName:"David",
        lastName:"Miller",
        preferedName:"David Miller",
        email:"dmiller@gmail.com",
        location:"Boston",
        job:"Marketing Analyst",
        department:"Marketing department",
        skypeid:"128904"
    }

]


// searchbar 


let searchBar=document.getElementById("search");
var searchElement=" "

let filterByElement=document.getElementById("filterby-option")
var filterByValue=filterByElement.value;
retrieveSearchElement(filterByValue)

filterByElement.addEventListener("change",function(){
    var filterByValue=filterByElement.value;
    retrieveSearchElement(filterByValue)
})


function retrieveSearchElement(filterByValue){
    searchBar.addEventListener("keypress",function(event){
        if (event.key === "Enter" || event.key === "Backspace") {
            event.preventDefault();
            let searchElement = event.target.value;
            let filterByValue = filterByElement.value;
    
            if (searchElement === "") {
                displayEmployeeDetails(employees);
            } else {
                performSearch(searchElement, filterByValue);
            }
        }
        
    })
}


function performSearch(searchElement,filterByValue){
    console.log(searchElement)
    console.log(filterByValue)
    console.log(profiles)
    let searchingElement=searchElement.toUpperCase();
    if(filterByValue=="Preferred Name" && searchingElement !=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if((employees[i].preferedName.toUpperCase()).includes(searchingElement.toString())){
                profiles.push(employees[i])
            }
        }
        displayEmployeeDetails(profiles)
    }

    if(filterByValue=="Job Title" && searchingElement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].job.toUpperCase().includes(searchingElement.toString())){
                profiles.push(employees[i])
            }
        }
        displayEmployeeDetails(profiles)
    }
    
    if(filterByValue=="Office" && searchingElement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].location.toUpperCase().includes(searchingElement.toString())){
                profiles.push(employees[i])
            }
        }
        displayEmployeeDetails(profiles)
    }

    if(filterByValue=="Department" && searchingElement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].department.toUpperCase().includes(searchingElement.toString())){
                profiles.push(employees[i])
            }
        }
        displayEmployeeDetails(profiles)
    }

    if(filterByValue=="Skype ID" && searchingElement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].skypeid .includes(searchElement)){
                profiles.push(employees[i])
            }
        }
        displayEmployeeDetails(profiles)
    }

}

//side filters

profiles=[]

departmentFilters=[]
locationFilters=[]



for (let i=0;i<employees.length;i++){
    let deptli=document.createElement('li');
    deptli.className="depart-filters";
    deptli.id=employees[i].department;
            
    
    if(!departmentFilters.includes(employees[i].department)){
        departmentFilters.push(employees[i].department);
        deptli.innerText= employees[i].department;
        deptli.addEventListener("click", handleFilterClick);
        document.getElementById("depart-filters").appendChild(deptli);
    } 
}
    
for(let i=0;i<employees.length;i++){
    let officeli=document.createElement('li');
    officeli.className="offc-filters";
    officeli.id=employees[i].location;
            
            
    if(!locationFilters.includes(employees[i].location)){
        locationFilters.push(employees[i].location);
        officeli.innerText=employees[i].location;
        officeli.addEventListener("click", handleFilterClick);
        document.getElementById("offc-filters").appendChild(officeli);
    }
}
    
function displayLessJobFilters(){
    jobTitleFilters=[]
    var jobFiltersList = document.getElementById("jobtle-filters");
    jobFiltersList.innerHTML = "";
    var maxJobFilters=6
    var flag=false
    for(let i=0;i<employees.length;i++){

        let jobli=document.createElement('li');
        jobli.className="jobtle-filters";
        jobli.id=employees[i].job;
                
        
        if(!jobTitleFilters.includes(employees[i].job)){
            jobTitleFilters.push(employees[i].job);
            if (flag || jobTitleFilters.length <= maxJobFilters) {
                jobli.innerText = employees[i].job;
                jobli.addEventListener("click", handleFilterClick);
                document.getElementById("jobtle-filters").appendChild(jobli);
            }
        }
        
    }
}
displayLessJobFilters()
function handleViewMoreButton(){
    let viewMoreBtn=document.getElementById("viewmore-btn")
    if(viewMoreBtn.innerHTML==="view more"){
        viewMoreBtn.innerText="view less"
        var jobFiltersList = document.getElementById("jobtle-filters");
        jobFiltersList.innerHTML = ""; 
        for (let i = 0; i < jobTitleFilters.length; i++) {
            let jobli = document.createElement('li');
            jobli.className = "jobtle-filters";
            jobli.id = jobTitleFilters[i];
            jobli.innerText = jobTitleFilters[i];
            jobli.addEventListener("click", handleFilterClick);
            jobFiltersList.appendChild(jobli);
        }
    }
    else{
        viewMoreBtn.innerHTML="view more"
        displayLessJobFilters()
    }
    
}
  



function handleFilterClick(event) {
    let filterId = event.target.id;
    let deptFilterElements=document.getElementsByClassName("depart-filters")
    let jobFilterElements = document.getElementsByClassName("jobtle-filters");
    let offcFilterElements=document.getElementsByClassName("offc-filters")
    

    for (let i = 0; i < deptFilterElements.length; i++) {
        deptFilterElements[i].style.backgroundColor = "";
    }
    for (let i = 0; i < jobFilterElements.length; i++) {
        jobFilterElements[i].style.backgroundColor = "";
    }
    for (let i = 0; i < offcFilterElements.length; i++) {
        offcFilterElements[i].style.backgroundColor = "";
    }

    let filterElement = document.getElementById(filterId);
    filterElement.style.backgroundColor = "#cdeaf6";
    filterElement.style.width="100%"
    filterElement.style.borderRadius="5px"
    getfilteredprofiles(filterId);
}



function getfilteredprofiles(filterId){
    let profiles=[]
    employees.forEach(emp=>{
        const location=emp.location;
        const job=emp.job;
        const department=emp.department;

        if(location.includes(filterId) || job.includes(filterId) || department.includes(filterId)){
            profiles.push(emp)
        }
    })
    displayEmployeeDetails(profiles)
}

//to remove highligting of filters
document.addEventListener("click", function(event) {
    let target = event.target;
    let isFilterElement = target.classList.contains("jobtle-filters") || target.classList.contains("offc-filters") || target.classList.contains("depart-filters");

    if (!isFilterElement) {
        let deptFilterElements=document.getElementsByClassName("depart-filters")
        let jobFilterElements = document.getElementsByClassName("jobtle-filters");
        let offcFilterElements = document.getElementsByClassName("offc-filters");

        
        for (let i = 0; i < deptFilterElements.length; i++) {
            deptFilterElements[i].style.backgroundColor = "";
        }

        for (let i = 0; i < jobFilterElements.length; i++) {
            jobFilterElements[i].style.backgroundColor = "";
        }

        
        for (let i = 0; i < offcFilterElements.length; i++) {
            offcFilterElements[i].style.backgroundColor = "";
        }
    }
});


//all-button

document.getElementById("all-btn").addEventListener("click",function(){
    displayEmployeeDetails(employees);
})


//alpha buttons

function alphaButtonClicked(buttonid){
    let clickedAlphaButton=document.getElementById(buttonid)
    clickedAlphaButton.style.border.color="white"
    let clickedAlphabet=clickedAlphaButton.innerHTML;
    let profiles=[]
    for(let i=0;i<employees.length;i++){
        if(employees[i].preferedName[0]==clickedAlphabet){
            profiles.push(employees[i])
        }
    }
    displayEmployeeDetails(profiles)
}

//to display all employees on intital load
window.addEventListener("load",function(){
    displayEmployeeDetails(employees)
})


//to display required profiles
function displayEmployeeDetails(profiles){
   if(profiles.length!=0){
    document.getElementById("profile-set").innerHTML = '';

        profiles.forEach(prof=>{
            let profile=document.createElement("div");
            profile.className="profile";
            
            let profile_img=document.createElement("img");
            profile_img.src="assets/employee.png";
        
            let emp_details=document.createElement("div");
            emp_details.className="emp-details";
        
            let jobdept_labels=document.createElement("div");
            jobdept_labels.className="jobdept-labels";
        
            let emp_name=document.createElement("b");
            let emp_job=document.createElement("p");
            let emp_dept=document.createElement("p");
            emp_name.className="emp-name";
            emp_job.className="emp-job";
            emp_dept.className="emp-dept";
            emp_name.innerHTML=prof.preferedName;
            emp_job.innerHTML=prof.job;
            emp_dept.innerHTML=prof.department;
            
            let icons=document.createElement("div")
            icons.className="icons"
            
            let phone_icon=document.createElement("i")
            phone_icon.className="fa fa-phone";
            let envelope_icon=document.createElement("i")
            envelope_icon.className="fa fa-envelope";
            let comment_icon=document.createElement("i")
            comment_icon.className="fa fa-comment";
            let star_icon=document.createElement("i")
            star_icon.className="fa fa-star";
            let heart_icon=document.createElement("i")
            heart_icon.className="fa fa-heart";
            heart_icon.onclick=function(){
                heart_icon.style.color="red"
            }
            
            profile.appendChild(profile_img) 
            profile.appendChild(emp_details)   
            emp_details.appendChild(emp_name)
            emp_details.appendChild(jobdept_labels)
            jobdept_labels.appendChild(emp_job)
            jobdept_labels.appendChild(emp_dept)
            emp_details.appendChild(icons)
            icons.appendChild(phone_icon)
            icons.appendChild(envelope_icon)
            icons.appendChild(comment_icon)
            icons.appendChild(star_icon)
            icons.appendChild(heart_icon)

            document.getElementById("profile-set").appendChild(profile)
        })
    }
    else{
        document.getElementById("profile-set").innerHTML = '';
        let noMatchText = document.createElement("p")
        noMatchText.className="noMatchText"

        document.getElementById("profile-set").appendChild(noMatchText);
        
        noMatchText.innerHTML="No Matches Found";
        noMatchText.style.display="flex"
    }        
            
}


//to add new employee
function addNewEmployeeDetails(){
    var newEmployeeFirstName=document.employeeform.fstname.value;
    var newEmployeeLastName =document.employeeform.lstname.value;
    var newEmployeeEmail=document.employeeform.email.value;
    var newEmployeeJobTitle=document.employeeform.jobtitle.value;
    var newEmployeeLocation=document.employeeform.location.value;
    var newEmployeeDepartment=document.employeeform.deptname.value;
    var newEmployeeSkypeId=document.employeeform.skypeid.value;
    var newEmployeePreferedName=newEmployeeFirstName+" "+newEmployeeLastName

    var newEmployeeDetails={
        firstName:newEmployeeFirstName,
        lastName:newEmployeeLastName,
        preferedName:newEmployeePreferedName,
        email:newEmployeeEmail,
        location:newEmployeeLocation,
        job:newEmployeeJobTitle,
        department:newEmployeeDepartment,
        skypeid:newEmployeeSkypeId
    }
    var errormsg=document.getElementById("errormsg")
    if(newEmployeeFirstName!="" || newEmployeeLastName!="" || newEmployeeEmail!="" || newEmployeeJobTitle!="" || newEmployeeLocation!="" || newEmployeeDepartment!="" || newEmployeeSkypeId!="" ){
        employees.push(newEmployeeDetails);
        closePopup();
        document.getElementById("employeeform").reset();
        errormsg.innerHTML=""
        displayNewFilters("department",newEmployeeDetails.department)
        displayNewFilters("job",newEmployeeDetails.job)
        displayNewFilters("location",newEmployeeDetails.location)
        displayEmployeeDetails(employees)
        
    }
    else{
        errormsg.innerHTML="Please enter all required details"
        errormsg.style.color="Red"
        errormsg.style.margin="0px"
    }
    
}


//updating new filters

function displayNewFilters(filterCategory, filterValue) {
    var filterListElement;
    var filterArray;
  
    switch (filterCategory) {
      case "department":
        filterListElement = document.getElementById("depart-filters");
        filterArray = departmentFilters;
        console.log(filterListElement,filterArray)
        break;
      case "location":
        filterListElement = document.getElementById("offc-filters");
        filterArray = locationFilters;
        break;
      case "job":
        filterListElement = document.getElementById("jobtle-filters");
        filterArray = jobTitleFilters;
        break;
      default:
        return; // Exit the function if an invalid filter category is provided
    }
    
    if (!filterArray.includes(filterValue) && filterListElement!="jobtle-filters") {
      filterArray.push(filterValue);
      var filterListItem = document.createElement("li");
      filterListItem.className = filterCategory + "-filter";
      filterListItem.id = filterValue;
      filterListItem.innerText = filterValue;
      filterListItem.addEventListener("click", handleFilterClick);
      filterListElement.appendChild(filterListItem);
    }
    else{
        displayLessJobFilters()
    }
  }