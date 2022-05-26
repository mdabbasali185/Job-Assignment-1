const imgTitle = document.querySelectorAll('.img-title')
const popUp = document.getElementById('popUp1')
for (let index = 0; index < imgTitle.length; index++) {
    const element = imgTitle[index];
    element.addEventListener('click', (e) => {

        const select = document.getElementById('select')
        popUp.classList.add('active')
        select.src = e.target.currentSrc
    })

}
const cancel = document.getElementById('cancel')
cancel.addEventListener("click", () => {
    popUp.classList.remove("active")
})
