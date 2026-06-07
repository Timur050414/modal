(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
const modalWindow = document.querySelector("[data-modal]");

document.querySelector(".buy-btn").addEventListener("click", () => {
  modalWindow.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
});

modalWindow.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    modalWindow.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }
});