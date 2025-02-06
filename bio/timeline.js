const summaries = [
  {
    title: "2021-2022 (6th grade) &nbsp;||&nbsp; Tipping Point",
    description: `Tipping point was our first ever year doing robotics. With no idea of what to expect, we built a simple clawbot. With no expectations of going anywhere, and not doing very well at our competitions, we were well surprised when we got an invitation to Worlds because of a skills wildcard. Though we didn't do very well at Worlds either, it really gave us the inspiration and desire to get back to there and that's where we have set out our bar since.`,
    images: [
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/IMG_3160.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/IMG_2255.JPG", title: "Competition Photo", description: "Our team in action at a robotics competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/IMG_2537.jpg", title: "Parkway Teammates", description: "Our teammates from Parkway West!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/IMG_2451.jpg", title: "Another Post", description: "Check out our latest update!" }
    ]
  },
  {
    title: "2022-2023 (7th grade) &nbsp;||&nbsp; Spin Up",
    description: `Spin Up was and still is our favorite game VEX has done by far. Even though at the game reveal at Worlds, we were scared and thought to ourselves, 'How is this even going to be possible?' But we came up with some great designs, and it really has been our best year yet. Though we did not make it to Worlds, it was the first year that we went to the U.S. Open, which was a great experience, especially the Mega Alliance Challenge. Overall, we were so insanely proud of ourselves this year.`,
    images: [
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/1.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/2.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/3.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/tipping-point/4.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
    ]
  },
  // Add other time points here
];

function loadSummary(index) {
  const summaryData = summaries[index];
  const summaryElement = document.getElementById('summary');
  summaryElement.innerHTML = `
    <section class="outline-white">
      <h3 class="left">${summaryData.title}</h3>
      <p class="left tab general-font">${summaryData.description}</p>
      <h4 class="left">Pictures:</h4>
      <section class="photo-gallery-container-bio">
        <button class="arrow left" onclick="changeImage(-1)">❮</button>
        <div class="photo-gallery">
          ${summaryData.images.map((image, i) => `
            <img src="${image.src}" alt="${image.title}" class="${i === 0 ? 'active' : ''}" data-title="${image.title}" data-description="${image.description}">
          `).join('')}
        </div>
        <button class="arrow right" onclick="changeImage(1)">❯</button>
      </section>
    </section>
  `;
}
