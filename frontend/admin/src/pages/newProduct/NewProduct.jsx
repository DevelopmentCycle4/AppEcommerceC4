import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Nuevo Producto</h1>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nombre del Producto</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>Price</label>
            <input type="text" placeholder="$3000" />
            <label>Categoria</label>
            <select name="inStock" id="idStock">
              <option value="1">Ropa</option>
              <option value="2">Calzado</option>
              <option value="3">Electrodomesticos</option>
              <option value="4">Video Juegos</option>
              <option value="5">Accesorios</option>
            </select>
            <label>En Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
            <label>Activo</label>
            <select name="active" id="active">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormLeft">
            <label htmlFor="description_field">Descripcion</label>
            <textarea className="form-control" id="description_field" rows="15" placeholder="Los nuevos AirPods te brindan una experiencia unica. Sólo sácalos del estuche de carga y estarán listos para que los uses con tu iPhone, Apple Watch, iPad o Mac. Los AirPods son casi mágicos. Se configuran con un simple toque, se activan automáticamente y se mantienen siempre conectados. Saben cuándo están en tus oídos y se detienen cuando te los quitas."></textarea>
          </div>
          <div className="productFormRight">
            <div className="addProductItem">
              <label>Imagen</label>
              <input type="file" id="file" />
            </div>
            <button className="newproductButton">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
}
