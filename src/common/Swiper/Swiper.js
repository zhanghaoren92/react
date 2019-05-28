import React,{Component} from 'react'
import banner from './assets/img/banner.jpg';
import banner1 from './assets/img/banner1.jpg';
import Swiper from 'swiper/dist/js/swiper.js'
export default class Swiper1 extends Component{
    render(){
        // console.log(this.props.img)
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.img?<div className="swiper-slide"><img src={this.props.img} /></div>:<div className="swiper-slide"><img src={banner} /></div>
                    }
                    
                    <div className="swiper-slide"><img src={banner1} /></div>
                    <div className="swiper-slide"><img src={banner} /></div>
                </div>
                
                <div className="swiper-pagination"></div>
               
                <div className="swiper-scrollbar"></div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
           
            loop: true, // 循环模式选项
            
            // // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })        
    }
}