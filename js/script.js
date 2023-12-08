// Relacionar cada INPUT do formulário com uma variável constante referencial (que vai referenciar o elemento no javascript);

const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const title = document.getElementById("title");
const message = document.getElementById("message");

// Adicionar ao formulário um evento do tipo "submit", em seu comportamento padrão, para validar todo o formulário no momento do seu envio

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

// Criar as funções responsáveis por tirarem o foco do input

fullName.addEventListener("blur", () => {
  checkInputFullName();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})

title.addEventListener("blur", () => {
  checkInputTitle();
})

message.addEventListener("blur", () => {
  checkInputMessage();
})

// Criar as funções responsáveis pela validação dos inputs do formulário

  // Checar o input "fullName"
function checkInputFullName() {
  const fullNameValue = fullName.value;

  if(fullNameValue === "") {
    errorInput(fullName, "Insira seu nome completo.");
  }else if(fullNameValue.length < 8){
    errorInput(fullName, "O nome completo deve conter no mínimo 8 caracteres.");
  }else{
    const formItem = fullName.parentElement;
    formItem.className = "form-content";
  }
}

  // Checar o input "email"
function checkInputEmail() {
  const emailValue = email.value;

  if(emailValue === "") {
    errorInput(email, "Insira um email.");
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

  // Checar o input "title"

function checkInputTitle() {
  const titleValue = title.value;

  if(titleValue === "") {
    errorInput(title, "Insira um assunto.");
  }else if(titleValue.length > 30){
    errorInput(title, "O título deve conter no máximo 30 caracteres.");
  }else{
    const formItem = title.parentElement;
    formItem.className = "form-content";
  }
}

  // Checar o input "message"
function checkInputMessage() {
  const messageValue = message.value;

  if(messageValue === "") {
    errorInput(message, "Insira uma mensagem.");
  }else if(messageValue.length < 10){
    errorInput(message, "A mensagem deve conter no mínimo 10 caracteres.");
  }else{
    const formItem = message.parentElement;
    formItem.className = "form-content";
  }
}

// Criar a função responsável pela validação do formulário
function checkForm() {
  checkInputFullName();
  checkInputEmail();
  checkInputTitle();
  checkInputMessage();


  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content";
  })

  if(isValid) {
    alert("MENSAGEM ENVIADA COM SUCESSO!");
    form.reset(); // resetar o formulário após o envio
  }
}


// Mostrar mensagem de erro, caso haja alguma invalidação no input

function errorInput(input, message) { // (variável referencial do input, "mensagem" a ser mostrada)
  const formItem = input.parentElement; // formItem: vai referenciar o elemento pai em que o input está englobado
  const errorMessage = formItem.querySelector("a"); // errorMessage: vai referenciar a tag 'a' do "formItem" 
  
  errorMessage.innerText = message; // o texto que estiver dentro de "errorMessage" se tornará o que for passado como parâmetro para "message", argumento da função atual; 

  formItem.className = "form-content error"; // vai alterar a "class" do "formItem" para "form-content error";
}


