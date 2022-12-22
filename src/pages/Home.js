import IconName from "../components/IconName";

export default function Home() {

    const bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    // Divs are seperated out to left to right. Center gets 50% and each of the other sides get 25% of width

    return (
        <div className="content">
            <div className="left-content">
                <IconName></IconName>
            </div>
            <div className="right-content">
                <h1 className="fade-in-text">Home</h1>
                <p>{bodyText}</p>
            </div>
        </div>
    );
}