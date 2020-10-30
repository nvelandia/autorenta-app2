# React.js:
## Estructuras de carpetas de React:
Todos los componente de React que contenga el proyecto debera estar contenido en views/ dejando para la carpeta pages/ solo la importacion de la pagina (dentro de views/containers) y los debidos metodos que se necesiten para adaptar el estado y las propiedades iniciales de la pagina (getInitialProps comunmente).

![estructura de carpetas](https://files.slack.com/files-pri/T2DPQLA3B-FLJVCSZQV/screenshot_from_2019-07-18_12-10-52.png?pub_secret=afc08df4c2)
### views/containers:
Dentro de este directorio deberan estar los componentes de React que representen a la pagina en su totalidad, además de los links que contendrá el navbar de dicha pagina, por ejemplo:

```
const links: NavbarLinks[] = [
  {
    link: Config.ROOFTOP_ROUTES.HOME,
    visibleName: 'Home',
  },
  {
    link: `#${Config.ROOFTOP_HOME_SECTIONS.SPECS}`,
    visibleName: 'Specs',
  },
  {
    link: `#${Config.ROOFTOP_HOME_SECTIONS.PROCESS}`,
    visibleName: 'Process',
  },
  {
    link: `#${Config.ROOFTOP_HOME_SECTIONS.TEAM}`,
    visibleName: 'Team',
  },
  {
    link: `#${Config.ROOFTOP_HOME_SECTIONS.SKILLS}`,
    visibleName: 'Skills',
  },
  {
    link: Config.ROOFTOP_ROUTES.CONTACT,
    visibleName: 'Contact',
  },
  {
    link: Config.ROOFTOP_ROUTES.ABOUT,
    visibleName: 'About Us',
  },
];

export class HomePage extends React.Component {
  public async componentDidMount(): Promise<void> {
    if (!isServer()) {
      Analytics.registerEvent(EventsAmplitude.HOME);
    }
  }

  public render() {
    return (
      <>
        <Head>
          <title>Homepage - Rooftop</title>
          <link href={`../static/build/scss/home.css?q=${getQueryHash()}`} rel="stylesheet" />
        </Head>
        <Header links={links} scrollChange={400} />
        <Parallax image="../../static/img/paralaxBackground.png" title="THE MOST TALENTED DEVS COMMUNITY" buttons />
        <div className="main main-raised">
          <Offer />
          <Specs />
          <Process />
          <Team />
          <Technologies />
          <br />
        </div>
        <Footer />
      </>
    );
  }
}
```

En metodo render tiene la importación de la pagina de estilos en el head y solamente importaciones de secciones en el body. Mientras que solo utiliza un hook de React para lanzar un evento del lado cliente (Analytics).

### views/sections:

Son clases de React que representan una vista parcial o una pequeña sección de la página que puede ser utilizada en uno o mas containers. Por ejemplo un formulario de contacto que puede ser reutilizado en distintas páginas, o banners, sidebars, pricing, etc. Es decir, son vistas parciales formadas por componentes atómicos importados desde views/components. Ejemplo:
Las secciones que solamente pertenecen a un container deben estar ubicados dentro de un subdirectorio con el nombre del container al que pertenece.

```
export default class Technologies extends React.Component<any, any> {
  protected technologies: string[] = [];
  public constructor(props: any) {
    super(props);
    this.technologies = [
      'Android Developers',
      'AngularJS Developers',
      'Back-End Developers',
      'Freelance Developers',
      'Front-End Developers',
      'Full-Stack Developers',
      'HTML5 Developers',
      'iOS Developers',
      'JavaScript Developers',
      'Mobile App Developers',
      '.NET Developers',
      'Node.js Developers',
      'PHP Developers',
      'React.js Developers',
      'Software Architects',
      'Software Developers',
      'Web Developers',
    ];
  }
  public render(): ReactElement {
    return (
      <section id="skills" className="main">
        <div className="container">
          <div className="col-md-12 ml-auto mr-auto text-center">
            <h2 className="title technologies-title">Freelancer Skills</h2>
          </div>
          <div className="row container">
            {this.technologies.map(
              (tech, index): ReactElement => {
                return (
                  <div className="technologies-item col-lg-4 col-sm-6" key={index}>
                    {tech}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>
    );
  }
}
```

### views/components:

Son elementos mas pequeños en cuanto a contenido y son utilizados por mas vistas, por ejemplo un navbar, un loader, un parallax, un footer, un formInput, etc. Deben ser lo mas genéricos posibles, de manera que permitan utilizarlos en todas las paginas aunque estas difieran un poco en cuanto a estilos y contenidos. Es crucial mantener todo absolutamente genérico en estos componentes asi nos resultará mas fácil utilizarlos y refactorizar las vistas.
Ejemplo:

```type inputProps = {
  name: string;
  value: string;
  error: string[];
  type?: string;
  id?: string;
  onChange: ChangeEventHandler;
  labelText?: string;
  title?: string;
  rows?: number;
  help?: string;
};

export class FormInput extends React.Component<inputProps, any> {
  public constructor(props: inputProps) {
    super(props);
    this.state = { isFocused: false };
  }

  public render(): ReactNode {
    const { name, value, error, type, id, labelText, onChange, title, rows, help } = this.props;
    return (
      <>
        <div className="form-group bmd-form-group">
          <label htmlFor={name} className="bmd-label-floating">
            {labelText}
          </label>
          {rows ? (
            <textarea
              name={name}
              title={title}
              className="form-control"
              onChange={onChange}
              id={id ? id : name}
              rows={rows}
              value={value}
            />
          ) : (
            <input
              type={type || 'text'}
              name={name}
              value={value}
              title={title}
              className="form-control"
              onChange={onChange}
              id={id ? id : name}
            />
          )}
          {help && (
            <small id="emailHelp" className="form-text text-muted">
              {help}
            </small>
          )}
          {error && <span className="bmd-help text-danger display-block">{error[0]}</span>}
        </div>
      </>
    );
  }
}
```

Este componente es un input individual, el cual tiene su estructura que incluye un icono, y un span de error por si el valor del campo es invalido. En este caso este componente generaliza tipos de inputs, es decir que serive tanto como texto, numero, archivos, etc; pero un combobox no podria ser renderizado con este componente.

### pages/:

Este directorio es obligatorio para la compilacion de Nextjs, ya que desde este infiere las rutas de la pagina. Para mantener ordenado las vistas e independientes de Nextjs lo que hacemos es en el metodo render solo hacer el import del container correspondiente, y en el comportamiento del componente solo tener los adaptadores necesarios para que al container le lleguen las propiedas suficientes para renderizarse correctamente.
Ejemplo:

```
import { HomePage } from '../views/containers/HomePage';

export default HomePage;
```

## Manejo de estados:

Es de suma importancia que tratemos de mantener un solo estado como single source of truth en los containers. Esto nos permitira pasar a un manejador de estado como Redux o Mobx mucho mas rapido en caso de necesitarlo, ademas apela al orden y la mitigacion de errores dentro de las vistas.
Extracto de texto de la documentacion oficial de React.js:

![State of react components](https://files.slack.com/files-pri/T2DPQLA3B-FLJUTLFLY/screenshot_from_2019-07-18_13-08-25.png?pub_secret=51f0d48db8)

### Hooks:
No se expecifica ninguna politica de adopcion o prohibicion de la nueva forma de manejar el estado en React 16.8, de manera que queda en decicion del programador si quiere utilizarlos.