let currentIndex = 1;
let autoSlideInterval;
let autoSlideTimeout;

// Texts for each slide
const slideTexts = [
  {
    focustitle: "Primeiro texto",
    title: "title 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam? Consequuntur nemo, q",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam? Consequuntur nemo, quia illum numquam alias quo expedita. Explicabo, sunt, necessitatibus totam ",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam? Consequuntur nemo, quia illum numquam alias quo expedita. Explicabo, su",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 3",
    description:
      "Lorem iptam quae non harum tempore consequatur enim, recusandae quo quisquam? Harum!",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 4",
    description:
      "DLorem ipsum dous totam quae non harum tempore consequatur enim, recusandae quo quisquam? Harum!",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 5",
    description:
      "Dessitatibus totam quae non harum tempore consequatur enim, recusandae quo quisquam? Harum!",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam? Consequun quae non harum tempore consequatur enim, recusandae quo quisquam? Harum!",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 7",
    description:
      "Lorem ipsum dolor si harum tempore consequatur enim, recusandae quo quisquam? Harum!",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam? Consequuntur nemo, q",
  },
  {
    focustitle: "Primeiro texto",
    title: "title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam? Consequuntur nemo, quia illum numquam alias quo expedita. Explicabo, sunt, necessitatibus totam ",
  },
];

function updateText(index) {
  const focustitle = document.getElementById("txt12");
  const title = document.getElementById("slider-title");
  const description = document.getElementById("slider-description");
  if (focustitle && title && description) {
    focustitle.textContent = slideTexts[index].focustitle;
    title.textContent = slideTexts[index].title;
    description.textContent = slideTexts[index].description;
  }
}

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  const slideWidth = slides.children[0].clientWidth;

  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(${-index * slideWidth}px)`;

  currentIndex = index;

  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = `translateX(${-slideWidth}px)`;
      currentIndex = 1;
      setTimeout(() => {
        slides.style.transition = "transform 0.5s ease-in-out";
        updateActiveClass();
        updateText(currentIndex);
      }, 50);
    }, 500);
  } else if (currentIndex === 0) {
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = `translateX(${
        -slideWidth * (totalSlides - 2)
      }px)`;
      currentIndex = totalSlides - 2;
      setTimeout(() => {
        slides.style.transition = "transform 0.5s ease-in-out";
        updateActiveClass();
        updateText(currentIndex);
      }, 50);
    }, 500);
  } else {
    updateActiveClass();
    updateText(currentIndex);
  }
}

function updateActiveClass() {
  const slides = document.querySelector(".slides");
  Array.from(slides.children).forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
  resetAutoSlide();
}

function prevSlide() {
  showSlide(currentIndex - 1);
  resetAutoSlide();
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(startAutoSlide, 10000);
  startAutoSlide();
}

// Inicia o slider e o auto slide
updateText(currentIndex);
showSlide(currentIndex);
startAutoSlide();
