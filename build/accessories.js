document.addEventListener('DOMContentLoaded', ()=>{

    let accessoriesProduct = [
        {
            imgUrl: "./images/mouse.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis!",
            price: 'Rs 1,700',
            btn: "Read more"
        },
        {
            imgUrl: "./images/mouse.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis!",
            price: 'Rs 1,700',
            btn: "Read more"
        },
        {
            imgUrl: "./images/mouse.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis!",
            price: 'Rs 1,700',
            btn: "Read more"
        },
        {
            imgUrl: "./images/mouse.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis!",
            price: 'Rs 1,700',
            btn: "Read more"
        },
        
    ];

    let headphones = document.querySelectorAll('#headphones');

    headphones.forEach((headphone)=>{
        accessoriesProduct.forEach((accessories)=>{

            let div = document.createElement('div');
            div.className = "bg-white shadow-lg";
    
            let img = document.createElement('img');
            img.className = "";
            img.src = accessories.imgUrl;
    
            let text = document.createElement('p');
            text.className = "truncate-text ml-2 font-normal text-sm md:text:md lg:text-lg ml-2";
            text.textContent = accessories.text;
    
            let price = document.createElement('p');
            price.className = "text-red ml-1 text-xs font-semibold lg:text-lg md:text-lg sm:text-md mt-1";
            price.textContent = accessories.price;
    
            let btn = document.createElement('button');
            btn.className = "bg-red-700 text-xs sm:text-md md:text-lg mb-2 sm:p-1 mx-1 p-1 rounded-md mt-2 font-bold text-white";
            btn.textContent = accessories.btn;
    
            div.appendChild(img);
            div.appendChild(text);
            div.appendChild(price);
            div.appendChild(btn);
    
            headphone.appendChild(div);
    });
    
    });

    let droplist = document.querySelector('#droplist');
    let checkbox = document.querySelector('#checkboxx');

    droplist.addEventListener('click', ()=>{
        // checkbox.classList.toggle('hidden');
        checkbox.removeAttribute('hidden');
    })
});