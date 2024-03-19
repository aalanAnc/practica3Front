import { FunctionComponent } from "preact";
import { linkedinData } from "../types.ts";

const LinkedinDescripcionTrabajo: FunctionComponent<linkedinData> = (props) => {
  const {
    company_name,
    title,
    description,
    remote,
    url,
    job_types,
    location,
    created_at,
  } = props;
  //Slug es la id
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {company_name} {location}
      </p>
      <p>{remote}</p>
      <a href={url}>ir a URL</a>

      <p>trabajo: {job_types}</p>

      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <p>pagina: {created_at}</p>
    </div>
  );
};

export default LinkedinDescripcionTrabajo;
