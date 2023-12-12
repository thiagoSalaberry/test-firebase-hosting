import React, {ReactNode} from "react";
interface Props {
    productTitle: string;
    productPrice: number;
    productImg: string;
}
export class Product extends React.Component<Props> {
    render() {
        return (
            <li className="result-item">
                <div className="img-container">
                    <img className="product-img" src={this.props.productImg}/>
                </div>
                <label className="product-title">{this.props.productTitle}</label>
                <p className={`product-price ${this.props.productPrice < 20000 ? "green" : "red"}`}>${this.props.productPrice}</p>
            </li>
        );
    };
};