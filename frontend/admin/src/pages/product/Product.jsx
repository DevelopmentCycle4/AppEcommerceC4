import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Producto</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Crear</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Analisis de Ventas" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Ventas:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">activo:</span>
                            <span className="productInfoValue">si</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">en stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
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
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
