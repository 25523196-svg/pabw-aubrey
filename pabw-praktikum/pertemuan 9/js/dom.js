// js/dom.js
import { teams } from './app.js';

const teamList = document.querySelector("#team-list");
const filterContainer = document.querySelector("#filter-container");
const emptyState = document.querySelector("#empty-state");
const teamForm = document.querySelector("#team-form");

const teamModalLabel = document.querySelector("#teamModalLabel");
const modalCharacters = document.querySelector("#modal-characters");
const modalGuide = document.querySelector("#modal-guide");
const modalBuild = document.querySelector("#modal-build");
const teamModal = new bootstrap.Modal(document.querySelector('#teamModal'));

function createItemWithIcon(iconClass, text) {
  const p = document.createElement("p");
  p.className = "card-text mb-2 small text-body-secondary";
  
  const icon = document.createElement("i");
  icon.className = `bi ${iconClass} me-2 text-primary`;
  
  const span = document.createElement("span");
  span.textContent = text;
  
  p.append(icon, span);
  return p;
}

function buildCard(team) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6 fade-in"; 

  const card = document.createElement("div");
  card.className = "card-team card h-100 bg-body shadow-sm";
  card.style.cursor = "pointer";
  card.dataset.id = team.id; 

  const cardBody = document.createElement("div");
  cardBody.className = "card-body p-4 d-flex flex-column";

  const title = document.createElement("h4");
  title.className = "card-title fw-bold mb-4";
  title.textContent = team.name;

  cardBody.append(title);

  const icons = ["bi-crosshair", "bi-lightning-charge", "bi-magic", "bi-shield-plus"];
  team.characters.forEach((char, index) => {
    cardBody.append(createItemWithIcon(icons[index % 4], char));
  });

  const hint = document.createElement("div");
  hint.className = "mt-auto pt-3 text-primary small fw-semibold text-end border-top mt-3";
  hint.innerHTML = 'Lihat Detail <i class="bi bi-arrow-right"></i>';
  
  cardBody.append(hint);
  card.append(cardBody);
  col.append(card);
  
  return col;
}

function render(list) {
  teamList.textContent = "";

  if (list.length === 0) {
    emptyState.classList.remove("d-none");
    return;
  }
  emptyState.classList.add("d-none");

  list.forEach((team) => {
    teamList.append(buildCard(team));
  });
}

render(teams);

teamList.addEventListener("click", (event) => {
  const card = event.target.closest(".card-team");
  if (!card) return;

  const teamId = parseInt(card.dataset.id);
  const teamData = teams.find(t => t.id === teamId);

  if (teamData) {
    teamModalLabel.textContent = teamData.name;
    
    modalCharacters.textContent = "";
    const badgeColors = ["bg-danger", "bg-warning text-dark", "bg-info text-dark", "bg-success"];
    teamData.characters.forEach((char, index) => {
      const badge = document.createElement("span");
      badge.className = `badge rounded-pill ${badgeColors[index % 4]} px-3 py-2 fw-semibold shadow-sm`;
      badge.textContent = char;
      modalCharacters.append(badge);
    });

    modalGuide.textContent = teamData.guide;
    modalBuild.textContent = teamData.build;

    teamModal.show();
  }
});

filterContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  filterContainer.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("active", "btn-primary");
    btn.classList.add("btn-outline-primary");
  });
  button.classList.remove("btn-outline-primary");
  button.classList.add("active", "btn-primary");

  const category = button.dataset.category;
  const selected = teams.filter(
    (team) => category === "all" || team.category === category
  );
  
  render(selected);
});

teamForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;
  const inputs = teamForm.querySelectorAll("input");

  inputs.forEach((input) => {
    const val = input.value.trim();
    if (val === "" || !input.checkValidity()) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
  });

  if (valid) {
    alert("Berhasil! Tim baru Anda telah tersimpan secara lokal.");
    teamForm.reset();
    inputs.forEach((input) => input.classList.remove("is-valid"));
  }
});

teamForm.addEventListener("input", (event) => {
  const input = event.target;
  if (input.tagName === "INPUT") {
    if (input.value.trim() === "" || !input.checkValidity()) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
  }
});