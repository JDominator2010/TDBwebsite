async function loadImagesFromRepo(directory = "images", subdirs = true ) {
    const username = "jdominator2010";  // Replace with your GitHub username
    const repo = "TDBwebsite";  // Replace with your repository name
    const branch = "main";  // Replace with your branch name
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${directory}?ref=${branch}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const files = await response.json();
        const imageContainer = document.getElementById("photo-gallery");
        const exclude = ["facebook.png", "instagram.png", "linkedin.png", "twitter.png", "youtube.png"];

        for (const file of files) {
            if (file.type === "file" && file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i) && !exclude.includes(file.name)) {
                // Create an img element for each image
                const img = document.createElement("img");
                img.src = file.download_url;
                img.alt = file.name;
                imageContainer.appendChild(img);
            } else if (file.type === "dir" && subdirs) {
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
