import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudGet, crudDelete, crudPost, crudPut } from "./redux/action/crud";

const Crud = () => {
  const { data } = useSelector((store) => store.crud);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [id, setid] = useState(-1);
  useEffect(() => {
    dispatch(crudGet());
  }, []);
  const formsubmit = () => {
    let datas = {
      id: Date.now(),
      name: name,
      age: age,
    };
    if (id > 0) {
      dispatch(crudPut({ id, data: { name, age } }));
      setid(-1);
    } else dispatch(crudPost(datas));
    setname("");
    setage("");
  };
  const crudEdit = (data) => {
    setid(data.id);
    setname(data.name);
    setage(data.age);
  };
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              name="age"
              className="form-control my-4"
              placeholder="age"
              value={age}
              onChange={(e) => {
                setage(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={formsubmit}
              className="btn btn-primary w-100"
            >
              Submit
            </button>
          </div>
        </div>
        <table className="table mt-5 table-hover table-success">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((v) => (
              <tr key={v.id}>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
                <td>{v.age}</td>
                <td>
                  <button
                    onClick={() => dispatch(crudDelete(v.id))}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => crudEdit(v)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Crud;
