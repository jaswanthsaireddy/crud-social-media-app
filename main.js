 let form = document.getElementById("form")
 let userInput = document.getElementById("input")
 let message = document.getElementById("msg")
 let posts = document.getElementById("posts")



 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button is clicked");
    formvalidation();
 });


 let formvalidation = ()=>{
    if(userInput.value === ""){
        message.innerHTML = "Post can be blank"
    }else{
        message.innerHTML = ""
        acceptData();
    }
};

let userData = {};

let acceptData = () => {
    userData["text"] = userInput.value;
    console.log(userData);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${userData.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>   
    `;
    userInput.value = ""
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}
let editPost = (e) => {
    userInput.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove();
    
}

