import React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';
import { Col } from '../Grid/Col';

function Banner({ title, info, image }) {
  return (
    <div className="eea-page-banner">
      <div className={image ? 'eea-page-banner-image' : null}>
        <Container className="eea-page-banner-container">
          <div className="eea-page-banner-text">
            <Grid.Row className="eea-page-banner-text-row">
              <Col desktop="9" tablet="6" mobile="4">
                <div className="eea-page-banner-title">
                  <p className="eea-page-banner-header">{title}</p>
                  <p className="eea-page-banner-meta">{info}</p>
                </div>
              </Col>
              <Col desktop="3" tablet="2" mobile="4">
                <div className="eea-page-banner-actions">
                  <div className="eea-page-banner-actions-bookmark">
                    <Icon name="bookmark outline"></Icon>
                    Bookmark
                  </div>
                  <div className="eea-page-banner-actions-download">
                    <Icon name="download"></Icon>
                    Download
                  </div>
                </div>

                <div className="eea-page-banner-actions-mobile">
                  <div className="eea-page-banner-actions-bookmark">
                    <Icon name="bookmark outline"></Icon>
                  </div>
                  <div className="eea-page-banner-actions-download">
                    <Icon name="download"></Icon>
                  </div>
                </div>
              </Col>
            </Grid.Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
