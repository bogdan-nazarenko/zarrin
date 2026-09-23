import "./Loading.scss";

const Loading = () => (
    <svg
        className="loading"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <g strokeWidth="10">
            <circle cx="50" cy="50" r="45" />
            <circle
                cx="50"
                cy="50"
                r="45"
                strokeDasharray="283"
                strokeDashoffset="71"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

export default Loading;
