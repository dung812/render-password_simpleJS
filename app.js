window.addEventListener("load", function (e) {
  const emptyStr = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "!@#$%^&*=-_";

  const form = document.querySelector(".form-function");
  const inputPassword = document.querySelector(".input"); // input password
  const btnCopy = this.document.querySelector(".copy");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let initStr = emptyStr;
    const lengthPwd = this.elements["pwdLength"].value;
    this.elements["upper"].checked ? (initStr += alphabetUpper) : "";
    this.elements["lower"].checked ? (initStr += alphabet) : "";
    this.elements["number"].checked ? (initStr += number) : "";
    this.elements["symbol"].checked ? (initStr += symbol) : "";

    inputPassword.value = renderPassword(lengthPwd, initStr);
  });

  function renderPassword(pwdLength, initStr) {
    const arrConvert = initStr === "" ? alphabet.split("") : initStr.split("");
    let result = "";

    // Trường hợp ko check ô nào, initStr sẽ là chuỗi rỗng
    if (initStr === "") {
      for (let i = 0; i < pwdLength; i++) {
        let ranNumber = Math.floor(Math.random() * arrConvert.length); // random number
        result += arrConvert[ranNumber];
      }
      return result;
    }
    for (let i = 0; i < pwdLength; i++) {
      let ranNumber = Math.floor(Math.random() * arrConvert.length); // random number
      result += arrConvert[ranNumber];
    }
    return result;
  }

  btnCopy.addEventListener("click", function (e) {
    if (inputPassword.value.length === 0) {
        alert('Please click button "Generate" to generate a password!');
    }
    else {
        inputPassword.select(); // Chọn (bôi đen) hết các giá trị bên trong input
        document.execCommand("copy"); // Copy
        alert("Password has been copied to clipboard.");
    }
  });
});

//copy button
// const copy = document.getElementById('copy');
// copy.addEventListener('click', ()=> {
//     if(password.value == ""){
//         alert("Please generate a password!");
//     }else{
//         password.select();
//         document.execCommand("copy");
//         alert("Password has been copied to clipboard.");
//     }
// });
