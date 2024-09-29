import axios from "axios";
import { useEffect, useState } from "react";

export default function Category() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/categorys')
            .then(res => {
                setData(res.data);
                console.log(res.data); // Log the fetched data
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="flex justify-between items-center my-20">
                <div className="text-[#658C4A] font-bold text-[30px]">
                    <h2>Category<br />for<br />you</h2>
                </div>
                {data.map((item) => (
                    <div className="w-[200px] h-[200px] relative" key={item.id}>
                        <img className="rounded-[10px]" src={item.categoryImage} alt="category image" />
                        <button className="absolute top-[150px] left-5 text-white border bg-[#333333] p-2 text-[12px] font-medium border-[#333333] w-[96px] h-[36px] rounded-[20px]">{item.categoryName}</button>
                    </div>
                ))}
            </div>
        </>
    );
}
