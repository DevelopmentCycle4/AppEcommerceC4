import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
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
              <Chart data={productData} dataKey="Sales" title="Analisis de Ventas"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgVEhUYGBgVGhgYGBgYGBkYFRgVGBwcGRgZGBocIy4lHB4rHxgYJjgmKzAxNTU1GiQ7QDszPy40NTQBDAwMEA8QHBESHzQrJCw0NDE9PzQ0NDQ1NTE0PzQxNDQxMTQ0NDQ0NDQ3NDExNDE0MTE2NDQ0NDU0NDE/PTc0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xABFEAACAQIDAwcIBwUIAwEAAAABAgADEQQSIQUxQQYiMlFhcZFScnOBobGy0QcTFDM0ksEjQmLh8BUkU2OCg5PSdKLCFv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQACAgICAwAAAAAAAAAAAAECEQMhEjEiQQQyof/aAAwDAQACEQMRAD8A7NERAREQExHKDbdLB0TVrHjZVGru53Ko9t+AEy0499KGLapjBTvzKCgW/jcZmPgVHjAl1eXGMrk/UhKScABne3C7NpfuAlh8djm6WJf1G3w2mv7PxuQWk5trHrgTi2KO/E1fzv8AOWWwtY769Q/63+ciHap65T+1D1wJJwdX/Gqfnb5yPiEqoL/X1Pzt85Q7UPXMdXxZqMVvw95t+sC9T2w6As+JqhR11nRfVY3PqlT9IBTRK9Zu4ufa7GaPtmtmqkcF5oHAdZ75AJgb/U+kRz+/XP8ArA/SRn5ev1VD31P5TR7z0ignU2gbieXT+Q//ACSn/wC6fyH/AOT+U1b6pPLHjH1KeWPH+UDaxy6fyag7qkvU+X7jjXHdU/lNMqU0A0b23li8Do1H6SHB+9rjvIcfpM3sz6TqtxZ0q/wOMjnuI4+M4/eVB/rjA+qeTPKKljaZandWU2dG6SN29YPA8bHqmcnCfot2oy4yiSdK6tSfqLAEqe+4HjO6iBWIiAiIgIiICIiAiIgJxLlYc2Orn+Nh4WH6Tts4fyhP98xHpH+IwNZZyDKfXTzWOplm8CR9dK/XSNeM0CR9bLuyTdnPUo95P6SCzC2/2yZsQ/e+aPc0DVcab1H84yPL2JP7R/OPvmX2btWlTpZHwyVGueeSAcpZWtYqb9HffcSOJlkGBtABmxna2Gtb7IvO0YhwD/p5uh+U9jauFym+EXMW0GbmheBvvvwtbhfsl0Nase2LHtkvEOrOzKuRSbhRuUHgJ5k0Itj2xlPVJJEzr7Ww32ilVXCrkRCr07Lkc5WVGtuJBOYk77DqjQ1nKeqVmyUtp4VabJ9mOY1c61OYzCl/hEMLW7RutpNfxTAuxUZQSSF8kEkhfUNIsG3/AEfVLV8OfJxKe1k+c+k58y8h2tUp9mIp+9J9NSBERAREQEREBERAREQE4Zt/8ZX9I/xGdznDNufi6/pKnxGBrFfeZZvLtffLV4C8tV8Mj2zgm26xtLt4gRTs6l5J/N/KZLk9RVPrcotdRvN+DSMzW42kzYZ+880f/UDU8V0285vfL2Ew71HVKalncgKo3kmWMWf2j+c3vma5JY5aGLSpUNlF1LcFzCwY9xjbNtktjInkVXNLPTqU6hF7qjEkldGVW3Eggiaxl/riD1TrFOqMMbqaX2ZmaoXzgNTzc4hQOmC262utuAnMcdXD1XcCwd3cDqDMSL9szjbXPizytu/TxhsMXYKu89oAA4m5IEnY7ZJprmDhhxsVBX1Zrn1TKcjGValQsR0BvtrztwvMthMUTRxAqBgTnZM5TosDlVbHeOqe3j4sLhu3u7/i5ZWZdRpX2NiLrr7D6u2ZbYfJWpikzColMmoaSq+YMzhc5AAHk6+oyPQV3swvYH1Tf+T+PqJhSKSKXNRiS9rCyILlbg66j1GeHmuUx+Pt3kjT9v8AImthKJrO6MoZVIXNmuxsDqJqVTfN/wBt7RxbYHEU8aAP2tN6bZk1uxuihSTlA1HZec/q75niudxvnZvf0Za302nkX00/8in70n03PmLkZ06f/kU/es+np1ZUiViBSJWICIiAiIgIiICcL23+KrekqfGZ3ScL23+Kr+fU+MwNXr9Iy0Jdr9Iy2RAS1iC9gKYuzEAdXE6+Bl0T0HCrmJtZ11O4XVx7yIGIXb1YaBiovuQKg8Qtz6zMzyaxbVPrS5Jsq77X/e4gTV8PTDXFwGvoSQB7ZsvJYKDVC8EUE3uC3O3eyBrmL6b+cffLiCeMX94/nH3zI7G2c+IqpSQhS17s3QRVBZna3AKCfVAhgSpm/wBXkNSy5Q2IR7NapUFP6slAhOamvPRf2qfvEjW45pmh4ig1Oo6VBZ0ZkcdTKbEdu6as0keQeEvLhW8nfu0tM1sHZLVmKqwphED1alrsivqqJ1G2pPf1WOxnYSLTY4eu1QoMzK/OJA3kG2kx59lz45l429sFs/DOgANjpcdnZMnh8x6Y3S2jdR00Imb2Vsz6xPrKjhKYYqxBGe4XNoDpbrJNgLmdcZt3usfbVeU+CDIKqgZl0Y21yn5G3jNQxG8TrG2tjL9nd6T56eSxzWzgtcC2XRhfiOojhOTVzukzx055WXuNm5GdJPT0/ek+np8wcjeknp096z6fmGSIiAiIgIiICIiAiIgJwrbR/vVf0lT4zO6zhW2fxVbz6nxmBrFbeZblyvvMtQKyziqWemVBte3dob6y7AgQaWy6eUZ1rZuOU0mW/WLsDbvmX5PYdFNTIH1UXz5B5W7KTIzSVsPfU80f/UDVMb96/nH3zM8ntorh66u6lkIZHUaMabqUbKToGsbjtEw2M+8fzjLimWDptbbeBtmapRZLPzUWqMQ+YU7rkZQqHmNqWIGcnW05/j8U1etUrOAGquzsBuGY3sOwbvVIiz3T377S27JNNs5P7TWg71HJKPTVWCA5/rFsosQRl0zG+m/rmWxfKinkKUBWZnGW7s7BQd9gzHWaJSrMp5rEd3y4yUmIc3GcW/hAW449EAzn49l4uPLLyu9s/h3BsARpobG9iL3/AF8JtGz8dRGGalUz3LlgVAIIKhSDqOrf3d00fY9A581xYbtZnQZ3x6dr8vbNYvaFBMHUp08+ZgDdgLAKcxub79/DqnHa+8TduUOKyUSo6T80d37x/T1zScQNRJndudkjZORp5yenp+9Z9QT5e5G9JfTU/es+oZzZIiICIiAiIgIiICIiAnCtsfia3pKnxGd1nCdr/ia/pKnxGBrNfeZaMu1t8tGBSViUMAZL2J0qnmj9ZEaStidJ/NH6wNVxnTfzm98l7Npq9VFbUE2PDgTImM+8fzjJGCr5HV7Xy623cLTpx3GZS5etxLOrpnquDoB0QKCW33cggabusnWYbFUcjsADYMQO6+knPtoF1bJ0VYWzDXNbjbhb2yP/AGldjnXRiTpvAPDtnq/Kz4sp8Ne/qfTHFjlP2bT9GWyKOJxFVcRTFQJSzqpJHPzqOB9Xrm17O2DhqlLEFsLRRkpFgEeqKtOoVYlKiPxFhZ9xsbTUOSPKeng6jPYPnTJYtkI5wa98pv0ZsC8u8Oq1Mqc6qhRnfEtUcCzWAuugBYmw655JrTpZdtbwSZdTvsL9V5seBwytSLsyKAzDnJUdjZVO5BoOd65p+I24i/dgufyr8zMtyZ+kE4am6VKJcs+cFHCAAqq5bEHyd/bNY2bazysnRt7Z6tRrVM9J/qkDKBQxFNlBdE0dxlPS1HG56poGI3ib/wApeXa4qi9NaNRDURU51bNTAV1fMEC9Pm2vfcZoGI3iZy0xN/bY+Rx5y+mp+9Z9Qz5d5InUelT3ifUUwpERAREQEREBERAREQE4RtY/3mv6Sp8Rnd5wja/4mv59T4zA1qtvloy5W3mWoCDEQLOIzZeZfttbNbsvxk/YFufa/QXfv43v67zHYpwq3ZQwB1BJB7xYjWZDk+bl9AOYNBqBqePGBq+N+8fzjJFHCu4vTR3A3lUZgD1GwkfG/eP5xmZ2NtVaKFWUnMQdBTPAD99GPhAxboQSCCCNCDoQRwIM8tLuJqh6jsNAzMbaXFyTwAHgJaMqqXlbykpeQepSUvKiUXUpsVJAJCgFjbQAmwueFzpI2JG71zM4TarJQeiEpkM4dSyU3swspzB1IYW3cQewkTD4lrm/XfcABr2DdCNg5Jbx6VPeJ9Rz5b5Jbx6VP0n1JIEREBERAREQEREBERAThG1vxNf0lT42nd5wfa34iv6Sp8bQNZr75blyvvlomAlbykQLVYjS5ABOt8vUTbnAjh1TIbD3vY35g10626tJj69XIAbEm+lmy69ZPVJ2wCbvc3OVdevU6wNXxv3j+cZYknFrz284yOywPEQZ6RrEHq1gUynqM9Kp6j4S99rbiBrv3gnwPZK/bGPAe3t7dd8CKRKS7VrFgAQNN1uA6pagJWUlRA2bklvHpE94n1LPlrkkdf8AcT3ifUsBERAREQEREBERAREQE4Ntb8RX8+p8ZneZwXav4iv6R/jMDWq28y2Z7rbzPBgJSIgekqFdVJHdJWxXJqOSbnKP1kIyZsL7x/NH6wNcxDc9teJ6uuWie7wEu4gHO3nH3yuHxTILBUIOvPpo/tZSR4wIxUdQ8D85QAdQ9sk162c3KoulrIgQeA4zxh6WeoqbszBfE2geqOAdlzKoy+UWCr4sRPf9mvwKG/BatMnwDTxiQabAAg5lVgSoNgwuAL3sbES22PqEWLAjzV+UClWjlOVlsRwJP6S3p1D2/OSnwhNIVL78xtbyWCke0SHaB6zDqXw+c9Ke3wAkmhtB0UKopi3H6qmWPHVmUk75YqOzsWbUsbk2Av6gIVnuS553+5T94n1JPlrkwLN/uU/fPqQQisREBERAREQEREBERATg21R/eK/pKnxmd4nB9p/iK/pKnxNA1itvluXK2+W4FZ5lbykChkzYfTfzR7zIZkzYfTfzR74Gt4npt5xnujhHZc91Vb5QWcJcjeFzHW0k4vZrsxZLMG1tmAIPHeReWGwFewBRiFvYXBAvqbWMDxXoOhGYWuLgghlZTxDAkET1s+plrUyToHW9928Sj4asQqsj2S+XmnS5ufbLTYd/If8AKYHvatTM4I4IiHvRQh+GQpkcMzLfNQD38tGPgQVI8ZI+0qOjg6YPWVxDexqpHsgWxXAwwW/OAe/ZmdLfCZj85l16bsSchF+AQgeAE9Lg6h3I/wCUwJFHZjsgYuqgjNa7FgpuAxCjQGx3yJiKRRirWO4gg3BDAEEHiCCDJtGliVBCh7EBdbaAbrX3WuRp1y0Nl1SdVA73X5kwrI8mN59JT98+pl3CfMWxcN9WwUm5LoTbdvAAHtn06u4Qj1ERAREQEREBERAREQKTg21PxFf0lT4jO8zg+1fxGI9JU+IwNYrbzLRl2tvlqBSIiAMl7E+8fzR75EkvYnTfuHvgWb/0ZJrYfLkyHOaiZrBSCDmZSAAbnVd8ieHiflLqYlgym+qCy9EgLcm1jvF2PjAoWYbwRcXGrDTr37pT649v5jPWJxDuQWtcC2mUCw7B3y1lPVAl4RGqNlVwDYkBmPOsCbCym2gJubDTfLAqMRfnW0F9d53cOw+E94bEMgcBAc65TcG+W97AgjeQO+0u0to1EUIoFlAHR4XJ18TAimqes/mMoanf+ZvnPJU9UplI1+UC8cO9iShAUZiTmsBzes/xL4z1icOq06brqHDXuiaMlrgWv5XGx3aaxXxlRxlZtOrmgcOrzRLVSq7KqswyoCFGgAvv3DU6C536b4F7ZvTXzk+Iad2ntn00u4T5m2d0x5ydflT6YTcO4QPcREBERAREQEREBERATgm1T/ecR6Sp8ZnepwXan4jEekqfG0DWq28y1LtfeZZMBERAoZL2H027h75EMl7EP7RvNHvgRmmTK0agpIHZMqMHzZRzgL3B3Es2buFhMY2/cJer0MqowKsHBOgqKRlNjcNbjcXGmhgVxiUwR9WxYG+/eN1u/wDekeL/ANX+cadvs+UCdsxULOHygFTZ3yczjfKx5x0A5uuukt4fCoaeZ3CdQOmYC97X7beM84bCPUzZBfKATcoN97AXGpNj4GRrjt9nygUFrdvs7ZcoKpYBjlUkXIFyBxNp407fZ8pS47fH+UCe1LD2Nqj3sbc0Dhpw6/075XauKSoKeS91QKRzgFAVAFsSR0g5uthYjjIKgnct/wAx09RkrHYI00RzYhxfokAHKj2BJ5ws66jS4PVAbL6Y85Pin00u4T5l2Y3PHnJ1D96fTKbh3CB7iIgIiICIiAiIgIiIFJwbapticQD/AIlT4zO8mcG5V8zH4pD5bH1PZx7GgaxXOplm8rXfWW80D3E8ZozQPZMlbFP7Ru79RIRaX9l1LVe8e4gwKNv/AJiSaOOdSSAL5FQX3BVsbWB13XN95JMj4lLMe8yVj2pfVUhTAzgftCCd5AOlxqNd99CCBpArica7hgVFmy9ZtlvuPEm533kLIeo+EVaYULZg2YXIF7qdeae3SW4GQwGMalnsmbOLa5h16HrU31XcbDqiljCqhSitlFgWUnS97f12z1sXDo7PnUNbJoTlARms77x0V8L34SEKN7kFbXI1YKdBe9j1wPIQ9R8DLuGqOjh1Aut+kLjUEajjvkae6SBmAJCgkAk8O2BMfaFQixy+A3WYdfUx9nVI9SszKqEjKgOUDKN9rk23k2Gp6hLhw6BahLqShCpztXN9SFsbiwOt+MkbWqUjTorSy3VOeQhUliE3nMb6gwLWzV54HWybt3S7p9MpuHdPm3YdAtXopxerSW3e6j5z6VgIiICIiAiIgIiICIiAnIvpe2IyVExqC6sBTq/wsOgx7xzfUs67LGJw6VEZKihlYFWUi6kHeCIHyw7Xnkkzre3/AKJlYlsDUCX1+rqlig7FcXYDvBmn4vkBtGnvwxftpujj3g+yBqeaM0y2I2Dik6eGrC3+W59wkZsDVG+jUHfTcfpAhZp5WoVYN1H2cfZJf2Z/8N/+N/lAwjnQU3P+h/lAkGoG7b69h7ZQqvk+0j9ZSjs3E7lw9Zh1fVP7DlmVwnJrHVOhha3+pMvta0DFhF/i/MP+soaa/wAXiv8A1mWxHJrGp08LVHchb4byE+Cqr0qNUd9Nx+kCMaacc3/r8oFNf4vFflPZpP5D/kb5SopP5D/kb5QLZpr/ABeK/wDWUyL1H8w+UkLhajdGlUPcjn9JIobExT6Jhqxv/luPeIEABfJHrLfOVBHAAf11mbFhOQm0ah0w+TtqOqgeq5Psm27F+ilQQ2NrZ/8ALpXVe4ubN4AQMP8ARZsRq+K+0up+qw5ORiNHrEW0vvygk95HGdpEj4LCJSprTpKqIosqqLKBJMBERAREQEREBERAREQEREBKGIgJbqSsQLRlViIF8SsRAS3UiIFgwIiBepy4YiAlYiAiIgIiICIiAiIgf//Z" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Vnetas:</span>
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
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Actualizar</button>
              </div>
          </form>
      </div>
    </div>
  );
}
