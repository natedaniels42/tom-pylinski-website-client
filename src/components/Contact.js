import '../App.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-box">
                <h2>CONTACT ME</h2>
                <a href ="mailto: onethousandhours@yahoo.com" class="social-icon"><i class="fas fa-home"></i><span class="social-text">Personal Email</span></a><br/>
                <a href ="mailto: pylinsth@mountunion.edu" class="social-icon"><i class="fas fa-briefcase"></i><span class="social-text">Work Email</span></a>
            </div>
            <img id="sketch" src="tom-sketch.jpg" alt="sketch of a trombone player"/>
        </div>
    )
}

export default Contact;