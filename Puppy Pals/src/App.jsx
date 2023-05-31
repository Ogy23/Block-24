import {puppyList} from './data.js'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
          return <button className="PuppyButton" onClick={()=>{setFeatPupId
          (puppy.id)}} key={puppy.id}>{puppy.name}</button>
        })
      }
    {featPupId && (
      <div className="puppyId">
        <h2>{featuredPup.name}</h2>
        <ul>
          <li className="puppyDetails">Age: {featuredPup.age}</li>
          <li className="puppyDetails">email: {featuredPup.email}</li>
        </ul>
      </div>
    )}
    </div>

  )
}

export default App
