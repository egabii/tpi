
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
                    <img src={propiedadImg} alt="" id="img" className="imagen-upload rounded mx-auto d-block"  />
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
