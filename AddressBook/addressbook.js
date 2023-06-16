
var buttonContainer = document.getElementById('buttonContainer');
for (var i = 65; i <= 90; i++) {
    var letter = String.fromCharCode(i);
    var button = document.createElement('button');
    button.type = "button"
    button.innerText = letter;
    button.id = letter;
    button.classList.add('letter-button');
    (function(button) {
        button.onclick = function() {
        alphaButtonClicked(button.id);
        };
    })(button);
    buttonContainer.appendChild(button);
    
}

function openPopup(){
    document.getElementById("addemp-popup").style.display="flex";
}
function closePopup(){
    document.getElementById("addemp-popup").style.display="none";
}
function clearSearchBar(){
    document.getElementById("search").value="";
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
        lastName:"Dileali",
        preferedName:"Lea Dileali",
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


filterByElement.addEventListener("change",function(){
    var filterByValue=filterByElement.value;
    retrieveSearchElement(filterByValue)
})


function retrieveSearchElement(filterbyvalue){
    searchBar.addEventListener("input",function(event){
        event.preventDefault()
        searchElement=event.target.value;
        performSearch(searchElement,filterByValue)
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
for (let i=0;i<employees.length;i++){
    let deptli=document.createElement('li');
    deptli.className="dept-filter";
    deptli.id=employees[i].department;
    

    if(!departmentFilters.includes(employees[i].department)){
        departmentFilters.push(employees[i].department);
        deptli.innerText= employees[i].department;
        deptli.addEventListener("click", handleFilterClick);
        document.getElementById("depart-filters").appendChild(deptli);
    }  
}

locationFilters=[]
for(let i=0;i<employees.length;i++){
    let officeli=document.createElement('li');
    officeli.className="off-filters";
    officeli.id=employees[i].location;
    
    
    if(!locationFilters.includes(employees[i].location)){
        locationFilters.push(employees[i].location);
        officeli.innerText=employees[i].location;
        officeli.addEventListener("click", handleFilterClick);
        document.getElementById("offc-filters").appendChild(officeli);
    }
}

jobTitleFilters=[]
for(let i=0;i<employees.length;i++){
    let jobli=document.createElement('li');
    jobli.className="jobtle-filters";
    jobli.id=employees[i].job;
    

    if(!jobTitleFilters.includes(employees[i].job)){
        jobTitleFilters.push(employees[i].job);
        jobli.innerText=employees[i].job;
        jobli.addEventListener("click", handleFilterClick);
        document.getElementById("jobtle-filters").appendChild(jobli);
    }

}

function handleFilterClick(event) {
    const filterId = event.target.id;
    getfilteredprofiles(filterId)
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

//all-employees display

document.getElementById("all-btn").addEventListener("click",function(){
    displayEmployeeDetails(employees);
})


//alpha buttons

function alphaButtonClicked(buttonid){
    let clickedAlphaButton=document.getElementById(buttonid).innerHTML;
    let profiles=[]
    for(let i=0;i<employees.length;i++){
        if(employees[i].preferedName[0]==clickedAlphaButton){
            profiles.push(employees[i])
        }
    }
    displayEmployeeDetails(profiles)
}


function displayEmployeeDetails(profiles){

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
            let emp_job=document.createElement("label");
            let emp_dept=document.createElement("label");
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


function formValidation(){
    var firstName=document.employeeform.fstname.value;
    var lastName =document.employeeform.lstname.value;
    var email=document.employeeform.email.value;
    var jobTitle=document.employeeform.jobtitle.value;
    var location=document.employeeform.location.value;
    var department=document.employeeform.deptname.value;
    var skypeId=document.employeeform.skypeid.value;

    // if(firstName==""){
    //     document.getElementById("fstnamelbl").style.color="red";
    //     document.getElementById("fstnamelbl").innerHTML="Please enter FirstName *";
    // }
    // if(lastName==""){
    //     document.getElementById("lastnamelbl").style.color="red";
    //     document.getElementById("lastnamelbl").innerHTML="Please enter LastName *";
    // }
    // if(email==""){
    //     document.getElementById("emaillbl").style.color="red";
    //     document.getElementById("emaillbl").innerHTML="Please enter Email *";
    // }
    // if(jobTitle==""){
    //     document.getElementById("jobtitlelbl").style.color="red";
    //     document.getElementById("jobtitlelbl").innerHTML="Please enter Job Title *";
    // }
    // if(location==""){
    //     document.getElementById("offclbl").style.color="red";
    //     document.getElementById("offclbl").innerHTML="Please enter Office *";
    // }
    // if(department==""){
    //     document.getElementById("deptlbl").style.color="red";
    //     document.getElementById("deptlbl").innerHTML="Please enter Department *";
    // }
    // if(skypeId==""){
    //     document.getElementById("skypelbl").style.color="red";
    //     document.getElementById("skypelbl").innerHTML="Please enter Skype Id *";
    // }


}