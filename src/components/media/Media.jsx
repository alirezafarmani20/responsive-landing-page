import icons from "../../assets/icons/icons";
import images from "../../assets/images/images";


export default function Media() {
    return (
        <>
            <div className="flex w-full h-[310px]">
                <div className="flex justify-center bg-[#E7CEC0] w-[260px]">
                    <h2 className="text-[30px] text-[#658C4A] font-bold mt-[120px]">We <br />Are <br />Exist</h2>
                </div>
                <div className="relative flex justify-center bg-[#658C4A] w-full">
                    <img src={icons.rectangel} alt="rectangle" className="absolute top-0 left-[259px]" />
                    <img src={icons.line1} alt="line1" className="absolute left-[776px] top-[80px]" />
                    <img src={icons.line2} alt="line2" className="absolute left-[706px] top-[125px]" />
                    <img src={icons.circel} alt="circel" className="absolute top-0 right-0" />
                    <img src={icons.dot} alt="dot group" className="absolute bottom-0 left-[50px]" />
                    <div className="grid grid-cols-4 mt-[90px] z-50 gap-5 p-0">
                        <img src={images.tvir} alt="tvlogo " />
                        <img src={images.nitro} alt="tvlogo " />
                        <img src={images.metro} alt="tvlogo " />
                        <img src={images.metrotv} alt="tvlogo " />
                        <img src={images.brita} alt="tvlogo " />
                        <img src={images.sea} alt="tvlogo " />
                        <img src={images.inews} alt="tvlogo " />
                        <img src={images.cnbc} alt="tvlogo " />
                    </div>
                </div>
            </div>
            <div className="w-full h-[600px] bg-bg-images bg-cover relative">
                <div className="flex absolute flex-col bg-[#FFFFFF] w-[646px] h-[272px] bottom-[70px] left-[100px] border rounded-[20px]">
                    <h2 className="text-[20px] font-medium text-[#333333] my-5 ml-5">Subscribe to oure newsletter</h2>
                    <p className="text-[15px] font-medium text-[#666666] my-5 ml-5">Be the first to know abut exclusvie offer, eco-tips and <br />new arrival</p>
                    <div className="flex justify-between items-center mx-5 border-[1px] border-[#CCCCCC] h-[60px] px-5 rounded-[50px]">
                        <input type="email" value={'Your email'} className="text-[15px] font-medium text-[#666666]" />
                        <input type="submit" value="Subscribe" className="border-[1px] border-[#CCCCCC] m-1 text-[#FFFFFF] font-bold bg-[#658C4A] rounded-[50px] w-[126px] h-[52px]" />
                    </div>
                </div>
            </div>
        </>
    )
}