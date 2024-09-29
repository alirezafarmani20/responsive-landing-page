import Container from "../container/Container";
//importing assets
import images from "../../assets/images/images";
import icons from "../../assets/icons/icons";

export default function Footer() {

    return (
        <>
            <footer className="relative  bg-bg-footer w-full h-[528px] bg-cover mt-40">
                <div className="absolute top-[-50px] left-[49%]">
                    <img src={images.footerLogo} alt="this is footer logo" />
                </div>
                <Container>
                    <div className="flex justify-between pt-[100px] items-center my-8">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[25px] text-[#658C4A] font-bold mt-5">Eco Shop</h2>
                            <ul className="text-[15px] text-[#333333] font-bold flex flex-col gap-3 cursor-pointer">
                                <li>Abut Us</li>
                                <li>Contact US</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[25px] text-[#658C4A] font-bold mt-5">Product Categores</h2>
                            <ul className="text-[15px] text-[#333333] font-bold flex flex-col gap-3 cursor-pointer">
                                <li>New</li>
                                <li>Colthing</li>
                                <li>Bath & Bedding</li>
                                <li>Home Goods</li>
                                <li>Furniture</li>
                                <li>Accesories</li>
                                <li>Gifts</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[25px] text-[#658C4A] font-bold mt-5">Support</h2>
                            <ul className="text-[15px] text-[#333333] font-bold flex flex-col gap-3 cursor-pointer">
                                <li>Shopping</li>
                                <li>Returns</li>
                                <li>Privacy Police</li>
                                <li>Terms of Use</li>
                                <li>Affiliates</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[25px] text-[#658C4A] font-bold mt-5">Payment</h2>
                            <div className="grid grid-cols-4 gap-3 cursor-pointer">
                                <img src={images.i1} alt="pyment company" />
                                <img src={images.i3} alt="pyment company" />
                                <img src={images.i3} alt="pyment company" />
                                <img src={images.i4} alt="pyment company" />
                                <img src={images.i5} alt="pyment company" />
                                <img src={images.i6} alt="pyment company" />
                                <img src={images.i7} alt="pyment company" />
                                <img src={images.i8} alt="pyment company" />
                                <img src={images.i9} alt="pyment company" />
                                <img src={images.i10} alt="pyment company" />
                                <img src={images.i11} alt="pyment company" />
                                <img src={images.i12} alt="pyment company" />
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="border-t-[1px] border-[#333333]">
                    <Container>
                        <div className="flex justify-between items-center h-[60px]">
                            <h2 className="text-[15px] text-[#333333] font-medium">C 2023 Eco shop indonasia,All Rights Reserved</h2>
                            <div className="flex justify-between items-center gap-4 h-full cursor-pointer">
                                <img src={icons.whatsUp} alt="whatsUp icons" />
                                <img src={icons.tikTak} alt="tickTack icons" />
                                <img src={icons.insta} alt="insta icon" />
                                <img src={icons.faceBook} alt="faceBook icons" />
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}