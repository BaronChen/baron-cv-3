import { graphql } from "gatsby";
import Layout from "../layouts";
import * as React from "react";
import Introduction from '../components/introduction/introduction';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setBasicInfo } from '../components/introduction/actions/introduction.actions';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export class IndexPage extends React.Component<IndexPageProps & {dispatch: Dispatch}, {}> {

  public componentDidMount() {
    this.props.dispatch(setBasicInfo("aaaa", "bbbbb"));
  }

  public render() {
    const { siteName } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <h1>{siteName} Typescript world!</h1>
        <Introduction />
      </Layout>
    );
  }
}

export default connect(null, null)(IndexPage);
