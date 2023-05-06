
const baseurl="http://localhost:8080"
const butt=document.getElementById("log")
butt.addEventListener("click",(e)=>{
    e.preventDefault()

    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value

    const payload={
        email,password
    };
    fetch(`${baseurl}/users/login`,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(payload),
})
.then((res) => res.json())
.then(res=>{
    if(res.msg=="Login Successful"){
      localStorage.setItem("token",res.token)
      alert ("Login success")
      window.location.href = "index.html"
    }
    else {
      alert ("Wrong Credentials")
    }
}
)
  .catch((err) => console.log(err))

})