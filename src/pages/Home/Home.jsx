import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieListAction } from "../../store/action/MovieAction";
import cl from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieList, quanLiPhimActions } from "../../storeToolKit/quanLiPhim";
import { useQuanLiPhim } from "../../storeToolKit/quanLiPhim";
import { Skeleton } from "antd";
import { useQueryUrl } from "../../Hooks/useQueryUrl";
export const Home = () => {
  const dispatch = useDispatch();
  const [paramsUrl, setParamsUrl] = useSearchParams({ show: true });
  // const { movieList } = useSelector((state) => state.MovieReducer);
  // const { movieList, isFetching, error, number } = useSelector(
  //   (state) => state.quanLiPhimReducer
  // );
  const { movieList, isFetching, error, number } = useQuanLiPhim();
  // console.log(error);
  const [query, setQueryUrl] = useQueryUrl({
    show: true,
  });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  if (true) {
    return (
      <div className="container">
        <div className="row">
          {[...Array(20)].map((e, index) => {
            return (
              <div key={index} className="col-3 mt-3">
                <Skeleton.Button block active style={{ height: 300 }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="Home container">
      <button
        className="btn-primary"
        onClick={() => {
          dispatch(quanLiPhimActions.increase(1));
        }}
      >
        increase-{number}
      </button>
      <div>
        <Button
          className={cl("ms-2", { active: paramsUrl.get("show") === "true" })}
          // onClick={() => {
          //   setParamsUrl({
          //     show: true,
          //   });
          // }}
          onClick={() => {
            setParamsUrl({
              show: true,
            });
          }}
        >
          Đang chiếu
        </Button>
        <Button
          className={cl("ms-3", { active: paramsUrl.get("show") === "false" })}
          // onClick={() => {
          //   setParamsUrl({
          //     show: false,
          //   });
          // }}
          onClick={() => {
            setQueryUrl({
              show: false,
            });
          }}
        >
          Sắp chiếu
        </Button>
      </div>
      <div className="row">
        {movieList
          .filter(
            // (items) => items.sapChieu.toString() === paramsUrl.get("show")
            (items) => items.sapChieu.toString() === query.show
          )
          .map((item, index) => (
            <div className="col-3" key={index}>
              <div className="card mt-3">
                <img
                  className="img-fluid"
                  src={item.hinhAnh}
                  alt={item.hinhAnh}
                  style={{ height: 380 }}
                />
                <div className="card-body mt-auto ">
                  <p>{item.tenPhim}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => navigate(`/detail/${item.maPhim}`)}
                  >
                    Chi Tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
const Button = styled.button`
  border-radius: 5px;
  border: blue;
  transition: all 0.5s;
  &:hover {
    background-color: #2196f3;
  }
  &.active {
    background-color: blue;
    color: white;
  }
`;
