import images from "../../assets/images/images";

export default function HeroBaner() {
    return (
        <>
            <div className="flex max-[400px]:hidden h-[454px]">
                <div className="flex justify-between w-full h-[152px]">
                    <div className="flex flex-col gap-5 justify-center items-center w-[720px] mt-[190px]">
                        <h2 className=" text-[#333333] font-bold text-[50px]">Healthly cutlery, <br /> healthly body</h2>
                        <p className="text-[#666666]">Updating youd dining expreiens and <br /> begin your path to healthly right now </p>
                        <button className="w-[158px] h-[62px] flex justify-center p-1 items-center bg-[#658C4A] text-white font-medium border rounded-[20px]">Lean More</button>
                    </div>
                    <div className="h-full w-[720px]">
                        <img src={images.baner} alt="hero baner" />
                    </div>
                </div>
            </div>
        </>
    )
}