const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "female1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const flex = document.querySelector(".flex")

function cicloAddMembers() {
  for ( let i = 1; i < teamMembers.length; i++){
    let element = teamMembers [i]

    flex.innerHTML += `
    <div class="flex">
        <div class="flex">
            <figure>
                <img height="90px" src=".img/${element.img}" alt="${element.name}">
            </figure>
            <div class="flex flex-column">
                <h5>${element.name}</h5>
                <span>${element.role}</span>
                <span>${element.email}</span>
            </div>
        </div>
    </div>
     `
     
  
  }




}

cicloAddMembers()