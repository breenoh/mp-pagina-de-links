import profileData from "./profile.json"; // Importa o arquivo JSON contendo dados do perfil, como nome, sobrenome, links e redes sociais.

document.title = "Links de " + profileData.name + " " + profileData.lastName; // Define o título da página usando o nome e sobrenome do perfil.

window.onload = function () { // Função que será executada quando a janela (página) for completamente carregada.
  const avatarImage = document.querySelector(".card-header__profile-image"); // Seleciona o elemento de imagem de perfil usando a classe CSS.
  const name = document.querySelector(".card-header__name"); // Seleciona o elemento de nome.
  const lastName = document.querySelector(".card-header__last-name"); // Seleciona o elemento de sobrenome.
  const description = document.querySelector(".card-header__description"); // Seleciona o elemento de descrição.

  const linksList = document.querySelector(".card__links"); // Seleciona a lista onde serão exibidos os links do perfil.
  const socialLinks = document.querySelector(".card__social-links"); // Seleciona a lista onde serão exibidos os links de redes sociais.

  avatarImage.src = profileData.avatar; // Define o caminho da imagem de perfil a partir dos dados do JSON.
  avatarImage.alt = "Imagem de perfil de " + profileData.name + " " + profileData.lastName; // Define o texto alternativo da imagem de perfil.

  lastName.textContent = profileData.lastName; // Insere o sobrenome do perfil no elemento correspondente.
  name.textContent = profileData.name; // Insere o nome do perfil no elemento correspondente.
  name.appendChild(lastName); // Adiciona o sobrenome dentro do elemento de nome.

  description.textContent = profileData.description; // Insere a descrição do perfil no elemento correspondente.

  profileData.links.forEach((link) => { // Itera sobre cada link do perfil (proveniente do JSON).
    const li = document.createElement("li"); // Cria um novo elemento de lista (li).
    const a = document.createElement("a"); // Cria um novo elemento de link (a).

    a.href = link.href; // Define o href do link com o valor correspondente no JSON.
    a.textContent = link.text; // Define o texto do link com o valor correspondente no JSON.
    a.target = "_blank"; // Configura para que o link seja aberto em uma nova aba.
    li.appendChild(a); // Adiciona o link (a) dentro do item da lista (li).
    linksList.appendChild(li); // Adiciona o item da lista (li) na lista de links do perfil.
  });

  profileData.socialLinks.forEach((socialLink) => { // Itera sobre cada link de rede social do perfil (proveniente do JSON).
    const li = document.createElement("li"); // Cria um novo item de lista (li).
    const a = document.createElement("a"); // Cria um novo link (a).
    const img = document.createElement("img"); // Cria uma nova imagem (img).

    img.src = socialLink.icon; // Define o caminho do ícone da rede social a partir do JSON.
    img.alt = socialLink.name + " logo"; // Define o texto alternativo da imagem, com o nome da rede social.
    a.href = socialLink.href; // Define o href do link da rede social.
    a.target = "_blank"; // Configura para abrir a rede social em uma nova aba.

    a.appendChild(img); // Adiciona a imagem dentro do link (a).
    li.appendChild(a); // Adiciona o link (a) dentro do item da lista (li).
    socialLinks.appendChild(li); // Adiciona o item da lista (li) na lista de redes sociais.
  });
};
