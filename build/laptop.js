

document.addEventListener('DOMContentLoaded',()=>{

    

    let laptopsDetails = [
        {
            laptopImg: './images/mouse.png',
            laptopDesc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            laptopPrice: 'Rs 80,000',
            laptopBtn: "Read More",
        },
        {
            laptopImg: './images/mouse.png',
            laptopDesc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            laptopPrice: 'Rs 80,000',
            laptopBtn: "Read More",
        },
        {
            laptopImg: './images/mouse.png',
            laptopDesc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            laptopPrice: 'Rs 80,000',
            laptopBtn: "Read More",
        }
    ];
    



    let laptopBestSelling = document.querySelector('#laptopBestSelling');
    

    laptopsDetails.forEach((elem, index)=>{
    let laptopSingle = document.createElement('div');
    laptopSingle.className = "bg-white rounded-md flex flex-col shadow-md m-1 justify-center items-center";
    let laptopImage = document.createElement('img');
    laptopImage.src = laptopsDetails[index].laptopImg;

    let laptopDesc = document.createElement('p');
    laptopDesc.className = "ml-1 truncate-text";
    laptopDesc.textContent = laptopsDetails[index].laptopDesc;

    let laptopPrice = document.createElement('p');
    laptopPrice.className = "text-red-600 ml-1 font-light";
    laptopPrice.textContent = laptopsDetails[index].laptopPrice;

    let laptopBtn = document.createElement('button');
    laptopBtn.className = "bg-red-600 rounded-md p-1 m-1 text-white";
    laptopBtn.textContent = laptopsDetails[index].laptopBtn;

    laptopSingle.appendChild(laptopImage);
    laptopSingle.appendChild(laptopDesc);
    laptopSingle.appendChild(laptopPrice);
    laptopSingle.appendChild(laptopBtn);
    laptopBestSelling.appendChild(laptopSingle);

    })
    



});
