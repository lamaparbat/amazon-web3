import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Paginate = ({ chunk, increasePaginateCount }) => {
  const loopCount = chunk / 20;

  return (
    <div className="paginate__container d-flex">
      {Array(loopCount)
        .fill("")
        .map((d, i) => (
          <button
            className="btn px-4 py-1 rounded-0 btn-primary mx-2"
            onClick={() => increasePaginateCount(i * 20 + 20)}
            key={i}
          >
            {i}
          </button>
        ))}
      <button
        className="btn px-4 py-1 rounded-0 btn-primary"
        onClick={() => increasePaginateCount(chunk + 20)}
      >
        Next
      </button>
    </div>
  );
};


const fetchContent = async (limit,setData) => {
  const url = '';
  const res = await axios.get(`${url}?limit=${limit}`);
  setData(res);
}


export default function App() {
  const [paginateCount, increasePaginateCount] = useState(20);
  const [data, setData] = useState([])

  useEffect(() => {
    fetchContent(paginateCount, setData)
  });

  return (
    <div className="App p-5 d-flex flex-column jusitfy-center">
      <Paginate
        chunk={paginateCount}
        increasePaginateCount={increasePaginateCount}
      />
      <br />
      <div>{
         data.map((d, i) => <span key={i}>{d.id}</span>)
      }</div>
    </div>
  );
}
