import { Banner } from "../../components/banner/Banner"
import { AutoPlay } from "../../components/slider/Slider"

export function HomePage() {
    return (
        <section>
            <Banner />
            <div className="slider container">
                <h2>Актуальные товары</h2>
                <AutoPlay />
            </div>
            
        </section>
    )
}