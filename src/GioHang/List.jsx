import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderData = () => {
    const { data, xemChiTiet,them } = this.props;
    return data.map((item, index) => {
      return (
       
          
            <div className="col-4" key={index}>
              <Item data={item} xemChiTiet={xemChiTiet} them={them}/>
            </div>
         
            
         
       
      );
    });
  };

  render() {
    const {check} = this.props
    return (
      <div>
       
        <div className="row">{this.renderData()}</div>
        <div className="row mt-5">
            <div className="col-4">
              <h3 className="text-center mb-3">{check.tenSP}</h3>
              <img
                src={check.hinhAnh}
                alt=""
                height={400}
                className="w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-8">
              <h3 className="text-center mb-3">Thông tin chi tiết</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <td>{check.manHinh}</td>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <td>{check.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th>Cam trước</th>
                    <td>{check.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th>Cam sau</th>
                    <td>{check.cameraSau}</td>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <td>{check.ram}</td>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <td>{check.rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
      </div>
    );
  }
}
