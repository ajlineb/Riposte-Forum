const userEl = document.getElementById("user-id");
async function getUser(){
    const response = await fetch('/session');
    const jsonRes = await response.json();
    console.log("From main page script");
    console.log(jsonRes.username);
    userEl.innerHTML = jsonRes.username;
}
getUser();