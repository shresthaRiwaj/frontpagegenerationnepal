document.addEventListener('DOMContentLoaded', ()=>{



    let laptopProduct = [
        {
            imgUrl: "./images/storage.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?",
            price: "Price: Rs 80,000",
            button: "Read more",
        },
        {
            imgUrl: "./images/storage.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?",
            price: "Price: Rs 80,000",
            button: "Read more",
        },
        {
            imgUrl: "./images/storage.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?",
            price: "Price: Rs 80,000",
            button: "Read more",
        },
        {
            imgUrl: "./images/storage.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?",
            price: "Price: Rs 80,000",
            button: "Read more",
        },
    ];

    let laptopDisplay = document.querySelector('#laptopDisplay');

    laptopProduct.forEach((laptop)=>{

        let display = document.createElement('div');
        display.className = "flex flex-col items-center ml-1 bg-white rounded-md";
        let img = document.createElement('img');
        img.className = "";
        img.src = laptop.imgUrl;

        let text = document.createElement('p');
        text.className = "truncate-text font-normal text-sm md:text:md lg:text-lg ml-2";
        text.textContent = laptop.text;

        let price = document.createElement('p');
        price.className = "text-red text-xs ml-1 font-semibold lg:text-lg md:text-lg sm:text-md mt-1";
        price.textContent = laptop.price;

        let button = document.createElement('button');
        button.className = "bg-red-700 text-xs sm:text-md md:text-lg mb-2 sm:p-1 mx-1 p-1 rounded-md mt-2 font-bold text-white";
        button.textContent = laptop.button;

        display.appendChild(img);
        display.appendChild(text);
        display.appendChild(price);
        display.appendChild(button);
        laptopDisplay.appendChild(display);
    
    });
});