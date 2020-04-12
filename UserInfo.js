_db.collection("userList").get()
.then((snapshot)=>{
    snapshot.docs.forEach(doc=> print_user.printUI(doc.data(),doc.id))
})



class PrintUser {

printUI(data,id){

const cardRow = document.querySelector(".card-row")
cardRow.innerHTML += `<div class ="card" data-id = ${id}>
<div class = "card-content">
<span class="card-title activator grey-text text-darken-4">User Information<i class="material-icons right">more_vert</i></span>
<p>${data.userName}</p>
<p>${data.email}</p>
<p>${data.designation}</p>
</div>
<div class="card-reveal">
<span class="card-title grey-text text-darken-4">More Information<i class="material-icons right">close</i></span>
<p>Company: ${data.gender}</p>
<p>Company: ${data.company}</p>
<p>City: ${data.city}</p>
<p>State: ${data.state}</p>
<p>Learning Distance:  ${data.learningDistance}</p>
<p>Contact Number:  ${data.ph_number}</p>
</div>
</div>
</div>`


}



}
const print_user = new PrintUser()


