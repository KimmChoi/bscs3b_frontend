//console.log(fetch('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591308626068456188%2F&psig=AOvVaw3tll0CMW1ldFel2LONkwy2&ust=1731569169781000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDBkobk2IkDFQAAAAAdAAAAABAE')
//.then(reponse =>{
//    console.log(reponse)
//    return response.blob()
//})
//.then(blob=>{
//    console.log(blob)
//    document.querySelector('#myImage').src=URL.createObjectURL(blob)
//
//})
//.catch(error =>{
//    console.log(error)
//}))






const content = document.querySelector("#content")

sindow.addEventListener("load", () =>{
    getUsers();
})


function getUsers(){

    let html=""

    fetch("http://localhost:5000/api/members",{mode: "cors"})//cross origin
    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((data)=>{
        data.forEach((element)=>{
            html += `<li> ${element.first_name} ${element.first_name} </li>`
        })
        content.innerHTML = html
    })

    .catch((error) =>{
        console.log(error)
    })

}

