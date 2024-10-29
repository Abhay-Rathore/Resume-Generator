let addNewWeNode=()=>
{
 let node=document.createElement("textarea");
 node.classList.add("form-control");
 node.classList.add("weField");
 node.classList.add("mt-2")
 node.setAttribute("rows","3");
 node.setAttribute("placeholder","Enter here");
 let webtn=document.getElementById("weAddButton");
 let weField=document.getElementById("weField");
 weField.insertBefore(node,webtn);
}
let addNewAqNode=()=>
    {
     let node=document.createElement("textarea");
     node.classList.add("form-control");
     node.classList.add("aqField");
     node.classList.add("mt-2")
     node.setAttribute("rows","3");
     node.setAttribute("placeholder","Enter here");
     let aqbtn=document.getElementById("aqAddButton");
     let aqField=document.getElementById("aqField");
     aqField.insertBefore(node,aqbtn);
    }

// Generate Resume

let Generate=()=>
{
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML=nameField;
    let contactField=document.getElementById("contactField").value;
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;
    let addressField=document.getElementById("addressField").value;
    let addressT=document.getElementById("addressT");
    addressT.innerHTML=addressField;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    let s="";
    for(let i of document.getElementsByClassName("weField"))
    {
       s=s+`<li>${i.value}</li>`;
    }
    document.getElementById("weT").innerHTML=s;
    let str="";
    for(let j of document.getElementsByClassName("aqField"))
    {
       str+=`<li>${j.value}</li>`;
       console.log(j.value);
    }
    document.getElementById("aqT").innerHTML=str;
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>
    {
        document.getElementById("imgT").src=reader.result;
    }
    document.getElementById("resumeForm").style.display="none";
    document.getElementById("resume-template").style.display="block";
}

let print=()=>
{
    document.getElementById("printBtn").style.display="none";
    window.print();
}