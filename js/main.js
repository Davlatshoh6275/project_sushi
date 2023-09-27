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

// add product to carzine / start

const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function (event) {

    // 
    if (event.target.hasAttribute('data-cart')) {
        // console.log('Click in cart btn');

        const card = event.target.closest('.card')
        // console.log(card);

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        console.log(productInfo);

        const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
          <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="img" />
          </div>
          <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemInBox}/ ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">
              <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">
                  -
                </div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
              </div>

              <div class="price">
                <div class="price__currency">${productInfo.price}</div>
              </div>
            </div>
            <!-- // cart-item__details -->
          </div>
        </div>
      </div>`

        //   add to carzine

        cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML)

    }
})


// add product to carzine / end