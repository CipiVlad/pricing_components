import '../scss/PriceCard.scss'
import { PricingModel } from "../models/pricing.model"

type ToggleProps = {
    toggle: boolean
}

const PriceCard = (props: PricingModel & ToggleProps) => {
    console.log(props.toggle);

    return (
        <div className="price_card_container">
            <h2>{props.mode}</h2>
            <p>{props.toggle ? props.yearly : props.monthly}</p>
            <div className="price_description">
                <p>{props.storage}</p>
                <p>{props.users}</p>
                <p>{props.send}</p>
            </div>
            <a href="#">Learn More</a>
        </div>
    )
}
export default PriceCard