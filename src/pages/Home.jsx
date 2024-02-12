import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { addToCart,removeFromCart } from "../store/slices/cart-slice";


const Home = () => {
 const dispatch = useDispatch();
 const { cart } = useSelector((state) => state);
    const[loading , setLoading] = useState(false);
    const[product,setProduct] = useState('');
    function handleAddToCart(product) {
        dispatch(addToCart(product));
      }
      function handleRemoveFromCart(product) {
        dispatch(removeFromCart(product.id));
      }

    async function fetchProduct(){
        try{
            setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products/');
        const  result = await response.json();
        console.log(result);
        setProduct(result)
        setLoading(false)
    }


    catch(e){
        console.log(e);
    }}
    useEffect(()=>{
   fetchProduct()
    },[])


  if (loading) {
        return  <div className=" min-h-screen w-full flex justify-center items-center">
            <Circles 
            height ={"120"}
            width={"120"}
            color="rgv(127,29,29)"
            visible={true} />
          
        </div>
    }

    
  return (
    <div>

  

<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
  {
    product && product.length ? 
    
     product.map((product)=><div key={product.id}  className="group relative" >
        <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.category}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 truncate" />
                      {product.title}
                    </a>
                  </h3>
                
                </div>
                <p className="text-sm font-medium text-gray-900 box-border">{product.price}</p>
              </div>
            
            </div>
            <button
  onClick={() => {
    cart.some((item) => item.id === product.id)
      ? handleRemoveFromCart(product)
      : handleAddToCart(product);
  }}
  className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
>
  {cart.some((item) => item.id === product.id)
    ? "Remove from cart"
    : "Add to cart"}
</button>

     </div>
     )
     
      
    :null
  }


 </div> </div> </div>

    </div>
  )
}

export default Home