import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import LinkedinDescripcionTrabajo from "../components/LinkedinDescripcionTrabajo.tsx";
import LinkedinListadoTrabajos from "../components/LinkedinListadoTrabajos.tsx";
import { linkedinData } from "../types.ts";

export const LinkedinCliente: FunctionComponent<{
  linkedinData: linkedinData[];
}> = (props) => {
  const [Datos, setDatos] = useState<linkedinData>(props.linkedinData[0]);

  return (
    <div>
      <h1>Principales empleos que te recomendamos</h1>
      <p>{props.linkedinData.length} resultados</p>

      <ul>
        {props.linkedinData.map((empleosLinkedin) => (
          <LinkedinListadoTrabajos
            onClick={() => {
              setDatos(empleosLinkedin);
            }}
            company_name={empleosLinkedin.company_name}
            title={empleosLinkedin.title}
            location={empleosLinkedin.location}
          >
          </LinkedinListadoTrabajos>
        ))}
      </ul>

      <p>
        <LinkedinDescripcionTrabajo
          slug={Datos.slug}
          company_name={Datos.company_name}
          title={Datos.title}
          description={Datos.description}
          remote={Datos.remote}
          url={Datos.url}
          job_types={Datos.job_types}
          location={Datos.location}
          created_at={Datos.created_at}
        >
        </LinkedinDescripcionTrabajo>
      </p>
    </div>
  );
};

export default LinkedinCliente;
