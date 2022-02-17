function accordionTeam() {
    const workers = document.querySelectorAll(".team__item");
    const teamAccord = document.querySelector(".team--version--mobile");

    teamAccord.addEventListener("click", function (event) {
        event.preventDefault(); 
        const target = event.target;

        if (target.classList.contains("team__title")) {
            const worker = target.parentNode;
            const content = target.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight; 

            for (const iterator of workers) {
                if (iterator !== worker) {
                    iterator.classList.remove("team__item-active");
                    iterator.lastElementChild.style.height = 0;
                 }
             }

             if (worker.classList.contains("team__item-active")) {
                worker.classList.remove("team__item-active");
                content.style.height = 0;
             } else {
                 worker.classList.add("team__item-active");
                 content.style.height = contentHeight + "px";
             } 
         }
     });
 }
 accordionTeam();