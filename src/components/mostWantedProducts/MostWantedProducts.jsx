import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../container/Container";

export default function MostWantedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/mostWantedProducts')
            .then((res) => {
                setProducts(res.data);
                console.log(res.data); // console.log data
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, []);

    return (
        <div className="w-full h-[744px] bg-[#658C4A] flex flex-col">
            <div className="flex flex-col items-center justify-center my-20">
                <h2 className="font-bold text-[50px] text-white">Our Most Wanted Products</h2>
                <p className="text-[20px] font-medium text-[#E6E6E6] mt-[10px]">Good for environment, good for you</p>
            </div>
            <Container>
                {/* data feaching */}
                <div className="flex justify-between">
                    {products.map((productItem) => (
                        <div key={productItem.id} className="flex flex-col  w-[312px] h-[448px] cursor-pointer">
                            <img  src={productItem.productImage} alt={productItem.productName} className="w-full h-auto rounded" />
                            <h2 className="pr-10 my-2 text-[15px] font-medium text-[#FFFFFF]">{productItem.productDescription}</h2>
                            <p className="text-[13px] font-medium text-[#FFFFFF]">Rp {productItem.offProductPrice}</p>
                            <p className="text-[13px] font-medium text-[#FFFFFF]">Rp <del>{productItem.productPrice} </del></p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
