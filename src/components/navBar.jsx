import React from "react"
import '../scss/app.scss';
function NavBar(props){
    return(
        <div className="categories">
            <ul>
              <li className="active">Все</li>
              {props.items.map((name, index) => (
                  <li key={`${name}_${index}`}> {name}</li>
              ))}
            </ul>
          </div>
    )
}
export default NavBar;