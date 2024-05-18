document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider__item');
    let currentIndex = 0;

    const showSlide = (index) => {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    };

    document.querySelector('.slider__button--next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    });

    document.querySelector('.slider__button--prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);

    document.getElementById('bookingForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const people = document.getElementById('people').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        const isConfirmed = confirm(`Пожалуйста, подтвердите данные:\n\nКоличество людей: ${people}\nИмя и фамилия: ${name}\nТелефон: ${phone}`);
        if (isConfirmed) {
            window.location.reload();
        }
    });
});
