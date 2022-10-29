import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">El Grinch</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle de la Cuenta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">El Grinch</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Datos de Contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">elgrinch@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Boyaca / Colombia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar Datos</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Correo</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefono</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Direccion</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUYGBgaHBocGhwaGhoaHh4eGRoaGh4cGhocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADcQAAEDAwIEBAUEAQQDAQEAAAEAAhEDBCEFMRJBUWEicYGRBhOxwfAyodHhFEJSYvEVI3KSB//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACERAAMBAAIDAQEAAwAAAAAAAAABAhEDIRIxQVEEEyIy/9oADAMBAAIRAxEAPwCrVKihNYJfUu1CLnKbRsHXzMIG4MqD/K7qN9eVtNhxWYg3MRbnyosIMxFTaiDRlT29m9x8Inp390ZT05+DwnuIk+UJ5l/graBbS0BOdlbdI0pjYdMneCRjvzz2K1Q0nhaHOZG27XR5Homun2fiGGgDpMweXkumZ8SVVobpVj4uN2TkSVZbWj5KCztmjkmtGl2CzxCVTZ1SYpmslbYyFKGqToXDgsXTWqSFnCldBSNsC74VprVsuS6NhsBcErl9aEDU1BomUylszaDnBQF/CTlCf+QbvKhub9vUSnUsVhTq4GVDUuAdjlJLzVGiZMd595SdmusLyxrwSBtKZLAYWupVBgeQUIfHP0/PRJn3Zgnv+Y5qJ+o7yjhsG9ZocEIwlzTPI/nnhD298Hc/zsuqVccXb+0yNh1Up+ID82U9uOu/JRujjnstcWSU4MN1pwAcc1zSrtAONuZ9ea7qCQhqlPwnksmDDi7BeJY9sieW355qvahp1R4PFwujMtOTH/E7J5SAYJBMeX1lRXFWmZcXcJ/49PUI5qCujzrVLR4PibHXAB7QTukb2QvRLh1B0nxkDecewOCqlqVOi4ngqERs1w+jhuuTl48706IresEq0u6gAODIXK5yx2apWvmFRrSOC6TiqpGVUKCtygbQp1ZciohuJblYOjKz1F7DLTjor5pGq0qjWh0MeQIdv+0bLzEPTHT73hd4uI7RG4K6OLka6ZOpTPVKTnyG8QdmMfpI8irBZWo6AeXP+FUPhlznw7kDnM+qvVhnZdLfRB9B1swDkjWxyXNIKdrAueqAkaDF0GrWF2BhTYyRzC2FtxCXX+ospN4nuAH18uqylsO4MHOhC3F0GjJVP1H44YyY4fU58oCrNfW7i5dAPAydhMkdJ5SUdme2weNMuGsfE9OngnJwBOST2VWuby5qGRgc52911RtaRjipw4f6s+55+yYWz30sYcw8zn9/ul/z71K6CpwSM+f4h85zTuG8IMjpJQx+dxBxruLQTgADP1T65rsO7HB3XBHogKrh0mciElclb7HUoT39OpUPifDOYEiQOpHNcUtIYx3EBHDsQTnnn0TEni5Li5BDTnJ+qjV232x8SQDU1GoxvCw8TQTlwJzkxJKR32tPf/q4epCb38U6Q225bkk/2qxs4nGev3VZ5aaxgUrRlY61UYRLy4bGc947K46VqweA4c15pUZk8gdpTvQrowGgHHNV47egqUek0qsnyCLpkpDpFzJ8RT+g6fsupPVpGljJaYOF1Ub2lcMMFF02yjuCsUXFsSDLs5I2wlrtH4iC52B1x+ytLmAIC+tOISXR5DknQNK1rFFjWloAdO/Cc+q8+vmgOIgfWPVenXNixoj5b3DrM/cKn6tpLOM8JIkTBwc9QVHmhtdFeKkipOK0prmjwOiZUC48Ok0tLa0sIYsWLETG1i0sWMbU9sPEIiZG/wB1AFYvh/Sg9wMEzkHkOW6aJdPoDeIv3w6GsY0MEEiT/CulgT0Crmj6Y1hBJG0QrbZ0xGF2V0jnbDrcFThqjpNU0rmpjSujRbC5c/utveeSCr1XATiFktNTNXVeBv5Lx/4v1p7qr28RgGAAdusfnJWL4u+KvltLQ7xdhheZXF5xkPdId+x+6HI1KxDRP1nNsHPfJJMHz2VgtYY4OE4IJEjI5gqt21cMk49OfmjqF0xwMnlOTA7hcrTbLHpttcUqzMACAJxEenJSg8ALTt15eo5FeZ2OpPE8D45D7hWe119oDWVcAjfmI8vzdFMXxwc1gMgZH6m/x9Uu4+g2KNsrtj/DIIyQZCA4PG9o2cOIebTn6o5pkDPrwSI5SEHWui3Ls9Aubklnj9knvbyTPsOcfkqeaMkD6g5xcXvMgcht2A9EqqPBJJ9B/KluarnkgbHl7qW001zokY5qi6DgvLpKKsro0yCOq3e2fAVBuIRms7Rs0uum6hxQYVws7qWySvJtOvCwzvG4+4V+0S8D2gz/AD6rq4r8uiPJOFlovkpnQGAldv2TChU5K+EGzusAEJWuI6eolF1BhJb9wEk49U0gB7/U2QQSR3EKo6u/wlzHh4zGJ/6Wa3dBzi0kwPRVm5u+TcD86KXJypdF44/oLcVi45MqBdPMlcLjOgxYsWFYU0sWLEQGLFixYx00r0P4WllIEs5Twj9l5/bxxCdlffh684uHhafXn/SvwexL9HoGnh2Cceie0HpLpby4ZbHbP7p1RB6KtEA5j1385DBq05w6qWBTwkfcwMqv61qMNMYxk8gO5R17dNbuR9SvM/jP4jDQWMkk/kp1krWZJtlf11/zKwbkydujR/qPn06IO8tDG2PLbthb0am4vNR2XHaTvnI9lYa2mcTOIExjHY7R6ri5K16dMrFhVLXR3v7Dqfum5+Dq/AHNz5H7e6sdjTDIHQTlNX60xjRxOgenuuf/ACNsc87r/Dtdg4gDI8RGxxuora6cfDz5mOS9Au/iGg9pBc107cQB/ZVW5bS8Xy2wXb58Ppn15KnksFWkNFzmkEbiCAJ542G0Sd0zsNTJqND8ESDOP1CMnlySSix5cA0GTic9du6KvnMY/hbg/wCrHTcn1TT36M0NNRa51M42JBgTjf7qp3VNxMbRz/PzCsn/AJOmGQXxOccj3Vcur1z3BjG8RmBAJJnEARJlat0aUE2NCns92xz0x5pmNSoNDuCT25eYQ9D4NuHM4qs05EhpaeKO4Oyrz7N4c5sOBG0ggkSQD+xSxyxbcy02vYa46nN+hmpXIf2S1r4XJa7mCtlioliBpJEOn19Cm2nXxpniaTB5FKabpwTHmuiS09ltaeoDxnpeka+x++DzBVit7hpMyvG6VzBkEgp3p+vPaYLiQuiP6PlEb4fqPUqt00DCQarqDA1wJzshLbVWPb4TLuhx7JJrTyMmYPf+l0VyJTqJzGvsTahdZI9NvuklQo66rA9/PdAVFw09Z1pYiMrSwrFgG1pYtLCmLFixExixYtrGMbuvQPgy2L4ceXsVQqXDOZ9F6r8OgNYIx5K/Au2xLfRedPho5Jq0g/kKr2lx3x2TOlcA7FxVaRDBm890BcXQAj7Lr5riIAwk+pVYBa0y6N/7QUmEnxFrTGSCY6gbnt2XnV641CarxAOGj/inGoM+ZULQZjJO4JUV+wFjWjl/f8rk5uTX4r0dMQktB7fwhojn/wBKxMuvACD4Yh3Phnr2nKVNpEQQJA/DKndSe4eGZ9plQ9lH0QXOploO0Dpn2I3Cr9W6fUfDQZJgf7iTjATW90iuNmQZ3kFMNJ0V7HCoRLm7uOxPUdgMe6ZRnpdmlpvtjDRv/wCdlzeKu90xPC0gR5nn6KnfEOnNoVzTYHACIMnM9F6U3Xi1uQTEbR/MhVrXdWpvP6C53QLz+Ff2Tyt8naf4+jr5J4nP+rEljQrNZ8ym6WyRxFviHIieo+6dWGjeB73gl28u38gtWTapYGHwsAw3eBJJ32JlMab3AFoc1o/5SSfSV6aak5Hj9FP1ux4TIaRuT9ky+HbZjQx7TxEkEzO4M4A6GPVGX1sXgkvBG20JNYvFF/C5pLHHBB2noQlbmtVGmnPaLzda+TMt9TkqpapdFxcWtaOIZOx9+ic/4rHNhtR5B6EeyhGlUxktk4jikkd4J5qPH/Nw8T2Vg9/0XfTFGgWojieAWgnh2z3ygNeoNBloAzmFYbkwPC4du0dlXdXfI6nG2NuX7qnlr6JpCQhEMcDgz2MrhjZUgaN5TBOn0xyBWU4B3K7pPM/wivktdiIPL+0GbTLa6yMx5zv9k8fqZcwNhjo3I39eR9lW3tg5HP8AMoui8EGDmPX3CGtGaBb5wJJDQB5QgHFMLouBMgeRG6XPToz9HJWQsWJgBFS0cFA5hCsjXtO4UdW0adl2V/MmtlnOuX9K8QtJ3V03sllxbOZuFCuKp7KTSYOtrF3SplxhT9jGUTDh5q+WGoxTHU4CpNS1c3Kmt75wEbxsqxTh4xWlR6RbakAAJ8489p5q02F8C0GYEdRK8Xt9RDAdyZE5V1+GdcbUaG7OHL83VptV0TqcL1XupG+D0VV1++LWOa3DjynPmf4TGtUdEnHdU7UnzV8Wwz5pOavGTROsFe8saYnicDJ6DmVxakvxyHopdXZ4RO0+I9T07hc6dUiAMnymP7Xnpfp0jdrGsHCRvvCM09rWuMfq7yY7IIklvCATOcRKntqh8iPdLVP4FTqLB80PGR7j+loMERkDtkIKjVPPy/AifmkbbfnJUjkZOpArnTA6cz5yB+yAfYU6ckAFx/TsACfr6pxWrjOZPTf/AKCVV2y6fUqqpA8WRPHC2Ac8yRKgfcOjgpt4nn9T3eL9vwIynb8YnlkD+VFc/DNZ7x8qqKbTHETkg8yI+mFPyTrsf0hTcsuGAk1XTtyI9ohIq1yS7gfEnHEMCf8Ak0Y9QrdqPw1XbDf8hrhEFzwQ6eeBg+6Co6FRpkO8T3D/AHHEnd0dUKcr0HehRpV2WO+W5xBnE5H/AMnt0KfOus+IiO2f2VZ1qlwu42+ybWNbiYDxSCAYO/dZ9oGEl1VBgEz74Vd1B8kgbfnunVzV4Z2Kr9zU4iUsz2FA7Hwuw/sPVcU6crprvqqGC6LARPCPz9kaykIBaP6QTHiMFEW1XhBO4PZZgNV29N+aHZv9+6ZupEjiKDfRPGRHL0S4wpkFxtIMnv8AwQgKjp5QjKrdxH3QwpEp0jMhWKY0D0XPyymAPn04OF1Qcu7mmQ6FA2RyXoy8ZyvGg6m+PJd1rZr9kK0qVr+EyFTdE+gNxoZiWhCULc03SQrjYXrDh0LnVbRjhLYU3wz/ANT7HXI/TElaqxzMJJc0IMhGnT3h2NkabElsqdS7Xa7GVJeitJr8PV3MrMIPNB3lDhK1aVeB4d0XJjiuy3tHr93chzQBvjKqurmHA7oTTdcLjDpjqidbd4GuBT8zVTqFheNYL9Yuf/W1u5xPnkx911o9OWAnz8oS65JLBzMk/RHaS+GEfndca7KvoamrERv3KmbddS7tySwPzCnpsDj4j6Spv2OhvTueYz5qcXLnbkDy290n+aeLhYJI5zgIulS2L3cR84aPTmjLw1ToaG8Uho83cvU81xcvFNhMmeXUk7Ie41hjPDPE6MAZJ8gN1FbNfUeH1G8I/wBLTuO57qnkvomDK1PCGg8on2R1G64wOEjfnjHYoKs1sAnyjyWNc4xLh9/ZRVYxWtNancnjb6hLLnZ2TKK1Nk8MEmCJmOoPJCV3jI6xzzgHb3Tt9ASEN5R4hEjYzy6xH7JfpXzCSxkYl2TEJreuBGNglWm1+GqYxxAge6adzB/h3c1ng8L8H3QdVmZTHUKJ4C4zIMjzCjYONgdtKZI2g9zRgB4QFTdOniaB7H+/ukT0yNoVamcH0TAiIb+YQVjTyDEgZTOs/AI8tkGYc0qHGwRjb6KN9nB6InTzIamFxRkYC7OHjVHPV4yq3FjJWUrIbQm1WAhmXAB7ron+dJ6LXMQ1LDGyE/xAmj7jmgqlYSnfDIi5GNqtpxOlbfpwiQoW3Z4+E4TmhT4mqixi9plTugQcIdlecKzXOkcSrt5YljjCnSa7QyaYQxpIkKGvevYcyQpLGqURc23EEc1dezLp9nFletdunVuWOwFXqFmQ7CZspubstLef7GaXw1q+lggkBVV9iQYBlXz5hLYdnulj7UE4j1wVz/0Qn2ivFTXTENrTjcfynLn8TOEmdlBcUADt+eaHDhGN/wBlyKlmFmvpHc0OEx7KKhXh3RFjxQR+oHbyQFyPEVGlgyejkDY9Qsa8jz/IS+0u5EFHUzJjdSpdhljOzhgE+ZUF5XNR3BTyY8TuTRzJjn2WqwiR2Relw1u0T98YhKv0NMI0+2o0NhxPO73ZJ9TsEe6qHdPcBJbqgHGJzKJbp4e4QXNgdZ+qZT5CMIqhw2AM5ORP7rljxvxEHmP4Mpde0q1PLSHt9QR5xySmrqVwTwtps9/5Q/xUMlvof3dwIMAD6nuSlla5MHb7pfcm8LZLDHaCPeUE60ruy9/COedo7BOuOvo3g/iO7q6GRhQaSzirNcR4GZP2/dauLdjf0EvPUhbsXlrH9yB+e6rK8RanOh3q1RppugRzS2zbDCOY+6ku3yxregCgoVIa8+QWZNLrDKlWKZb1P2CTEyURXq4jzUDGoz0hhlZAgBwyZ2TAta8jiBbH+3KAa4BsCMBMtHoFz5Imduq0S28BTzsfaY0GE3r0y0Y/AutJsA1o8PkUZcUJbBJ7wF6fHPijjqtZRdVLmnfdLGOdMq33+iPdB4Z6QEtraS5u7VdLSTeCk1CoIU102DCFD1m+wofX9LheHBPLasOAEJZUZxtWWVQgFqX0x32hx81JtVpzspvmuE80BcXLiYIRbQEZp9tmEXeUeEYUtkAIJCNvnsLOSyWI2iO3EpvYUS4gQEqpVOE9kxs6niBCGDaOriw4Gz2VduGGSra2rLBOUpvbM7gLeOoVUyuvtp5fVDVrcAg47iE3bRfxRyRVOwl3Cee2P2XNy8CfaLxyfpVqzIPG3wnn0UdJgeHNwHHaequtzoTSwkyMcwfrCpWq2DqbsGOa4eSHL1+i80q9Cp8tOcEFH2d7kcj9UK6q0tLXDxcih6W4nmptJocudzD2NqD/AOXDp0P2XFvVgR7JPYXxaSx2xEHuOvmmFs+ZaDnl3UKlowzpVAU4p7CFXaFQd5Ta0uTzTQ8eC0gqoM5xy80Bd2TDktjuBI9v4TFgJycoe5pvGRsrJv4CXgq/xaQxxkdsQoLmjRa2Zc8D09Pop7m1cZJYT5ICvbOLYDTmdyE3nXoZ2/0U3VTjwxvAz6/yp7a1kiB4Wn90TTsCN/YJhQohjOc7oJ/oror2o4eR0H3QfzIZvuSUXqL+J5KUvfy5LLsJy7JXXRYFbvhj4YFRhqVQQBlreZHXyVYh08QlUpWsr9jTLiARiZkq76bRaGCpSbAGHefUDojLLRKLy4NaQ7vtjIAHMKw6VprGcTSMET6j7LrjiUnPXJ5BOj23EziPP6pk21YMAAnuh21TIDRgclLTD3EDYT6qjZPCJ1MtJLiHdBw4CX6hateP0/8A5CsZaGjJk9Son2zHZ8Q8ifotN4ByeQfENjwO2idiq9heofEltAIcONhxmDB7Kh1bRs4qCPJV99mXQ5czh5pb8zhfMoYamThDVK5JlK6WdDJFl+cICFqU5dKjtH8TETbVWjfdNug9Griq4NEIYue5O7drHKf/ABGRjcJkgMrj2GJRuj1OIxzQWsvLMckJoF14wJ5papKkgpPNL1wOEI+zqA4cMKS0YC0Eoimxs7Iti/SWlpzHZjCkqaewNgt9efmO6Ptg0DeFPUYIkn83UaplEhLY3bRAcZJJGw2Jjb85pF8d6JTNIva0cTc4xIhNNVoNZVa8fodiejpwfKUB8T3X/pe0jbcDMGNweQyufkacvS0rGmjye4o4nnsVDRoEyRyTJ7J4s77hCU2Hj4Guji58l56Z0kJBjMzyRFpdOaRODy+0rVdjhAcBPIhQPyO4RMP6F3JnYnfoe4TmhUBAVHZUwYw4bfdH22puaIM/n0SOPqMX62rbJgyCJ58lT7XU24g75g/mU3tbsHBO6pFY+ydS/g0fQJ2EIC8Z5Ix1d0Z90pr3bZ3ha630BIi+RmVDdvDWlafeCN0g1fUhHC0yll/B8FF7XkmOZyhWtlaJko3T6Jc8NA3VpXwVssPwroHzHhzv0jJkcv5Xo+m0y18wOH9PCf8Ab380H8N6eGUw1u25PXyT5lMjEL0YnxnDkuvJkTbJjHl4zxHthdXLw1xjG+fsiLmRAAz3QVWyed9vPPqg6MkapPmMkfdMWVDsPUpRTYWEAgk8gMz/AAjjVIwQJxI6DySaFonfVIz0+67oXgIzEocua4xseUH+VDXti3Y/b0TJAZrVqRe0g7EYXnV7aNLzLSCMHO5HNeltJezhP6hsqlf2PE8nh7eytLFPPGjxJoLGWg9lixLA9EdtVLDBUziXGQsWJgBNhclpyUzqXmJBWLE8iMrWrPc8ygdPpuDwQcrFijcryKz6L1bak8MA6J1pF8XmSD2WliowKUWRjyWqP5jnEsBwTk7wJ+p291ixQr2VxYRfEDw1nhjIwCBBLdj2VJ1a+4mODtzMGd5WLFzcjeBgqbKgEgbn91AaRFRsb/8AcyVixcc+y7OblkTnKC4RutrFjIgJzKIbkTKxYnZjBVcT1RNK9qNiJ9f55LFiDSMHN+I38MOnHdL6+sOdtt3WLEVCMDVL97ucIXJWLEySQGTU6Wcq3fCWlF79vVYsV/50nXZLk/5PWdGtGtYG9kc62jssWLpr2ciIn0QMk/nZV68rFryA73O3crFiRvorJ3alxEiYOzjMnuFKSW4I/PutLEZC/Zhk9/SCP5XdCqWmCSfNYsTIATUpAgOZgpReUCXk/cLFioib9n//2Q=="
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
