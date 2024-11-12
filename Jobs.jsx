import Job from "./Job";
const Jobs = () => {
  return (
    <>
      {" "}
      <div className="mainBody">
        <Job
          className="jobContainerRed"
          title="Full time sales associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="jobContainerGreen"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          className="jobContainerYellow"
          title="Responsable d'atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="jobContainerBlue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="jobContainerSalmon"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="jobContainerRed"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="jobContainerGreen"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          className="jobContainerYellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Job
          className="jobContainerBlue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </>
  );
};
export default Jobs;
