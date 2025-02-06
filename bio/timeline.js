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
      { src: "https://jdominator2010.github.io/TDBwebsite/images/spinup/1.JPG", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/spinup/2.JPG", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/spinup/3.JPG", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/spinup/4.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
    ]
  },
  {
    title: "2023-2024 (8th grade) &nbsp;||&nbsp; Over Under",
    description: `Over Under overall wasn't one of our most favorite games. While we did well and enjoyed the game, it just wasn't able to beat Spin Up. Yet again, we did not make it to Worlds, but we did go back to the U.S. Open. This time, we brought home the Mega Alliance Champion trophy, which we were very proud of. We did make a good-looking bot this year, and it definitely functioned well. Overall, we did pretty well this year and were most definitely proud of ourselves.`,
    images: [
      { src: "https://jdominator2010.github.io/TDBwebsite/images/overunder/1.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/overunder/2.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/overunder/3.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/overunder/4.jpg", title: "Team Photo", description: "The team at alliance selection at Ladue competition!" },
    ]
  },
  {
    title: "2024-2025 (9th grade) &nbsp;||&nbsp; High Stakes",
    description: `No summary yet. Check back later! (will be written when year is over)`,
    images: [
      { src: "https://jdominator2010.github.io/TDBwebsite/images/highstakes/1.jpg", title: "Check back later!", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/highstakes/2.jpg", title: "Check back later!", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/highstakes/3.jpg", title: "Check back later!", description: "The team at alliance selection at Ladue competition!" },
      { src: "https://jdominator2010.github.io/TDBwebsite/images/highstakes/4.jpg", title: "Check back later!", description: "The team at alliance selection at Ladue competition!" },
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
