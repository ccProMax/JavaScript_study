btn.onclick = function() {
    localStorage.setItem("username",username["value"])
    localStorage.setItem("password",password["value"])
}
onload = function() {
    username["value"] = localStorage.getItem("username")
    password["value"] = localStorage.getItem("password")
}