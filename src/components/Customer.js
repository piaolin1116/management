
import React, { Component } from "react";

class Customer extends Component{
    render(){
        return (
            <div>
                <CustomerProfile
                    id={this.props.id}
                    name={this.props.name}
                    image={this.props.image}
                />
                <CustomerInfo
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    job={this.props.job}
                />
            </div>
        )
    }
}

class CustomerProfile extends Component{
    render(){
        return (
            <div>
                <image src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component{
    render(){
        return (
            <div>
                <div>{this.props.birthday}</div>
                <div>{this.props.gender}</div>
                <div>{this.props.job}</div>
            </div>
        )
    }
}

export default Customer;