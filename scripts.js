const optionMenu = document.querySelector(".select-menu"), 
      selectItem = optionMenu.querySelector(".select-item"),
      options = optionMenu.querySelectorAll(".option"),
      selectText = optionMenu.querySelector(".select-text");

selectItem.addEventListener("click", () => optionMenu.classList.toggle("active"));

      options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            selectText.innerText = selectedOption;

            optionMenu.classList.remove("active")
        })
      })


