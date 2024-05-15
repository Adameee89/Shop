import { FaLocationDot } from "react-icons/fa6"
import { CiDeliveryTruck } from "react-icons/ci"

function HeaderComponent() {
  return (
    <header className="container mx-auto flex flex-col md:flex-row justify-center gap-[20px] md:justify-between items-center h-[90px]">
        <p>Need help? Call us: (+98) 123-456-789</p>
        <div className="flex gap-[20px]">
            <div className="flex gap-[20px] items-center">
                <FaLocationDot />
                <span>Our Store</span>
            </div>
            <div className="flex gap-[20px] items-center">
                <CiDeliveryTruck />
                <span>Our Store</span>
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent