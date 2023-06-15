
function openpopup(){
    document.getElementById("addemp-popup").style.display="flex";
}
function closepopup(){
    document.getElementById("addemp-popup").style.display="none";
}
function clearsearchbar(){
    document.getElementById("search").value="";
}


let employees=[]
const emp1={
    firstname:"John",
    lastname:"Andrews",
    preferedname:"John Andrews",
    email:"john.a@gmail.com",
    location:"Boston",
    job:"Recruiting Expert",
    department:"Human Resources",
    skypeid:"345671"
}
employees.push(emp1);
const emp2={
    firstname:"Lea",
    lastname:"Dileali",
    preferedname:"Lea Dileali",
    email:"lea.d@gmail.com",
    location:"Seattle",
    job:".Net developer",
    department:"IT department",
    skypeid:"236849"
}
employees.push(emp2);
const emp3={
    firstname:"Shaun",
    lastname:"Murphy",
    preferedname:"Shaun Murphy",
    email:"shaun@gmail.com",
    location:"Seattle",
    job:"Product Manager",
    department:"IT department",
    skypeid:"346721"
}
employees.push(emp3);
const emp4={
    firstname:"Audrea",
    lastname:"Lim",
    preferedname:"Audrea Lim",
    email:"audrealim@gmail.com",
    location:"Seattle",
    job:"System Analyst",
    department:"IT department",
    skypeid:"563728"
}
employees.push(emp4);
const emp5={
    firstname:"Neil",
    lastname:"Melendez",
    preferedname:"Neil Melendez",
    email:"melendez@gmail.com",
    location:"Portland",
    job:"Data Analyst",
    department:"IT department",
    skypeid:"890123"
}
employees.push(emp5);
const emp6={
    firstname:"Aaron",
    lastname:"Glassman",
    preferedname:"Aaron Glassman",
    email:"dr.glassman@gmail.com",
    location:"Boston",
    job:"Chief Marketing Officer",
    department:"Marketing department",
    skypeid:"781234"
}
employees.push(emp6);
const emp7={
    firstname:"Radhika",
    lastname:"Murthy",
    preferedname:"Radhika Murthy",
    email:"mradhika@gmail.com",
    location:"Chicago",
    job:"Product Manager",
    department:"IT department",
    skypeid:"127801"
}
employees.push(emp7);
const emp8={
    firstname:"James",
    lastname:"Robert",
    preferedname:"James Robert",
    email:"jrobert@gmail.com",
    location:"Chicago",
    job:"Product Manager",
    department:"IT department",
    skypeid:"818132"
}
employees.push(emp8);
const emp9={
    firstname:"Michael",
    lastname:"Anderson",
    preferedname:"Michael Anderson",
    email:"amichael@gmail.com",
    location:"Portland",
    job:"Junior Software Engineer",
    department:"IT department",
    skypeid:"567183"
}
employees.push(emp9);
const emp10={
    firstname:"David",
    lastname:"Miller",
    preferedname:"David Miller",
    email:"dmiller@gmail.com",
    location:"Boston",
    job:"Marketing Analyst",
    department:"Marketing department",
    skypeid:"128904"
}
employees.push(emp10);


console.log(document.getElementById("profile-set").innerHTML)


// searchbar 

let preferednames=[]
for(let i=0;i<employees.length;i++){
    preferednames.push(employees[i].preferedname)
}
let jobtitles=[]
for(let i=0;i<employees.length;i++){
    jobtitles.push(employees[i].job)
}
let departments=[]
for(let i=0;i<employees.length;i++){
    departments.push(employees[i].department)
}
let offices=[]
for(let i=0;i<employees.length;i++){
    offices.push(employees[i].location)
}
let skypeids=[]
for(let i=0;i<employees.length;i++){
    skypeids.push(employees[i].skypeid)
}


let searchbar=document.getElementById("search");
var searchelement=" "

let filterbyelement=document.getElementById("filterby-option")


filterbyelement.addEventListener("change",function(){
    var filterbyvalue=filterbyelement.value;
    retrievesearchelement(filterbyvalue)
})


function retrievesearchelement(filterbyvalue){
    searchbar.addEventListener("input",function(event){
        event.preventDefault()
        searchelement=event.target.value;
        performsearch(searchelement,filterbyvalue)
    })
}


function performsearch(searchelement,filterbyvalue){
    console.log(searchelement)
    console.log(filterbyvalue)
    console.log(profiles)
    let searchingelement=searchelement.toUpperCase();
    if(filterbyvalue=="Preferred Name" && searchingelement !=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if((employees[i].preferedname.toUpperCase()).includes(searchingelement.toString())){
                profiles.push(employees[i])
            }
        }
        displayemployeedetails(profiles)
    }

    if(filterbyvalue=="Job Title" && searchingelement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].job.toUpperCase().includes(searchingelement.toString())){
                profiles.push(employees[i])
            }
        }
        displayemployeedetails(profiles)
    }
    
    if(filterbyvalue=="Office" && searchingelement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].location.toUpperCase().includes(searchingelement.toString())){
                profiles.push(employees[i])
            }
        }
        displayemployeedetails(profiles)
    }

    if(filterbyvalue=="Department" && searchingelement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].department.toUpperCase().includes(searchingelement.toString())){
                profiles.push(employees[i])
            }
        }
        displayemployeedetails(profiles)
    }

    if(filterbyvalue=="Skype ID" && searchingelement!=""){
        let profiles=[]
        for(let i=0;i<employees.length;i++){
            if(employees[i].skypeid .includes(searchelement)){
                profiles.push(employees[i])
            }
        }
        displayemployeedetails(profiles)
    }

}

