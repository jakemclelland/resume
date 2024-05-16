const certifications = [
    {
        description: "Professional Scrum Master (PSM I) from Scrum.org",
        icon: "",
        link: "https://www.credly.com/badges/305cd2d9-929d-4b65-9bed-f06c3611b91f/public_url"
    },
    {
        description: "Pursuing: IBM Full Stack Software Developer Professional Certificate",
        link: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer"
    }
]

export default function Certifications() {
    return (
        <div id="certifications" className="tab certifications">
            <div className="section-title">Certifications</div>
            {certifications.map((cert) => (<Certification certObj={cert} />))}
        </div>
    );
}

function Certification({certObj}) {
    return (
        <div className="cert">
            <a target="_blank" rel="noopener noreferrer" href={certObj.link}>{certObj.description}</a>
        </div>
    );
}