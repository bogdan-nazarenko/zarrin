import "./DataRow.scss";

const DataRow = ({ className = "", category, dateTime, time }) => (
    <div className={`${className} data-row`.trim()}>
        <span
            className={`data-row__category ${category === "Development" ? "data-row__category_upper" : ""}`.trim()}
        >
            {category}
        </span>
        <time className="data-row__time" dateTime={dateTime}>
            {time}
        </time>
    </div>
);

export default DataRow;
