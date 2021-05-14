
/*import React, { Component } from 'react'
import "./estiloimagen.css"
export default class AppImagen extends Component{
    state={
        propImg: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png"
    }
    imageHandler = (e) =>{
        let reader = new FileReader();
        reader.onload= () =>{
            if (reader.readyState ===2){
                this.setState({propImg: reader.result})
            }
        reader.readAsDataURL(e.target.files[0])
        }
    }
    render(){
        const {propImg} = this.state
        return(
            <div>
                <div className = "container">
                    <h2 className="heading">Agregar Imagen</h2>
                    <div className="img-holder">
                        <img src={propImg} alt="" className="img" id="img"/>
                    </div>
                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
                    <div className="label">
                        <label htmlFor="input" className="image-upload">
                            <i className="material-icons">add_photo_alternate</i>
                            Subir Imagen
                        </label>
                    </div>
                </div>
            </div>
        )
    }
};
*/
import React, { Component } from 'react';
import './estiloimagen.css';
export class AppImagen extends Component {
  state={
    propiedadImg:'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({propiedadImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { propiedadImg} = this.state
		return (
			<div className="card">
                <div className="principal">
                    <img src={propiedadImg} alt="" id="img" className="imagen-upload"  />
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
                            Agregar Imagen
                           
                            <input class="btn btn-light" type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                        </label>
                    </div>
                </div>
			</div>
			
		);
	}
}

export default AppImagen;
/*
<div className="card principal">
    <div className="display-box">
        <div className="icon-text-box">
            <div className="upload-icon">
                <img src={propiedadImg} alt="" id="img" className="fa-upload" />
            </div>
        </div>
        <div className="upload-text">
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
            <div className="label">
                <label className="image-upload" htmlFor="input">
                <i className="material-icons">add_photo_alternate</i>
                    Subir Imagen
                </label>
            </div>
        </div>      
    </div>
                
</div>
*/