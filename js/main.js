// skrit blok karzina pusta

function toggleComplite() {

    const cartWrapper = document.querySelector('.cart-wrapper')
    const dataCart = document.querySelector('[data-cart-empty]')

    const orderForm = document.querySelector('#order-form')


    // console.log(
    //     cartWrapper.children.length
    // );

    if (cartWrapper.children.length > 0) {
        console.log('full');
        dataCart.classList.add('none')
        orderForm.classList.remove('none')

    } else {
        console.log('empty');
        dataCart.classList.remove('none')
        orderForm.classList.add('none')
    }


    // you must call function toggleComplite() in two funchtions minus btn and add to carzine

}


// // skrit blok karzina pusta

// counter 
window.addEventListener('click', function (event) {

    if (event.target.dataset.action === "plus") {

        // yaqin bulgan ota elementni topib beradi // method closest()
        const counterWrapper = event.target.closest('.counter-wrapper')


        const counter = counterWrapper.querySelector('[data-counter]')
        counter.innerText = ++counter.innerText
    }

    if (event.target.dataset.action === "minus") {

        // yaqin bulgan ota elementni topib beradi // method closest()
        const counterWrapper = event.target.closest('.counter-wrapper')

        const counter = counterWrapper.querySelector('[data-counter]')
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
        }
        // baroyi udalit kadan 
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            event.target.closest('.cart-item').remove()
            toggleComplite()
        }
    }
})

// end caunter

// add product to carzine / start

const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function (event) {

    // 
    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card')

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }


        // proverka tovara estli v karzine

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

        if (itemInCart) {
            const counterElem = itemInCart.querySelector("[data-counter]")
            counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.counter)
        } else {

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


        // posle dobavleniya vozvreashshayem counter na 1

        card.querySelector('[data-counter]').innerText = "1"
        toggleComplite()
    }
})


// add product to carzine / end


