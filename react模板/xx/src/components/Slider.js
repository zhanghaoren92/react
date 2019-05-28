import React,{Component} from 'react';
import './Slider.css';

import ReactSwipe from 'react-swipe';

class Slider extends Component{
    render(){
        return (
			<div className="banenr" id="banner_box">
				<ReactSwipe className="carousel" swipeOptions={{
					continuous: true,
					speed:1000,
					auto:1000,
			
				}}>
					<div><img className="dis_block" src="/upload/banner.jpg" alt=""/>	</div>
					<div><img className="dis_block" src="/upload/8.jpg" alt=""/>	</div>
					<div><img className="dis_block" src="/upload/4.jpg" alt=""/>	</div>
				</ReactSwipe>
           </div>
        )
	}
	
};

export default Slider;