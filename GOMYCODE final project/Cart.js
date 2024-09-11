document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
    const deleteAllButton = document.getElementById('delete-all');
    const totalPriceElement = document.getElementById('total-price');
    
    let totalPrice = 0;

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('red');
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    deleteAllButton.addEventListener('click', () => {
        document.querySelectorAll('.cart-item').forEach(item => {
            item.querySelector('.item-quantity').textContent = '0';
        });
        updateTotalPrice();
    });

    function updateTotalPrice() {
        totalPrice = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            totalPrice += price * quantity;
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});