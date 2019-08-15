var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

btn.addEventListener("click", function() {
  let c = msg.value.toLowerCase();
  let reply = "";
  if (c.match("hello")) {
    reply = "hello there !";
  } else if (c.match("sing for me")) {
    reply = "Sorry I cant sing";
  } else if (c.match("your age?")) {
    reply = "My age 34 years old";
  } else if (c.match("where do you live?")) {
    reply = " I live in Dhaka city";
  } else if (c.match("your profession?")) {
    reply = "web developer and designer";
  } else if (c.match("favourite movie?")) {
    reply = "Cast Away, Titanic, lord of the rings";
  } else if (c.match("your hobby?")) {
    reply = "Computer programming";
  } else if (c.match("your country?")) {
    reply = "Bangladesh";
  } else {
    reply = "Please try again";
  }
  result.innerHTML = reply;
  var voice = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(voice);
});
