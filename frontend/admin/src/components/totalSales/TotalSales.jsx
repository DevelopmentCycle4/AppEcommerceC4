import "./totalSales.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Ganancias - AÑO 2022</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$50'000.000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">En comparación con el año pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventas - AÑO 2022</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$150'000.000</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">En comparación con el año pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gastos - AÑO 2022</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$100'000.000</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">En comparación con el año pasado</span>
      </div>
    </div>
  );
}
