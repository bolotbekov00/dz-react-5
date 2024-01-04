import {useEffect, useState} from "react";
import axios from "axios";
import "./market.css"
import {purchaseItem} from "../store/action.js";
import {connect} from "react-redux";

function Marketplace({ purchaseItem }) {

    const [data, setData] = useState([])

    useEffect(() => {
        const ApiStore = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products?limit=21")
                setData(response.data.products)
                console.log(response.data.products)
            } catch (e) {
                console.log(e)
            }
        }
        ApiStore()
    }, [])

    return (
        <div className="market">
            {data.map((datas) => (
            <div key={datas.id} className='block-product'>
                <img src={datas.thumbnail} alt="" className="img-product"/>
                <h2 className="title-product">{datas.title}</h2>
                <p className="dec-product" >{datas.description}</p>
                <button onClick={purchaseItem} >{datas.price}</button>
            </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        purchasedItems: state.purchasedItems
    };
};

const mapDispatchToProps = {
    purchaseItem
};
export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);