import { Link } from 'react-router-dom';

const CharactersByhero = ({ characters, alter_ego}) => {
  // if(alter_ego === characters) return (<></>);
  // return (<p>{ characters }</p>);
  return (alter_ego === characters) ? (<></>) : (<p>{ characters }</p>);
}

export const HeroCard = ({
    id,
    superhero, 
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImgUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 mb-4">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImgUrl } alt={ superhero } className="card-img"/>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego}</p>

                    {/* {
                      (alter_ego !== characters) && (<p>{ characters }</p>)
                    } */}

                    <CharactersByhero characters={characters} alter_ego={alter_ego} />

                    <p className="card-text">
                      <small className="text-muted">{ first_appearance }</small>
                    </p>

                    <Link to={ `/hero/${ id }` }>
                      Más...
                    </Link>

                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

