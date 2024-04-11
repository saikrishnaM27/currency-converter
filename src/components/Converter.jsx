import { useEffect, useState } from "react"
import { countries } from '../contries/countries'
const Converter = () => {
    //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json

    const [input, setInput] = useState(1);
    const [from, setFrom] = useState('aud');
    const [to, setTo] = useState('inr');
    const [cAmt, setCAmt] = useState(0);
    const eArr = Object.entries(countries);
    const [fromRate, setFromRate] = useState()

    const handleConvert = () => {

    }

    const API_Req = () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCAmt(data[`${from}`][`${to}`] * input)
                console.log(data)
            })
    }

    useEffect(() => {
        API_Req();
    })




    return (

        <div className="converterApp w-50 m-auto border p-4">
            <div className="inputField d-flex justify-content-evenly align-items-center mb-4">
                <div className="amount">
                    <h3>Amount</h3>
                    <input type="text" className="form-control" placeholder="Enter Amount" onChange={(e) => { setInput(e.target.value) }} value={input} required />
                </div>
                <div className="from">
                    <h3>From</h3>
                    <select className="form-select w-100" value={from} onChange={(e) => setFrom(e.target.value)}>

                        {
                            eArr.map((country) => {
                                return (
                                    <option value={country[1].currency_code} key={country[1].country_name}>{country[1].country_name}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className="switch">
                    <h3><b><i className="bi bi-arrow-left-right"></i></b></h3>
                </div>

                <div className="to">
                    <h3>To</h3>
                    <select className="form-select" value={to} onChange={(e) => setTo(e.target.value)}>
                        {
                            eArr.map((country) => {
                                return (
                                    <option value={country[1].currency_code} key={country[1].country_name}>{country[1].country_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            {/* <div className="convert ">
                <button className="btn btn-primary w-25" onClick={handleConvert}>Convert</button>
            </div> */}
            <div className="outputField px-4 mt-4 border py-2">
                <h3 className="">Converted Amount is:</h3>
                <h3 className="px-4 mt-4 text-success">{cAmt}</h3>
            </div>
        </div >
    )
}

export default Converter