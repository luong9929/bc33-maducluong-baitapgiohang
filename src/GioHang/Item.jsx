import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {data,xemChiTiet,them} = this.props
    return (
      <div>
        <div className="card">
            <img src={data.hinhAnh} alt="" width={400} height={400}  className="mt-2" style={{objectFit:'contain'}}/>
            <div className="card-body">
                <h3>{data.tenSP}</h3>
                <button className='btn btn-success me-3' onClick={()=>{
                    xemChiTiet(data)
                }}>Xem Chi Tiết</button>
                <button className='btn btn-danger' onClick={()=>{
                  them(data)
                }}  >Thêm Giỏ Hàng</button>
            </div>
        </div>

       
      </div>
    )
  }
}
