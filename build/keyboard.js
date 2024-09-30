document.addEventListener('DOMContentLoaded', ()=>{


    let keyboardDetails = [
        {
            imgUrl: './images/mouse.png',
            desc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            price: 'Rs 80,000',
            btn: "Read More",
        },
        {
            imgUrl: './images/mouse.png',
            desc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            price: 'Rs 80,000',
            btn: "Read More",
        },
        {
            imgUrl: './images/mouse.png',
            desc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            price: 'Rs 10,000',
            btn: "Read More",
        },
        {
            imgUrl: './images/mouse.png',
            desc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            price: 'Rs 80,000',
            btn: "Read More",
        }
    ];

    keyboardDetails.forEach((elem, index)=>{
        let keyboardSet = document.querySelector('#keyboardSet');
    let comboSet = document.querySelector('#comboSet');
    let key = document.createElement('div');
    key.className = "bg-white rounded-md flex flex-col shadow-md m-1 justify-center items-center";

    let img = document.createElement('img');
    img.src = keyboardDetails[index].imgUrl;

    let desc = document.createElement('p');
    desc.className = "ml-1 truncate-text";
    desc.textContent = keyboardDetails[index].desc;

    let price = document.createElement('p');
    price.className = "text-red-600 ml-1 font-light";
    price.textContent = keyboardDetails[index].price;

    let btn = document.createElement('button');
    btn.className = "bg-red-600 rounded-md p-1 m-1 text-white";
    btn.textContent = keyboardDetails[index].btn;

    key.appendChild(img);
    key.appendChild(desc);
    key.appendChild(price);
    key.appendChild(btn);
    keyboardSet.appendChild(key);
    })
    
    // comboSet.appendChild(key);

});