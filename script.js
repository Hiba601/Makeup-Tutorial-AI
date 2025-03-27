async function processImage() {
    const fileInput = document.getElementById("imageUpload");
    if (!fileInput.files[0]) {
        alert("Please upload an image!");
        return;
    }

    let formData = new FormData();
    formData.append("image", fileInput.files[0]);

    // Send image to backend for AI analysis
    let response = await fetch("https://your-backend-url.com/analyze", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    document.getElementById("result").innerHTML = `<p>${result.tutorial}</p>`;
}
