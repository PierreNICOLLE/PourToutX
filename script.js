//Animations Blocs définition, propriété...
document.addEventListener("DOMContentLoaded", () => {

  const blocs = document.querySelectorAll(
    ".definition, .propriete, .demo, .methode, .exemple"
  );

  blocs.forEach(bloc => {

    bloc.addEventListener("mouseenter", () => {
      blocs.forEach(b => b.classList.add("fade"));
      bloc.classList.remove("fade");
      bloc.classList.add("active");
    });

    bloc.addEventListener("mouseleave", () => {
      blocs.forEach(b => b.classList.remove("fade", "active"));
    });

  });

});

function show(type) {
  const blocs = document.querySelectorAll(".definition, .propriete, .demo, .methode, .exemple");

  blocs.forEach(b => {
    if (type === "all") {
      b.style.display = "block";
      return;
    }

    if (b.classList.contains(type)) {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
  });
}

document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseover", () => {
    p.style.background = "#fff3a0";
  });

  p.addEventListener("mouseout", () => {
    p.style.background = "transparent";
  });
});

document.querySelectorAll("h3, h4").forEach(title => {
  title.addEventListener("click", () => {
    title.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});