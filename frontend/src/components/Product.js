import "./Product.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCatalog} from "../redux/actions/productActions";

const Product = ({imageUrl, description, price, name, productId}) => {

    const dispatch = useDispatch();
    const onRemoveFromCatalog = (id) => {
        dispatch(removeFromCatalog(id))
    }

    return (
        <div className="product">
            <img src={imageUrl} alt={name}/>

            <div className="product__info">
                <p className="info__name">{name}</p>

                <p className="info__description">{description.substring(0, 100)}...</p>

                <p className="info__price">${price}</p>

                <Link to={`/product/${productId}`} className="info__button">
                    Просмотр
                </Link>

                <div className="info__button" onClick={() => onRemoveFromCatalog(productId)}>Удалить из каталога</div>
            </div>
        </div>
    );
};

export default Product;
