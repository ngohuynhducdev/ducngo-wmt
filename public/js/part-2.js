// Data for the products
const products = [
    {
        name: 'BMW M1000RR',
        description:
            'The M1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced aerodynamics, and track-focused features, it delivers an unmatched riding experience on both the track and the road.',
        
        image: './assets/moto-1.jpg',
        quantity: 150,
        price: 60000,
    },
    {
        name: 'BMW S1000RR',
        description:
            'The S1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced electronics, and aerodynamic design, it delivers an unmatched riding experience on both the track and the road.',
        image: './assets/moto-2.jpg',
        quantity: 35,
        price: 35000,
    },

    {
        name: 'BMW R 1250 GS Adventure',
        description:
            'The R 1250 GS Adventure is a versatile and rugged adventure motorcycle designed for long-distance touring and off-road exploration. With its powerful boxer engine, advanced suspension, and comfortable ergonomics, it excels in both on-road and off-road conditions.',
        image: './assets/moto-3.jpg',
        quantity: 5,
        price: 30000,
    },
]

// Function to calculate the total value of all items in stock
// and apply a discount if the quantity is greater than 5
function calculateTotalValue(products) {
  let total = 0;

  for (const product of products) {
    const { price, quantity } = product;
    
    // Apply a 10% discount if the quantity is greater than 5
    const finalPrice = quantity > 5 ? price * 0.9 : price;

    total += finalPrice * quantity;
  }

  return total;
}

// Call the function to calculate the total value of all items in stock
// and print the result to the console
// and display the result in the HTML element with id "totalValue"
const totalValue = calculateTotalValue(products)
document.getElementById("totalValue").textContent = `Total value of all items in stock: ${totalValue.toLocaleString()}$`;
console.log('Total value of all items in stock:' + totalValue + '$')

// Function to create a modal for displaying product details
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal__title')
const modalImage = document.querySelector('.modal__image')
const modalDescription = document.querySelector('.modal__description')
const modalCloseBtn = document.querySelector('.modal__close')

function closeModal() {
  modal.classList.remove('modal__active');
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
});

// Add event listeners to the product cards
window.addEventListener('DOMContentLoaded', () => {
  const carouselList = document.querySelectorAll('.carousel__item');
  carouselList.forEach((item) => {
    item.addEventListener('click', () => {
      const dataId = Number(item.getAttribute('data-id'));
      if (!products || !products[dataId]) return;
      const data = products[dataId];
      const { name, description, image } = data;

      modalTitle.textContent = name;
      modalImage.src = image;
      modalDescription.textContent = description;
      modal.classList.add('modal__active');
    });
  });
});


// Function to render the products in the carousel
function renderProducts(products) {
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = '';

  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'carousel__item';
    productCard.dataset.id = index;
    productCard.dataset.quantity = product.quantity;
    productCard.dataset.price = product.price;

    productCard.innerHTML = `
      <div class="sale-tag" style="display: ${product.quantity > 5 ? 'block' : 'none'};">Sale Off</div>
      <img class="carousel-item__image" src="${product.image}" alt="${product.name}">
      <div class="carousel-item__content">
        <h2 class="carousel-item__content--title">${product.name}</h2>
        <p class="carousel-item__content--description">${product.description}</p>
        <p class="carousel-item__content--price">PRICE: ${product.price.toLocaleString()}$</p>
        <p class="carousel-item__content--quantity">STOCK: ${product.quantity}</p>
      </div>
    `;

    // Add event listener to the product card
     productCard.addEventListener('click', () => {
      openModal(product);
    });

    // Append the product card to the carousel
    carousel.appendChild(productCard);
  });
}

// Function to open the modal with the product details
// and set the modal content
function openModal({ name, description, image }) {
  modalTitle.textContent = name;
  modalImage.src = image;
  modalDescription.textContent = description;
  modal.classList.add('modal__active');
}

// Call the function to render the products
renderProducts(products);