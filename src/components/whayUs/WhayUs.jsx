import Container from "../container/Container"
//importing asstes
import icons from "../../assets/icons/icons"

export default function WhayUs() {
    return (
        <>
            <Container>
                <div className="my-20 flex flex-col">
                    <div className="relative text-center">
                        <div className="absolute left-[450px] bottom-[30px] w-[161px] h-[56px] bg-[#E7CEC0] rounded-[30px] z-[-100] rotate-[155deg]"></div>
                        <h2 className="text-[40px] font-medium text-[#658C4A] z-50">Whay Bought From Us?</h2>
                    </div>
                    <div className="flex justify-around mt-20  ml-10">
                        <div className="flex flex-col gap-2 w-[280px] h-[154px]">
                            <div className="flex justify-start items-center">
                                <img src={icons.truck} alt="truck icon" className="w-11 h-11" />
                            </div>
                            <div className="mt-3">
                                <h2 className="text-[18px] text-[#333333] font-bold">Free Shopping</h2>
                                <p className="text-[#666666] text-[15px] font-medium">Shop new and enjoy free <br /> shopping on all orders</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[280px] h-[154px]">
                            <div className="flex justify-start items-center">
                                <img src={icons.face} alt="face icons" className="w-11 h-11" />
                            </div>
                            <div className="mt-3">
                                <h2 className="text-[18px] text-[#333333] font-bold">Satisfaction Guaranteed</h2>
                                <p className="text-[#666666] text-[15px] font-medium">Our staisfaction guarantee <br /> ensures quality product</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[280px] h-[154px]">
                            <div className="flex justify-start items-center">
                                <img src={icons.leaf} alt="leaf icons" className="w-11 h-11" />
                            </div>
                            <div className="mt-3">
                                <h2 className="text-[18px] text-[#333333] font-bold">Eco Frendly Packaging</h2>
                                <p className="text-[#666666] text-[15px] font-medium">Useing eco-frendly materials,<br />sustainable and <br />biodegradable</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[280px] h-[154px]">
                            <div className="flex justify-start items-center">
                                <img src={icons.cs} alt="backup icons" className="w-11 h-11" />
                            </div>
                            <div className="mt-3">
                                <h2 className="text-[18px] text-[#333333] font-bold">Fast Response</h2>
                                <p className="text-[#666666] text-[15px] font-medium">27/7 fast and reliable <br />assistance whenever you <br /> ndde it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}