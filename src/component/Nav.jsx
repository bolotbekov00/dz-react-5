import React from 'react';
import { connect } from 'react-redux';

function Navbar({ purchasedItems }) {
    return (
        <div>
            <p>Количество купленных товаров: {purchasedItems}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        purchasedItems: state.purchasedItems
    };
};

export default connect(mapStateToProps)(Navbar);
