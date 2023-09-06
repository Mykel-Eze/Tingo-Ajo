import "../assets/css/apply-now.css";

const ApplyNowWidget = () => {
    return (
        <div id="apply-now-widget">
            <img src={require("../assets/images/apply-widget-bg-pattern.png")} alt="bg-pattern" className="bg-pattern" />
            <div className="container center rel">
                <h1 className="anw-title">
                    Ready to Take the First Step Towards Financial Freedom?
                </h1>
                <div className="anw-description">
                    Your journey to financial freedom starts here. Join the individuals who have
                    already benefited from our program.
                </div>
                <button className="apply-form-trigger hover-scale">
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default ApplyNowWidget;