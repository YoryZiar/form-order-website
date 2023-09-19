const categoryTabs = document.getElementById('category-tabs'),
        liTabs = categoryTabs.querySelectorAll('.tabs-list');

liTabs.forEach(li => {
    li.addEventListener("click", () => {
        categoryTabs.querySelector(".bg-primary").classList.remove("bg-primary", "text-light")
        li.classList.add("bg-primary", "text-light")
    })
})