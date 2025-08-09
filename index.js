
fetch("assets/resume.json").then(response => response.json()).then(
  data => {
    document.getElementById("nameTag").innerHTML = data.name;
    data.desp.map(item => {
      document.getElementById("roles").innerHTML += item + '<br>'
    });
    document.getElementById("aboutCard").innerHTML = data.aboutMe;
    data.workExp.map(item => {
      document.getElementById("works").innerHTML += `
        <p>
          ${item.title}<br>
          ${item.subtitle}<br>
          ${item.descp}
        </p>`;
    });
    data.skills.map(item => {

      var card = document.createElement('div');
      card.className = "row";
      card.style.width = "360px";

      var icon = document.createElement('div');
      icon.innerHTML = `
        <div class="container col">
          <img src="${item.icon}" class="img-fluid rounded"/>
        </div>
      `

      var cardText = document.createElement('div');
      cardText.innerHTML = `
        <div class="container row">
          <h5>${item.name}</h5><br>
          <code>${item.desp}</code>
        </div>
      `;

      card.append(icon);
      card.append(cardText);
      document.getElementById('skills').append(card);
    });

    document.getElementById('email').innerHTML = `<code>${data.contact.email}</code>`
    document.getElementById('email').setAttribute('href', "mailto:" + data.contact.email);

    document.getElementById('github').innerHTML = `<code>GitHub@${data.contact.github}</code>`
    document.getElementById('github').setAttribute('href', "https://github.com/" + data.contact.github);

    document.getElementById('whatsapp').innerHTML = `<code>${data.contact.whatsapp}</code>`
    document.getElementById('whatsapp').setAttribute('href', "https://wa.me/" + data.contact.whatsapp);

    document.getElementById('linkedin').innerHTML = `<code>${data.contact.linkedin}</code>`;
    document.getElementById('linkedin').setAttribute('href', data.contact.linkedin);
  }
)
