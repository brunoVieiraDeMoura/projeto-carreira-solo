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
    const updatesInputs = document.getElementsByName("updates");
    const errorMessage = document.getElementById("error-message");
    const alertBox = document.getElementById("alert");
    const closeBtn = document.getElementById("closeBtn");
    const alertMessage = document.getElementById("alertMessage");
    const firstAlertMessage = document.getElementById("firstAlertMessage");

    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let updatesValue = "";
    for (let i = 0; i < updatesInputs.length; i++) {
      if (updatesInputs[i].checked) {
        updatesValue = updatesInputs[i].value;
        break;
      }
    }
    const textBd = `e estou querendo me inscrever para ${updatesValue} na área de `;

    if (emailRegex.test(emailInput.value)) {
      errorMessage.style.display = "none";

      // Enviar email para o usuário
      emailjs
        .send("service_5ycun3r", "template_4szox95", {
          from_name: fullnameInput.value,
          from_email: emailInput.value,
          textUser: updatesValue,
          phone: phoneInput.value,
          address: addressInput.value,
          interest: interestInput.options[interestInput.selectedIndex].text, // Pegar o texto da opção selecionada
          tipo: updatesValue, // Pega o valor da opção selecionada do radio button
        })
        .then(
          async function (response) {
            let nome = fullnameInput.value.split(" ", 1);
            // ALERT BOX
            showAlert(
              `Tudo certo, ${nome}!`,
              `Confira seu email para ${updatesValue}${" "}${
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
              setTimeout(() => {
                alertBox.style.animation = "fadeOut 1s forwards";
              }, 4000);
              setTimeout(() => {
                alertBox.style.display = "none";
              }, 5800);
            }
            function hideAlert() {
              alertBox.style.display = "none";
            }
            setTimeout(function () {}, 6000);
            // Limpar os campos após o envio
            fullnameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
            interestInput.selectedIndex = 0; // Reiniciar para a opção padrão
            updatesInputs.forEach((input) => (input.checked = false)); // Desmarcar as opções de radio button
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
              alertBox.style.background =
                "linear-gradient(135deg,rgb(83, 4, 4),rgba(129, 16, 16, 0.9),rgb(83, 2, 2))";
              alertBox.style.display = "flex";
              setTimeout(() => {
                alertBox.style.animation = "fadeOut 1s forwards";
              }, 4000);
              setTimeout(() => {
                alertBox.style.display = "none";
              }, 5000);
            }
            function hideAlert() {
              alertBox.style.display = "none";
            }
          }
        );

      // Enviar email para o Banco de dados
      emailjs
        .send("service_5ycun3r", "template_ou7cdsm", {
          from_name: fullnameInput.value,
          textBd: textBd,
          from_email: emailInput.value,
          phone: phoneInput.value,
          address: addressInput.value,
          interest: interestInput.options[interestInput.selectedIndex].text, // Pegar o texto da opção selecionada
          tipo: updatesValue, // Pega o valor da opção selecionada do radio button
        })
        .then(
          function (response) {
            // Limpar os campos após o envio
            fullnameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
            interestInput.selectedIndex = 0; // Reiniciar para a opção padrão
          },
          function (error) {
            console.log("Arquivado no banco de daddos");
          }
        );
    } else {
      errorMessage.textContent = "Por favor, insira um email válido.";
      errorMessage.style.display = "block";
    }
  });
