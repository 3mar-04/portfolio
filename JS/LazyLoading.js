const lazyloading = () => {
  const lazy = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let element = entry.target;

        if (element.classList.contains("me__photoBefore")) {
          element.classList.replace("me__photoBefore", "me__photoAfter");
        }

        if (element.classList.contains("me__aboutBefore")) {
          element.classList.replace("me__aboutBefore", "me__aboutAfter");
        }

        observer.unobserve(element);
      }
    });
  });

  lazy.forEach((element) => {
    observer.observe(element);
  });
};

export default lazyloading;
