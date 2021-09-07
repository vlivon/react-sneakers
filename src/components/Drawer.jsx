

function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="mb-30 d-flex justify-between ">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>
                <div className="items flex">
                    <div className="cartItem d-flex align-center mb-20">

                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center">

                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                    </div>



                </div>
                <div className="cartTotalBlock">
                    <ul >

                        <li className="d-flex mb-10">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>

                    <button className="greenButton p-15">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;