import {useState} from "react";
import {useDispatch} from "react-redux";

import {addProduct} from "../redux/actions/productActions";

import "./Product.css";

const AddProduct = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        countInStock:1,
        imageUrl:""
    })

    const onAddHandle = () => {
        dispatch(addProduct(data))
        setData({
            name:"",
            description:"",
            price:"",
            countInStock:1,
            imageUrl:""
        })
    }

    return (
        <div className="product">
            <div className="input__area">
                <div className="info__name">Название</div>
                <input type="text"
                       name="name"
                       className="add__input"
                       value={data.name}
                       onChange={(e) => setData({...data, name:e.target.value})}
                />
            </div>
            <div className="input__area">
                <div className="info__name">Описание</div>
                <input type="text"
                       name="description"
                       className="add__input"
                       value={data.description}
                       onChange={(e) => setData({...data, description:e.target.value})}
                />
            </div>
            <div className="input__area">
                <div className="info__name">Цена</div>
                <input type="text"
                       name="price"
                       className="add__input"
                       value={data.price}
                       onChange={(e) => setData({...data, price:e.target.value})}
                />
            </div>
            <div className="input__area">
                <div className="info__name">Количество</div>
                <input type="text"
                       name="countInStock"
                       className="add__input"
                       value={data.countInStock}
                       onChange={(e) => setData({...data, countInStock:e.target.value})}
                />
            </div>
            <div className="input__area">
                <div className="info__name">Ссылка на изображение</div>
                <input type="text"
                       name="imageUrl"
                       className="add__input"
                       value={data.imageUrl}
                       onChange={(e) => setData({...data, imageUrl:e.target.value})}
                />
            </div>

            <div className="info__button" onClick={onAddHandle}>Добавить</div>
        </div>
    );
};

export default AddProduct;
