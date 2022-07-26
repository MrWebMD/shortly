let resultURLNode;

const main = () => {

  resultURLNode = document.createTextNode("");

  document.querySelector(".embedLink").appendChild(resultURLNode);

  resultURLNode.nodeValue = "No urls shortened yet";

  document.shortURLForm.onsubmit = shortURLFormSubmitHandler;

};


const shortURLFormSubmitHandler = (event) => {
  event.preventDefault();

  let { redirect } = event.target.elements;

  let shortURLData = {
    redirect: redirect.value,
  };

  createShortURL(shortURLData)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      
      if(res.status !== 200) {
        resultURLNode.nodeValue = res.message;
      } else {
        let resultURL = `http://${location.host}/${res.shortKey}`
        resultURLNode.nodeValue = `Here's your shortly URL! ${resultURL}`
      }
    });

};

const createShortURL = (shortURLData) =>
  fetch("/api/shortURL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shortURLData),
  });

window.onload = main;
