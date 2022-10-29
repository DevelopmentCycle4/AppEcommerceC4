import TotalSales from "../../components/totalSales/TotalSales";
import "./salesList.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function SalesList() {
  return (
    <div className="salesList">
      <div className="salesTitleContainer">
        <h1 className="salesTitle">LISTA DE VENTAS</h1>
      </div>
      <div>
        <TotalSales />
      </div>      
      <div className="salesWidgets">
        <WidgetLg />
      </div>
    </div>
  );
}
