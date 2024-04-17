import { PricingModel } from "../models/pricing.model"

type ToggleProps = {
    toggle: boolean
}

const PriceCard = (props: PricingModel & ToggleProps) => {
    return (
        <div className="price_card_container ">
            <h2>{props.mode}</h2>
            <p><span>$</span>{props.toggle ? props.monthly : props.yearly}</p>
            <div className="price_description">
                <div className="line"></div>
                <p>{props.storage}</p>
                <div className="line"></div>
                <p>{props.users}</p>
                <div className="line"></div>
                <p>{props.send}</p>
                <div className="line"></div>
            </div>
            <a href="#">LEARN MORE</a>
        </div>
    )
}
export default PriceCard