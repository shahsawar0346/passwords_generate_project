const chars = "awefaslhasuf3276kjsadf8jkkj#%&^Bhjghj%$$ASjknbm*%76&^BACh7*A^*&JGda%&Â5dNMBAc*&^SA";
let password = "";
const passLength = 10;

function getpassword() {

    for (let i = 0; i < passLength; i++) {
        const rndIndex = Math.floor(Math.random() * chars.length);
        password += chars.substring(rndIndex,rndIndex +-3);
    }

    document.querySelector("#Passwords").value = password;
    
}

document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("#Passwords").value = "";
})
