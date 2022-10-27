import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Miembros</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/263722702_2969958896653291_9152815983172081532_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEBgXchHQctO2b5vU6-QNtw_GISgyvPhML8YhKDK8-EwgTcHgGxAwQIkKJdYXpcqNs&_nc_ohc=PjAtUlLzXwwAX8nM-Jy&_nc_ht=scontent.fbog2-5.fna&oh=00_AT-U7oqfAAi5VNat3kMK57yyGOGpTjhbpJTvOaufFfIgWg&oe=635D4628"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly melissa Gaviria Rodriguez</span>
            <span className="widgetSmUserTitle">Ingeniero de Software</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visible
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/1200px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Harold eduardo hurtado</span>
            <span className="widgetSmUserTitle">Developer 1</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visible
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Brad_Pitt_Fury_2014.jpg/800px-Brad_Pitt_Fury_2014.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Daniel Alejandro Bustos Solano </span>
            <span className="widgetSmUserTitle">database administrator</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visible
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Jorge_Baron_TV.jpg/640px-Jorge_Baron_TV.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Wilson Ricardo Revelo Sarasty</span>
            <span className="widgetSmUserTitle">Analista</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visible
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fbog2-4.fna.fbcdn.net/v/t1.18169-9/1011783_10151920044893918_1936495552_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpFR5j7B5VwbnJ4JO-E68vol5HQeWs2LWiXkdB5azYtYgO1bVgqB5yLg403gYhdLI&_nc_ohc=SYCSMyPwurUAX9Twkok&tn=AmBzPlxGsxzJp8nX&_nc_ht=scontent.fbog2-4.fna&oh=00_AT_0iymnbR-gK60oeBOyww1Ra0Qko_GF3OT3PAfGU9QGUg&oe=637D831D"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nelson Arnoldo Rodríguez Silva</span>
            <span className="widgetSmUserTitle">Scrum Master</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Visible
          </button>
        </li>
      </ul>
    </div>
  );
}