//side filters

profiles=[]

departmentfilters=[]
for (let i=0;i<employees.length;i++){
    let deptli=document.createElement('li');
    deptli.className="dept-filter";
    deptli.id=employees[i].department;
    

    if(!departmentfilters.includes(employees[i].department)){
        departmentfilters.push(employees[i].department);
        deptli.innerText= employees[i].department;
        deptli.addEventListener("click", handleFilterClick);
        document.getElementById("depart-filters").appendChild(deptli);
    }  
}

locationfilters=[]
for(let i=0;i<employees.length;i++){
    let officeli=document.createElement('li');
    officeli.className="off-filters";
    officeli.id=employees[i].location;
    
    
    if(!locationfilters.includes(employees[i].location)){
        locationfilters.push(employees[i].location);
        officeli.innerText=employees[i].location;
        officeli.addEventListener("click", handleFilterClick);
        document.getElementById("offc-filters").appendChild(officeli);
    }
}

jobtitlefilters=[]
for(let i=0;i<employees.length;i++){
    let jobli=document.createElement('li');
    jobli.className="jobtle-filters";
    jobli.id=employees[i].job;
    

    if(!jobtitlefilters.includes(employees[i].job)){
        jobtitlefilters.push(employees[i].job);
        jobli.innerText=employees[i].job;
        jobli.addEventListener("click", handleFilterClick);
        document.getElementById("jobtle-filters").appendChild(jobli);
    }

}

function handleFilterClick(event) {
    const filter = event.target.id;
    getfilteredprofiles(filter)
}

function getfilteredprofiles(filterid){
    let profiles=[]
    employees.forEach(emp=>{
        const location=emp.location;
        const job=emp.job;
        const department=emp.department;

        if(location.includes(filterid) || job.includes(filterid) || department.includes(filterid)){
            profiles.push(emp)
        }
    })
    displayemployeedetails(profiles)
}

//all-employees display

document.getElementById("all-btn").addEventListener("click",function(){
    displayemployeedetails(employees);
})


//alpha buttons

function handleclickedbutton(buttonid){
    let clickedAlphaButton=document.getElementById(buttonid).innerHTML;
    let profiles=[]
    for(let i=0;i<employees.length;i++){
        if(employees[i].preferedname[0]==clickedAlphaButton){
            profiles.push(employees[i])
        }
    }
    displayemployeedetails(profiles)
}


function displayemployeedetails(profiles){

    document.getElementById("profile-set").innerHTML = '';
        profiles.forEach(prof=>{
            let profile=document.createElement("div");
            profile.className="profile";
            
            let profile_img=document.createElement("img");
            profile_img.src="assets/emp1.png";
        
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
            emp_name.innerHTML=prof.preferedname;
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
            console.log(document.getElementById("profile-set").innerHTML==null)
        })
              
            
}


function formvalidation(){
    var firstName=document.employeeform.fstname.value;
    var lastName =document.employeeform.lstname.value;
    var email=document.employeeform.email.value;
    var jobTitle=document.employeeform.jobtitle.value;
    var location=document.employeeform.location.value;
    var department=document.employeeform.deptname.value;
    var skypeId=document.employeeform.skypeid.value;

    if(firstName==""){
        document.getElementById("fstnamelbl").style.color="red";
        document.getElementById("fstnamelbl").innerHTML="Please enter FirstName *";
    }
    if(lastName==""){
        document.getElementById("lastnamelbl").style.color="red";
        document.getElementById("lastnamelbl").innerHTML="Please enter LastName *";
    }
    if(email==""){
        document.getElementById("emaillbl").style.color="red";
        document.getElementById("emaillbl").innerHTML="Please enter Email *";
    }
    if(jobTitle==""){
        document.getElementById("jobtitlelbl").style.color="red";
        document.getElementById("jobtitlelbl").innerHTML="Please enter Job Title *";
    }
    if(location==""){
        document.getElementById("offclbl").style.color="red";
        document.getElementById("offclbl").innerHTML="Please enter Office *";
    }
    if(department==""){
        document.getElementById("deptlbl").style.color="red";
        document.getElementById("deptlbl").innerHTML="Please enter Department *";
    }
    if(skypeId==""){
        document.getElementById("skypelbl").style.color="red";
        document.getElementById("skypelbl").innerHTML="Please enter Skype Id *";
    }
}