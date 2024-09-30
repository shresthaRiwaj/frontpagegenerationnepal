

document.addEventListener('DOMContentLoaded',()=>{

    

    let productDesc = [
        {
            ProductDescImg: './images/mouse.png',
            ProductDescDesc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            ProductDescPrice: 'Rs 80,000',
            ProductDescBtn: "Read More",
        }
    ];
    



    let laptopBestSelling = document.querySelector('#laptopBestSelling');
    let laptopSingle = document.createElement('div');
    laptopSingle.className = "bg-white rounded-md flex flex-col justify-center items-center";

    let laptopImage = document.createElement('img');
    laptopImage.src = laptopsDetails[0].laptopImg;

    let laptopDesc = document.createElement('p');
    laptopDesc.className = "ml-1 truncate-text";
    laptopDesc.textContent = laptopsDetails[0].laptopDesc;

    let laptopPrice = document.createElement('p');
    laptopPrice.className = "text-red-600 ml-1 font-light";
    laptopPrice.textContent = laptopsDetails[0].laptopPrice;

    let laptopBtn = document.createElement('button');
    laptopBtn.className = "bg-red-600 rounded-md p-1 m-1 text-white";
    laptopBtn.textContent = laptopsDetails[0].laptopBtn;

    laptopSingle.appendChild(laptopImage);
    laptopSingle.appendChild(laptopDesc);
    laptopSingle.appendChild(laptopPrice);
    laptopSingle.appendChild(laptopBtn);
    laptopBestSelling.appendChild(laptopSingle);



});
