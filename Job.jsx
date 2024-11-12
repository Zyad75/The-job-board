const Job = (props) => {
  return (
    <>
      <div className={props.className}>
        <h3 className="titleH3">{props.title}</h3>
        <p className="jobFooter">
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </>
  );
};

export default Job;
