import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import LinkedinCliente from "../islands/LinkedinCliente.tsx";
import { linkedinData } from "../types.ts";
import LinkedinDescripcionTrabajo from "../components/LinkedinDescripcionTrabajo.tsx";

//hacer un handler para pillar los valores de job y pasarselos a listado
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, linkedinData[]>) => {
    try {
      const Empleos = await axios.get(
        `https://arbeitnow.com/api/job-board-api`,
      );

      if (Empleos.status !== 200) {
        throw new Error("Ha habido un error");
      }

      return ctx.render(Empleos.data.data);
    } catch (e) {
      throw new Error("Ha habido un error");
    }
  },
};

export default function Home(props: PageProps<linkedinData[]>) {
  return (
    <div>
      <LinkedinCliente linkedinData={props.data} />

      {props.data.map((b) => (
        <LinkedinDescripcionTrabajo
          slug={b.slug}
          company_name={b.company_name}
          title={b.title}
          description={b.description}
          remote={b.remote}
          url={b.url}
          job_types={b.job_types}
          location={b.location}
          created_at={b.created_at}
        >
        </LinkedinDescripcionTrabajo>
      ))}
    </div>
  );
}
