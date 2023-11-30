//your JS code here. If required.
async function showMessage() {
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value, 10);

  // Wait for the specified delay using async/await
  await new Promise(resolve => setTimeout(resolve, delayInput));

  // Display the text in the output div
  document.getElementById("output").innerText = textInput;
}

document.getElementById("btn").addEventListener("click", showMessage);
