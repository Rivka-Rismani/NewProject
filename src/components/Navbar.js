import React, {  useRef,useState } from 'react'
import { getAllData } from '../services/ApiService'


const Navbar = (props) => {
  const serchWord = useRef("")
  const [sortList, setSortList] = useState(true)

  const clear = () => {
    serchWord.current.value = ""
  }
  const sort = () => {
    setSortList(!sortList)
    const data = props.items
    const sortProperty = 'Title';
    const sorted =sortList===true? data.sort((a, b) => b[sortProperty] - a[sortProperty]):data.sort((a, b) =>a[sortProperty] - b[sortProperty]);
    props.setData(sorted)
}
const refresh = () => {
  const data = getAllData()
  props.setData(data)
  clear()
}
const changeValue = () => {
  const data = []
  getAllData().map((item) => {
    item.Title.includes(serchWord.current.value) || item.Year.includes(serchWord.current.value) && data.push(item)
  })
  props.setData(data)
}
return (
  <>
    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <input className="form-control" type="text" placeholder="Search filed" aria-label="default input example" ref={serchWord} onChange={changeValue} />
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary ml-3" onClick={clear}>clear</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary ml-3" onClick={refresh}>refresh</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary ml-3" onClick={sort}>sort</button>
        </li>
      </ul>
    </nav>
  </>
)
}

export default Navbar
