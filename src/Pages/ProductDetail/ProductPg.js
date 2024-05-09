import React from "react";
import './Product.css';
import shoe from '../../images/Blog5.png';
import shoe2 from '../../images/bright.png';
import shoe3 from '../../images/Blog6.png';
import shoe4 from '../../images/Blog7.png';

class Product extends React.Component{

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes",
                "src": [
                    shoe4,
                    shoe3,
                    shoe2,
                    shoe
                ],
                "description": "UI/UX designing, React js creation",
                "content": "long long description long long description long long description long long description long long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long description long long description long long descriptionlong long description long long description long long description",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index =>{
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i<images.length; i++){
            images[i].className = images[i].className.replace("active" , "");
        }
        images[index].className = "active";
    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = 'active';
    }

    render(){
        const {products , index} = this.state;
        return(
            <div className="product_description">
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt="nike_shoes"  />
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>Rs.{item.price}/-</span>
                                </div>
                                <div className="colors">
                                    {
                                        item.colors.map((color , index) => (
                                            <button style={{background: color}} key={index}></button>
                                        ))
                                    }
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img , index) => (
                                            <img src={img} alt="other images" key={index}
                                            onClick={() => this.handleTab(index)} />
                                        ))
                                    }
                                </div>
                                <button className="cart">Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Product;