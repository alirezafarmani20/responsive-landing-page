import Container from "../container/Container";
//importing assets
import images from "../../assets/images/images";
import icons from "../../assets/icons/icons";

export default function Header() {
    return (
        <>
            <div className="flex flex-col gap-5 border-b border-black">
                <div className="flex justify-center items-center h-[40px] bg-[#658C4A] text-[#FFFFFF] font-medium text-[15px] shadow">
                    <h2>Free shopping with menimim time in site</h2>
                </div>
                <Container>
                    <div className="flex justify-between items-center">
                        <div>
                            {/* logo section */}
                            <img src={images.logo} alt="site logo" />
                        </div>
                        <div className="flex gap-3 px-3 items-center w-[880px] h-[40px] border border-[#CCCCCC] rounded-[20px]">
                            <img className="w-5 h-5" src={icons.search} alt="search icons" />
                            <input className="w-full border-none text-[#CCCCCC] rounded-[20px] h-full cursor-pointer" type="search" value={'seach here....'} />
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[30px] h-[30px] cursor-pointer" src={icons.profile} alt="profile icons" />
                            <img className="w-[30px] h-[30px] cursor-pointer" src={icons.bag} alt="bag icons" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-5">
                        <ul className="flex gap-10 cursor-pointer font-medium text-[15px] text-black">
                            <li>New</li>
                            <li>Colthing</li>
                            <li>Bath</li>
                            <li>Home Goods</li>
                            <li>Fuchers</li>
                            <li>Foot Wear</li>
                            <li>Accesoris</li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    )
}