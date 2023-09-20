export const CreditCard = () => {
    return (
        <div className="credit_card">
            <div className="free_shipping">
                <span className="text_credit_card">Free Shipping</span>
            </div>
            <div className="secure_credit_card">
                <img src="icons/lock.svg" alt="" />
                <span className="text_credit_card">Secure 256-bit SSL encryption.</span>
            </div>
            <div className="franchises">
                <img className="img_franchises" src="icons/visa.svg" alt="" />
                <img className="img_franchises" src="icons/shop_pay.svg" alt="" />
                <img className="img_franchises" src="icons/paypal.svg" alt="" />
                <img className="img_franchises" src="icons/mastercard.svg" alt="" />
                <img className="img_franchises" src="icons/gpay.svg" alt="" />
                <img className="img_franchises" src="icons/apple_pay.svg" alt="" />
                <img className="img_franchises" src="icons/amex.svg" alt="" />
            </div>
        </div>
    )
}