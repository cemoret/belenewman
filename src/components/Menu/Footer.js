import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RRSS: {
        instagram: [{ name: 'instagram', http: `${'https://www.instagram.com/belennewman/'}` }],
        arena: [{ name: 'are.na', http: `${'https://www.are.na/ce-moret/'}` }],
        github: [{ name: 'github', http: `${'https://www.github.com/cemoret/'}` }],
        twitter: [{ name: 'twitter', http: `${'https://www.twitter.com/carlosmoret/'}` }]
      }
    };
  }

  render() {
    const { RRSS } = this.state;
    const date = new Date().getFullYear();

    return (
      <div className="row m-0">
        <div className="col-12">
          <div className="h5 inline-block text-center pt-4 pb-2">
            <a rel="noopener noreferrer" target="_blank" href={RRSS.instagram[0].http}>
              <h5 className="d-inline text-nobrand px-2">{RRSS.instagram[0].name.toUpperCase()}</h5>
            </a>

            {/* <h5 className="d-inline px-2">•</h5>
            <a rel="noopener noreferrer" target="_blank" href={RRSS.github[0].http}>
              <h5 className="d-inline text-nobrand px-2">{RRSS.github[0].name.toUpperCase()}</h5>
            </a> */}

            {/* <h5 className="d-inline px-2">•</h5>
            <a rel="noopener noreferrer" target="_blank" href={RRSS.arena[0].http}>
              <h5 className="d-inline text-nobrand px-2">{RRSS.arena[0].name.toUpperCase()}</h5>
            </a> */}
            <h5 className="d-inline px-2">•</h5>
            <h5 className="d-inline px-2">© {date}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
