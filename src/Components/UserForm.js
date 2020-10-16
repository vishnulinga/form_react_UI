import React,{useEffect, useState} from "react";
import csc from 'country-state-city'

const UserForm = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [country,setCountry] = useState("")
    const [state,setState] = useState("")
    const [city,setCity] = useState("")
    const [address1,setAddress1] = useState("")
    const [address2,setAddress2] = useState("")
    const [gender,setGender] = useState("")
    const [maritalstatus,setMaritalStatus] = useState("")
    const [favfood,setFavfood] = useState("")
    const [favcolour,setFavcolour] = useState("");
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    useEffect(()=>{
        let newcountries = csc.getAllCountries()
        setCountries(newcountries)
    },[])

    useEffect(()=>{
        let newstates = csc.getStatesOfCountry(country)
        setStates(newstates)
    },[country])

    useEffect(()=>{
        let newcities = csc.getCitiesOfState(state)
        setCities(newcities)
    },[state])

    let countryOptions = countries.map((country)=>{
        return (<option key={country.id} value={country.id}>{country.name}</option>)
    })

    let statesOptions = states.map((state)=>{
        return (
            <option key={state.id} value={state.id}>{state.name}</option>
        )
    })

    let citiesOptions = cities.map((city)=>{
        return (
            <option key={city.id} value={city.name}>{city.name}</option>
        )
    })

    let onSubmit = (event) => {
    event.preventDefault();
    let data = {name,email,country,state,city,address1,address2,gender,maritalstatus,favfood,favcolour}
    fetch('https://formreactserver.herokuapp.com/save', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(async (res) => {
        console.log(res)
        setName("")
        setEmail("")
        setFavcolour("")
        setGender("")
        setAddress1("")
        setAddress2("")
        setMaritalStatus("")
        setState("")
        setCity("")
        setCountry("")
        setFavfood("")
    })
    .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
    });
}   

    return (
        <form onSubmit={onSubmit}>
                <h3>User Details</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input required className="form-control" type="text" placeholder="Enter Name" value={name} onChange={(event)=>(setName(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input required className="form-control" type="email" placeholder="Enter Email" value={email} onChange={(event)=>(setEmail(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country" value = {country} required 
                        className = "form-control inputs" onChange = {(e) => {
                            setCountry(e.target.value)
                        }} >
                            <option value={null}>--</option>
                            {countryOptions}
                    </select>
                </div>

                <div className="form-group">
                <label htmlFor="state">State</label>
                    <select name="state" id="state" value = {state} required 
                        className = "form-control inputs" onChange = {(e) => {
                            setState(e.target.value)
                        }} >
                            <option value={null}>--</option>
                            {statesOptions}
                    </select>
                </div>

                <div className="form-group">
                <label htmlFor="city">City</label>
                    <select name="city" id="city" value = {city} required 
                        className = "form-control inputs" onChange = {(e) => {
                            setCity(e.target.value)
                        }} >
                            <option value={null}>--</option>
                            {citiesOptions}
                    </select>
                </div>

                <div className="form-group">
                    <label>Address1</label>
                    <input required className="form-control" type="text" placeholder="Enter Address1" value={address1} onChange={(event)=>(setAddress1(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label>Address2</label>
                    <input required className="form-control" type="text" placeholder="Enter Address2" value={address2} onChange={(event)=>(setAddress2(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" id="gender" value = {gender} required 
                        className = "form-control inputs" onChange = {(e) => {
                            setGender(e.target.value)
                        }} >
                            <option value={null}>--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Marital Status</label>
                    <select name="marital" id="marital" value = {maritalstatus} required 
                        className = "form-control inputs" onChange = {(e) => {
                            setMaritalStatus(e.target.value)
                        }} >
                            <option value={null}>--</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">UnMarried</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Favourite Food</label>
                    <input required className="form-control" type="text" placeholder="Enter Fav Food" value={favfood} onChange={(event)=>(setFavfood(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label>Favourite Colour</label>
                    <input required className="form-control" type="text" placeholder="Enter Fav Colour" value={favcolour} onChange={(event)=>(setFavcolour(event.target.value))}/>
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    )
}

export default UserForm;