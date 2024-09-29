import Category from "../../components/category/Category";
import Commitment from "../../components/commitment/Commitment";
import Container from "../../components/container/Container";
import HeroBaner from "../../components/heroBaner/HeroBaner";
import Media from "../../components/media/Media";
import MostWantedProducts from "../../components/mostWantedProducts/MostWantedProducts";
import NewArrival from "../../components/newArrival/NewArrival";
import WhayUs from "../../components/whayUs/WhayUs";

export default function Home() {
    return (
        <>
            <div>
                <section>
                    {/* hero section */}
                    <HeroBaner />
                </section>
                <section className="my-10">
                    <Container>
                        {/* category section */}
                        <Category />
                    </Container>
                </section>
                <section className="my-20">
                    {/* most wanted section */}
                    <MostWantedProducts />
                </section>
                <section className="my-20">
                    <NewArrival />
                </section>
                <section className="my-20">
                    {/* commitment section */}
                    <Commitment />
                </section>
                <section className="my-20"> 
                    {/* whay us section */}
                    <WhayUs />
                </section>
                <section className="mb-20">
                    {/* medai section */}
                    <Media />
                </section>
            </div>
        </>
    )
}