const chars = "awefaslhasuf3276kjsadf8jkkj#%&^Bhjghj%$$ASjknbm*%76&^BACh7*A^*&JGda%&Â5dNMBAc*&^SA";
const passLength = 10;

function getpassword() {
    let password = "";

    for (let i = 0; i < passLength; i++) {
        const rndIndex = Math.floor(Math.random() * chars.length);
        password += chars[rndIndex];
    }

    document.querySelector("#Passwords").value = password;
}

document.querySelector("#btn").addEventListener("click", getpassword);
