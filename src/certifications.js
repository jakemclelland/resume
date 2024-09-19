let data = require("./data/certifications-data");
let certifications = data.certifications;


export default function Certifications() {
    return (
        <div id="certifications" className="tab certifications">
            <div className="section-title">Certifications</div>
            {certifications && certifications.map((cert) => (<Certification certObj={cert} />))}
        </div>
    );
}

function Certification({certObj}) {
    return (
        <div className="cert" key={certObj.key}>
            <a target="_blank" rel="noopener noreferrer" href={certObj.link} key={certObj.id}>{certObj.description}</a>
        </div>
    );
}