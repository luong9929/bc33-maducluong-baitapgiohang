import React, { Component } from "react";
import GioHang from "./GioHang";

export default class Modal extends Component {
  render() {
    const { gioHang,xoa,tangGiam } = this.props;
    return (
      <div>
        <div>
          {/* Modal trigger button */}
          {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
    Launch
  </button> */}
          {/* Modal Body */}
          {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
          <div
            className="modal fade"
            id="modalId"
            tabIndex={-1}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                    Giỏ Hàng
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th> Tên sản phẩm</th>
                        <th> Số lượng </th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((spGH, index) => {
                        return (
                          <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>
                              <img
                                src={spGH.hinhAnh}
                                alt="..."
                                width={50}
                                height={75}
                              />
                            </td>
                            <td>{spGH.tenSP}</td>
                            <td>
                              <button className="btn btn-warning me-2 pb-2" onClick={()=>{
                                tangGiam(spGH.maSP,true)
                              }}>+</button>
                              {spGH.soLuong}
                              <button className="btn btn-warning ms-2 pb-2" onClick={()=>{
                                tangGiam(spGH.maSP,false)
                              }}>-</button>
                              </td>
                            <td>{spGH.giaBan.toLocaleString()}</td>
                            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                            <td><button className="btn btn-danger" onClick={()=>{
                              xoa(spGH.maSP)
                            }}> Xóa</button></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Place to the bottom of scripts */}
        </div>
      </div>
    );
  }
}
