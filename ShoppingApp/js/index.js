let globalProducts = [];
const productSpinner = document.getElementById('products-spinner');

const fetchProducts = async ()=>{
   
    
        const res=await fetch('https://fakestoreapi.com/products');
        const data=await res.json();

        globalProducts=data;
        
        productSpinner.style.display='none';
        //console.log(data); 
        data.map((e,i)=>( createProductDiv(e)));
    
}