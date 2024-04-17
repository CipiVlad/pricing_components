import '../scss/PriceList.scss'
import PriceCard from "./PriceCard"
import { basic, master, professional } from "../models/pricing.model"


type Props = {
    toggle: boolean
}

const PriceList = ({ toggle }: Props) => {

    return (
        <div className="price_list_container">
            {basic && <PriceCard {...basic} toggle={toggle} />}
            {professional && <PriceCard {...professional} toggle={toggle} />}
            {master && <PriceCard {...master} toggle={toggle} />}
        </div>
    )
}
export default PriceList