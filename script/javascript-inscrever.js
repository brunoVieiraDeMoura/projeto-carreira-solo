// scripts.js
// Inicialize o EmailJS
emailjs.init("MhbiGAWhPPkAT_asN"); // Substitua "YOUR_USER_ID" pelo seu ID de usuário do EmailJS

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");
    const interestInput = document.getElementById("interest");
    const expectationsInput = document.getElementById("expectations");
    const errorMessage = document.getElementById("error-message");
    const textBd = "e estou querendo me inscrever no curso de ";
    const textUser = "se profissionalizar na área de ";
    const alertBox = document.getElementById("alert");
    const closeBtn = document.getElementById("closeBtn");
    const alertMessage = document.getElementById("alertMessage");
    const firstAlertMessage = document.getElementById("firstAlertMessage");

    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
      errorMessage.style.display = "none";

      // Enviar email para o Usuário avisando sucesso
      emailjs
        .send("service_5ycun3r", "template_4szox95", {
          from_name: fullnameInput.value,
          from_email: emailInput.value,
          textUser: textUser,
          phone: phoneInput.value,
          address: addressInput.value,
          interest: interestInput.options[interestInput.selectedIndex].text, // Pegar o texto da opção selecionada
          expectations: expectationsInput.value,
        })
        .then(
          function (response) {
            let nome = fullnameInput.value.split(" ", 1);
            // ALERT BOX
            showAlert(
              `Tudo certo, ${nome}!`,
              `Confira seu email para a vaga de ${
                interestInput.options[interestInput.selectedIndex].text
              }.`
            );
            closeBtn.addEventListener("click", function () {
              hideAlert();
            });
            function showAlert(fmessage, message) {
              firstAlertMessage.textContent = fmessage;
              alertMessage.textContent = message;
              alertBox.style.display = "flex";
              setTimeout(function () {
                hideAlert();
              }, 5000);
            }
            function hideAlert() {
              alertBox.style.display = "none";
            }

            // Limpar os campos após o envio
            fullnameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
            interestInput.selectedIndex = 0; // Reiniciar para a opção padrão
            expectationsInput.value = "";
          },
          function (error) {
            let nome = fullnameInput.value.split(" ", 1);
            showAlert(
              `Algo deu errado, ${nome}!`,
              `Tente enviar o email novamente.`
            );
            closeBtn.addEventListener("click", function () {
              hideAlert();
            });
            function showAlert(fmessage, message) {
              firstAlertMessage.textContent = fmessage;
              alertMessage.textContent = message;
              alertBox.style.background = "red";
              alertBox.style.display = "flex";
              setTimeout(function () {
                hideAlert();
              }, 3000);
            }
            function hideAlert() {
              alertBox.style.display = "none";
            }
          }
        );

      // Enviar email para o time, com o registro
      emailjs
        .send("service_5ycun3r", "template_ou7cdsm", {
          from_name: fullnameInput.value,
          textBd: textBd,
          from_email: emailInput.value,
          phone: phoneInput.value,
          address: addressInput.value,
          interest: interestInput.options[interestInput.selectedIndex].text, // Pegar o texto da opção selecionada
          expectations: expectationsInput.value,
        })
        .then(
          function (response) {
            // Limpar os campos após o envio
            fullnameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
            interestInput.selectedIndex = 0; // Reiniciar para a opção padrão
            expectationsInput.value = "";
          },
          function (error) {
            console.log("email enviado ao banco de dados com sucesso.");
          }
        );
    } else {
      errorMessage.textContent = "Por favor, insira um email válido.";
      errorMessage.style.display = "block";
    }
  });
