import React, { useContext, useEffect, useState } from 'react'
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import {Link, useParams} from 'react-router-dom'
import Side_NavBar from '../components/Side_NavBar'
import { ShopContext } from '../context/ShopContext'
const ProductDetail = () => {
  const {id} = useParams();
  const {menu} = useContext(ShopContext)
  const[productdata, setProductData]= useState(false);
  const [image, setImage] =  useState('');

   const fetchproductdata  = async () => {
    menu.map((item)=>{
      if(item._id === id){
        setProductData(item)
        setImage(item.image[0])
        return null;
    }
  }
  )
  }

  useEffect(()=>{
    fetchproductdata();
  },[id,menu])


  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)

  return productdata ? (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            {
              productdata.image.map((item,index)=>(

            <img src={item} key={index} alt="Product" className="w-full rounded-lg" />
              ))
            }
            <button onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : productdata.image.length - 1))} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => setCurrentImage((prev) => (prev < productdata.image.length - 1 ? prev + 1 : 0))} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex mt-4 space-x-2">
            {productdata.image.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-cover rounded cursor-pointer" onClick={() => setCurrentImage(index + 1)} />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">product 1</h1>
          <p className="text-gray-600 mb-4">category</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, obcaecati blanditiis aperiam qui, sit nemo corporis eius delectus quae, accusantium architecto soluta amet dicta? Eveniet dolore quasi id! Aliquam, tempora?</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2">$233</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 ml-2">(5.0 rating)</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">Quantity:</span>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-gray-200 rounded-full p-1">
              <Minus className="w-4 h-4" />
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-200 rounded-full p-1">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <Link to="/cartItem">

          <button className="bg-teal-500 text-white px-4 py-2 rounded">Add Cart</button>
          </Link>
        </div>
      </div>

      {/* Description and Key Benefits */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="mb-6">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
        <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
        <ul className="list-disc pl-5 mb-6">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>

      {/* Similar Products */}
      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {similarProducts.map((product, index) => (
            <img key={index} src={product} alt={`Similar Product ${index + 1}`} className="w-48 h-32 object-cover rounded" />
          ))}
        </div>
      </div> */}
      <Side_NavBar/> 
    </div>
  ): <div className='opacity-0'></div>
}

export default ProductDetail