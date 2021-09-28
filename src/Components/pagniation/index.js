import {useState ,useEffect } from "react";
import { Pagination, Card, Spin } from "antd";

const List = () => {
  const [state, setState] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setState([]);
    fetch(`https://api.unsplash.com/search/collections?page=${pageNumber}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
      .then((res) => res.json())
      .then((res) => setState(res.results));
  }, [pageNumber]);

  const handleChange = page => {
    setPageNumber(page);
  };
  return (
    <div className="container">
      {state.length > 0 ? (
          state.map((ele,index) => (
            <Card title={ele.title} key={index}  bordered={true} className="card">
             <img  src={ele.cover_photo.urls.small} alt={ele.title} />
          </Card>
    
              ))
              ) : <Spin/>}
      <Pagination 
      current={pageNumber} 
      onChange={handleChange} 
      total={70} />
    </div>
  );
};

export default List;
