// script.js - Validação de formulário (cadastro.html)

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio se houver erro

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const data = document.getElementById("data").value;
    const endereco = document.getElementById("endereco").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    // Expressões regulares simples para validar dados
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}\-\d{4}$/;
    const cepRegex = /^\d{5}\-\d{3}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !cpf || !telefone || !data || !endereco || !cep || !cidade || !estado) {
      alert("⚠️ Todos os campos são obrigatórios!");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("❌ E-mail inválido!");
      return;
    }

    if (!cpfRegex.test(cpf)) {
      alert("❌ CPF inválido! Use o formato 000.000.000-00");
      return;
    }

    if (!telefoneRegex.test(telefone)) {
      alert("❌ Telefone inválido! Use o formato (11) 99999-9999");
      return;
    }

    if (!cepRegex.test(cep)) {
      alert("❌ CEP inválido! Use o formato 00000-000");
      return;
    }

    alert("✅ Cadastro realizado com sucesso!");
    form.reset();
  });
});
