import { Component } from "react";


class Credito extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renta: 0,
            plazo: 10
        }
    }

    render() {
        return (
            <>
            <h2> {this.props.formularioHipotecario}</h2>
            <form >
               <input type="number" 
               name="renta" 
               placeholder="Coloca tu renta líquida mensual." 
               value={this.state.renta}
                onChange={() => this.setState({
                    renta: this.value,
                    plazo: this.value
                })}
               /> 
               <div></div>
               <input type="number" name="plazo" placeholder="Coloca la cantidad de años del crédito 10, 20 o 30" value={this.state.plazo}/>
               <div></div>
               <input type="submit" name="submit" value="Calcular Crédito"/>
               <div></div>
               <span>El Banco te aprobaría un crédito aproxímadamente de {this.state.renta * 60}</span>
                
            </form>
            </>
        )
    }
 }


 export default Credito