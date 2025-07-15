


export default function FecthData(){
    fetch("http://localhost")
        .then(res => res.json)
        .then(data=> {console.log(data)})
    return (
        //use reference api from Rick&Morty API!!!!!

        <div>
            <h1>User-data</h1>
        </div>
    )
}