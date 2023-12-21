document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const statusText = document.getElementById("statusText");

    toggleSwitch.addEventListener("change", function() {
        if (toggleSwitch.checked) {
            statusText.innerText = "ON";
            statusText.style.color = "blue";
        } else {
            statusText.innerText = "OFF";
            statusText.style.color = "red";
        }
    });
});
