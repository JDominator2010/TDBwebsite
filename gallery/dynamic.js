async function loadImagesFromRepo(directory = "images") {
    const username = "jdominator2010";  // Replace with your GitHub username
    const repo = "TDBwebsite";  // Replace with your repository name
    const branch = "main";  // Replace with your branch name
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${directory}?ref=${branch}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const files = await response.json();
        const imageContainer = document.getElementById("photo-gallery");

        for (const file of files) {
            if (file.type === "file" && file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                // Create an img element for each image
                const img = document.createElement("img");
                img.src = file.download_url;
                img.alt = file.name;
                img.style.width = "200px";
                img.style.margin = "10px";
                imageContainer.appendChild(img);
            } else if (file.type === "dir") {
                // Recursively fetch images from subdirectory
                await loadImagesFromRepo(file.path);
            }
        }
    } catch (error) {
        console.error("Error loading images:", error);
    }
}

// Call function when page loads
document.addEventListener("DOMContentLoaded", () => loadImagesFromRepo());
