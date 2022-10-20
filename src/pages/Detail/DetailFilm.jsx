import moment from "moment/moment";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieListAction } from "../../store/action/MovieAction";
import { MovieReducer } from "../../store/reducer/MovieReducer";
import { getMovieDetail } from "../../storeToolKit/quanLiPhim";
// import { Player } from "video-react";
export const DetailFilm = () => {
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.quanLiPhimReducer);
  const param = useParams();

  useEffect(() => {
    // dispatch(MovieListAction.getFilmById(param.idFilm));
    dispatch(getMovieDetail(param.idFilm));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img
            className="img-fluid"
            src={movieDetail?.hinhAnh}
            alt={movieDetail?.hinhAnh}
          />
        </div>
        <div className="col-7">
          <h1>{movieDetail?.tenPhim}</h1>
          <p>{moment(movieDetail?.ngayKhoiChieu).format("DD-MM-YYYY")}</p>
          <p>{movieDetail?.moTa}</p>
          <button className="btn btn-primary">Trailer</button>
          <button className="btn btn-primary ms-3">Xem Phim</button>
        </div>
      </div>
      <div className="row">
        {/* <video
          ref={refVideo.current}
          src={movieDetail.trailer}
          type="video/mp4"
        ></video> */}
        <iframe
          width="800"
          height="480"
          src={movieDetail?.trailer}
          title="ANT-MAN Trailer 2 (2015)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
