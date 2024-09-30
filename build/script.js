

document.addEventListener('DOMContentLoaded',()=>{

    document.getElementById('heart-icon').addEventListener('click',(e)=>{
        e.preventDefault();
        let icon = document.querySelector('i');
        icon.classList.toggle('text-red-700');
    })
    let productDetails = [
        {
            imgUrl:"./images/mouse.png",
            productName: "Mouse",
            desc: "something soimethinf",
            btn: "Read More",
        },

    ];

    let brandLogos = [
        {
            brandUrl: './images/key.png',
        }
    ]

    let blogDetails = [
        {
            blogImgUrl : "./images/laptop1.jpg",
            blogDesc : "Lorem ipsum dolor sit amet consectetur",
            blogLink: "Read more"
        }
    ];
    // laptop-section

    let laptopsDetails = [
        {
            laptopImg: './images/logoo.png',
            laptopDesc: 'Dell Vostro 3510 i5 11th Gen/ 8GB RAM/ 256GB SSD/ 15.6" FHD Display',
            laptopPrice: 'Rs 80,000',
            laptopBtn: "Read More",
        }
    ];
    let productContainer = document.querySelector('#productContainer');

    let products = document.createElement('div');
    products.className = "products bg-white text-center";

    let img = document.createElement('img');
    img.src = productDetails[0].imgUrl;

    let h1 = document.createElement('h1');
    h1.textContent = productDetails[0].productName;

    let p = document.createElement('p');
    p.textContent = productDetails[0].desc;

    let button = document.createElement('h1');
    button.textContent = productDetails[0].btn;

    products.appendChild(img);
    products.appendChild(h1);
    products.appendChild(p);
    products.appendChild(button);

    productContainer.appendChild(products);

    let brands = document.querySelector('#brands');
    let a = document.createElement('a');
    a.href="#";
    let brandImg = document.createElement('img');
    brandImg.src = brandLogos[0].brandUrl;
    brandImg.className = "w-28 my-1 mx-1 h-28 rounded-full bg-white";
    a.appendChild(brandImg);
    brands.appendChild(a);


    // blog post

    let blogContainer = document.querySelector('#blogContainer');
    let blogPost = document.createElement('div');
    
    let blogImg = document.createElement('img');
    blogImg.src = blogDetails[0].blogImgUrl;
    
    let blogText = document.createElement('p');
    blogText.textContent = blogDetails[0].blogDesc; 

    let blogLink = document.createElement('a');
    blogLink.href = "#";
    blogLink.className = "hover:text-blue-600 hover:border-b-2 hover:border-blue-600";
    blogLink.textContent = blogDetails[0].blogLink; 

    blogPost.appendChild(blogImg);
    blogPost.appendChild(blogText);
    blogPost.appendChild(blogLink);

    blogContainer.appendChild(blogPost);



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
