import AmpDatePicker from "../amp/AmpDatePicker";
import IconInput from "../ui/form-inputs/IconInput";
import SelectForm from "../ui/form-inputs/SelectForm";
import { faMapMarkerAlt, faMapPin, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import AdditionalStop from "./AdditionalStop";
import AddStorage from "./AddStorage";

const moveSizeOptions = [
  { value: "1item", title: "One item" },
  { value: "2items", title: "A few items" },
  { value: "studio", title: "Studio (400-600 sq ft)" },
  { value: "studio-alcove", title: "Studio Alcove (600-700 sq ft)" },
  { value: "1brsm", title: "1 Bedroom, Small (600-800 sq ft)" },
  { value: "1brlg", title: "1 Bedroom, Large (800-1000 sq ft)" },
  { value: "2br", title: "2 Bedroom (1000 to 1500 sq ft)" },
  { value: "3br", title: "3 Bedroom (1500 to 2000 sq ft)" },
  { value: "4br", title: "4+ Bedroom (over 2000 sq ft)" }
];

export default ({ className, extras }) => (
  <>
    <IconInput
      icon={{ name: faMapMarkerAlt, side: "left" }}
      inputClassName="input-lg"
      placeholder="Moving from address,city, or zip"
    />
    <IconInput
      icon={{ name: faMapMarkerAlt, side: "left" }}
      inputClassName="input-lg"
      placeholder="Moving to address,city, or zip"
    />
    <SearchItems />
    <SelectForm items={moveSizeOptions} chooseName="Move Size" />
    <AmpDatePicker
      id="moveDate"
      name="moveDate"
      icon={{ name: faCalendarAlt, side: "left" }}
      placeholder="Pick a move date"
    />
    {extras && (
      <>
        <AdditionalStop id="additionalPickupStop" title="Additional pick up stop" />
        <AdditionalStop id="additionalDropOffStop" title="Additional drop off stop" />
        <AddStorage />
      </>
    )}
    <button className="btn btn-block">Compare Movers & Get Prices</button>

  </>
);

const SearchItems = () => (
  <ul className="menu" style={{ display: "none" }}>
    <li className="menu-item">
      <a href="#">
        <div className="tile tile-centered">
          <div className="tile-content">
            <p>Amsterdam</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="tile tile-centered">
          <div className="tile-content">
            <p>Bogota</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="tile tile-centered">
          <div className="tile-content">
            <p>Buenos Aires</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="tile tile-centered">
          <div className="tile-content">
            <p>Cairo</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="tile tile-centered">
          <div className="tile-content">
            <p>Dhaka</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="tile tile-centered">
          <div className="tile-content">
            <p>Edinburgh</p>
          </div>
        </div>
      </a>
    </li>
  </ul>
);
