import React, { Component } from 'react'
import List from './List'
import Modal from './Modal'
const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]
export default class GioHang extends Component {

    state = {
        chiTiet:{
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" 
        },
        gioHang:[
          
            
        
      ]
    }

    xemChiTiet = (click) =>{
        this.setState({
            chiTiet : click
        })
    }
    themGioHang = (sp) =>{
      let spGioHang ={
          
        "maSP": sp.maSP, "tenSP": sp.tenSP,"giaBan": sp.giaBan,"hinhAnh": sp.hinhAnh,"soLuong":1
    
    }
    let gioHangCapNhat = [...this.state.gioHang]
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP)
    if(index!==-1){
      gioHangCapNhat[index].soLuong +=1
    }else{
      gioHangCapNhat.push(spGioHang)
    }
       this.setState({
          gioHang:gioHangCapNhat
       })
    }
    xoaGioHang = (sp )=>{
      let gioHangCapNhat = this.state.gioHang.filter(i => i.maSP !== sp)
      
      this.setState({
        gioHang:gioHangCapNhat
      })
    }
    tangGiamSoLuong = (maSp,tangGiam) => {
      let gioHangCapNhat = [...this.state.gioHang]
      let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSp )
      if(tangGiam){
        gioHangCapNhat[index].soLuong += 1
      }else{
        if(gioHangCapNhat[index].soLuong > 1){
          gioHangCapNhat[index].soLuong -=1
        }
      }
      this.setState({
        gioHang:gioHangCapNhat
      })
    }

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl,spGH,i)=>{
      return tsl += spGH.soLuong
    },0)
    return (
      <div className='container'>
         <h3 className="text-center text-success"> Bài tập giỏ hàng </h3>
        <p className="text-end ">
          <a href="#" className="text-decoration-none text-danger " data-bs-toggle="modal" data-bs-target="#modalId">
            Giỏ hàng ({tongSoLuong})
          </a>
        </p>
            <Modal gioHang={this.state.gioHang} xoa={this.xoaGioHang} tangGiam={this.tangGiamSoLuong}/>
            <List data={data} xemChiTiet={this.xemChiTiet} check={this.state.chiTiet} them={this.themGioHang}/>
      </div>
    )
  }
}
