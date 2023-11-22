const cards = document.querySelector(".cards");

const json = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "data.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.addEventListener("load", () => {
    const people = JSON.parse(request.response);
    people.forEach((persons) => {
      const person = document.createElement("div");
      person.setAttribute("class", "person-card");
      person.innerHTML = `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap6CR4Ge_5Wri3xUZxaibeNZsgJDSCwn7bw&usqp=CAU" alt="">
    <h4>NAME:${persons.name}</h4>;
    <span>NAME:${persons.age}</span>
    `;
    cards.appendChild(person);  
    });
  });
};
json ()

const newRequest = new XMLHttpRequest();
newRequest.open("GET", "data.json");
newRequest.setRequestHeader('Content-type', "application/json")
newRequest.send()
newRequest.addEventListener("load", () => {
    const contend = JSON.parse(newRequest.response);
    console.log(contend);
})