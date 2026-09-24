import "./Loading.scss";

const Loading = () => (
    <svg
        className="loading"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <g strokeWidth="10">
            <circle cx="40" cy="40" r="35" />
            <circle
                cx="40"
                cy="40"
                r="35"
                strokeDasharray="220"
                strokeDashoffset="55"
            />
        </g>
    </svg>
);

export default Loading;
