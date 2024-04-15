import '../scss/TogglePrice.scss'

type Props = {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const TogglePrice = ({ toggle, setToggle }: Props) => {

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <header>
                <h1>Our Pricing</h1>
            </header>

            <div className="toggle_flex_container">
                <p>Annually</p>

                {/* toggle switch */}
                {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch */}
                <label className='switch'>
                    <input type="checkbox" />
                    <span className='slider round' onClick={handleToggle}></span>
                </label>

                <p>Monthly</p>
            </div>
        </>

    )
}
export default TogglePrice