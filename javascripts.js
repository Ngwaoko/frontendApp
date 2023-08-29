document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const barIcon = document.querySelector('.bar-icon');
    const navList = document.querySelector('.list');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show-menu');
    });

    barIcon.addEventListener('click', function () {
        navList.classList.toggle('show-menu');
    });
});






let word = document.querySelectorAll(".word")
        console.log(word)

        let animate1 = (words) => {
                words.classList.add("animate")
            }

        let animateAll = (animate) => {
            setTimeout(() => {
                animate1(word[0]);
                setTimeout(() => {
                    animate1(word[1]);
                    setTimeout(() => {
                        animate1(word[2]);
                    },1000)   
                },1000)
            },1000)

          
        } 
        animateAll(animate1)