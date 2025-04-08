

function display() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;
    alert(`name :${name}`);
    alert(`email :${email}`);
    alert(`gender :${gender}`);
    alert(`country :${country}`);
    console.log(password);
}

function getSkill(){
    let check = document.querySelectorAll('.chbox:checked');
    const values = Array.from(check).map(ch => ch.value);
    alert("Skills: " + values.join(", "));
}