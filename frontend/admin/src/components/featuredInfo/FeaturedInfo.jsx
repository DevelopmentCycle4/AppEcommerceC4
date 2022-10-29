import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Ganancias - Octubre</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">En comparación con el mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventas - Octubre</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3000</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">En comparación con el mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gastos - Octubre</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">En comparación con el mes pasado</span>
      </div>
    </div>
  );
}
