import "./HomeScreen.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// Components
import Product from "../components/Product";
import AddProduct from "../components/AddProduct";

//Actions
import {filterProducts, getProducts as listProducts} from "../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const {products, loading, error} = getProducts;

    const setSorting = (sortType) => {
        dispatch(filterProducts(sortType))
    }

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Каталог шедевров</h2>
            <div className="header__wrapper">
                <div className="info__button" onClick={() => setSorting(1)}>Сначала дешевые</div>
                <div className="info__button" onClick={() => setSorting(-1)}>Сначала дорогие</div>
            </div>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Загрузка...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products && products.map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
                <AddProduct/>
            </div>
        </div>
    );
};

export default HomeScreen;
