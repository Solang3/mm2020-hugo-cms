import React from "react";
import format from "date-fns/format";

export default class PanelsPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "titulo"])}</h1>
      <div className="flex justify-between grey-3">
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "exponente"]) }</p>
        <p>{ entry.getIn(["data", "descripcion"]) }</p>
        <p>{ entry.getIn(["data", "invitados"]) }</p>
        <p>{ entry.getIn(["data", "coordinador"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "titulo"])} /> }
        { widgetFor("body") }
      </div>
    </div>;
  }
}
