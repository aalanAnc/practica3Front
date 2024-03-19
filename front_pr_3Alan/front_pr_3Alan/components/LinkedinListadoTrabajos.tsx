import { FunctionComponent } from "preact";

export type linkedinDataListado = {
  company_name: string;
  title: string;
  location: string;
  onClick: () => void;
};

const LinkedinListadoTrabajos: FunctionComponent<linkedinDataListado> = (
  props,
) => {
  const { company_name, title, location } = props;
  return (
    <div onClick={props.onClick}>
      <h1>{title}</h1>
      <p>{company_name}</p>
      <p>{location}</p>
    </div>
  );
};

export default LinkedinListadoTrabajos;
