// counter 

// // counter baroyi yaktesh / start

// const btnMinus = document.querySelector('[data-action="minus"]')
// const btnPlus = document.querySelector('[data-action="plus"]')
// const counter = document.querySelector('[data-counter]')

// btnMinus.addEventListener("click", function () {

//     if (parseInt(counter.innerText) > 1) {
//         counter.innerText = --counter.innerText
//     }

// })
// btnPlus.addEventListener("click", function () {
//     counter.innerText = ++counter.innerText
// })

// counter baroyi yaktesh / end




// // counter baroyi hammesh / start

window.addEventListener('click', function (event) {
    // console.log('Click window!');
    // console.log(event.target.dataset.action);

    if (event.target.dataset.action === "plus") {
        // console.log('plus');

        // yaqin bulgan ota elementni topib beradi // method closest()
        const counterWrapper = event.target.closest('.counter-wrapper')

        // console.log(counterWrapper);

        const counter = counterWrapper.querySelector('[data-counter]')
        // console.log(counter);
        counter.innerText = ++counter.innerText
    }

    if (event.target.dataset.action === "minus") {
        // console.log('minus');

        // yaqin bulgan ota elementni topib beradi // method closest()
        const counterWrapper = event.target.closest('.counter-wrapper')

        // console.log(counterWrapper);

        const counter = counterWrapper.querySelector('[data-counter]')
        // console.log(counter);
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
        }
    }
})

// end caunter