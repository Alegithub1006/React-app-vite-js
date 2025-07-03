import {useState} from "react";
import React from "react";

export default function CounterWithName() {
    const [name, setName]= useState("");
    const [age, setAge]= useState(0);

    function  HandleReduceNumber(){
        setAge((currentAge=>currentAge - 1))
    }
    function  HandleAddNumber(){
        setAge((currentAge=>currentAge + 1 ))
    }

    return(
        <div className={'flex flex-col gap-4 '}>
            <input className={'bg-gray-100 text-gray-800 border rounded-sm text-center'} type={'text'} value={name} onChange={e=> setName(e.target.value)}/>
            <div className={'flex gap-1 justify-center'}>
            <button onClick={HandleReduceNumber}>-</button>
                {age}
            <button onClick={HandleAddNumber}>+</button>
            </div>

            <p>hi my name is {name}, i am {age} years old</p>
        </div>
    )
};

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0,

        }
    }
        render(){
            const HandleReduceAge = () => {
                this.setState(currentState => {
                    return {age: currentState.age - 1}
                });
            }
            const HandleAddAge = () => {
                this.setState(currentState =>{return {age: currentState.age + 1}});
            }

            return (
                <div className={'flex flex-col gap-4 '}>
                    <input className={'bg-gray-100 text-gray-800 border rounded-sm text-center'} type={'text'}
                           value={this.state.name} onChange={e => this.setState({name:e.target.value})}/>
                    <div className={'flex gap-1 justify-center'}>
                        <button onClick={HandleReduceAge}>-</button>
                        {this.state.age}
                        <button onClick={HandleAddAge}>+</button>
                    </div>

                    <p>hi my name is {this.state.name}, i am {this.state.age} years old</p>
                </div>
            );
        }
    }

