import images from "../../assets/images/images";

export default function Commitment() {
    return (
        <>
            <div className="w-full relative h-[500px] bg-commitment-baner bg-cover ">
                {/* cover image */}
                <img className="absolute w-full h-[500px]" src={images.fg} alt="cover images" />
                {/* به خاطر این عنصر هست که صفحه داره اسکرول میخوره */}
                <div className="relative top-[120px] w-[1320px] h-[120px] opacity-70 text-wrap">
                    <h2 className="text-[#FFFFFF] text-[30px] font-medium pr-[100px] leading-relaxed indent-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda cum maxime quos velit ipsa corrupti, hic odit deserunt, tempore impedit dolor optio nulla harum vel maiores eius dignissimos saepe.</h2>
                </div>
                <img src={images.line} alt="line shape" className="opacity-70 absolute top-[350px] left-[550px]" />
            </div>
        </>
    )
}