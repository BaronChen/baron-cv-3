import { graphql } from "gatsby";
import Layout from "../layouts";
import * as React from "react";
import Introduction from '../components/introduction/introduction';
import MyTerminal from '../components/terminal/terminal';
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
    },
    enJson: {
      name: string,
      title: string
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
    enJson {
      name
      title
    }
  }
`;

export class IndexPage extends React.Component<IndexPageProps & {dispatch: Dispatch}, {}> {

  public componentWillMount() {
    const { name, title} = this.props.data.enJson;
    this.props.dispatch(setBasicInfo(name, title));
  }

  public render() {
    const { siteName } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Introduction />
        <MyTerminal />
      </Layout>
    );
  }
}

export default connect(null, null)(IndexPage);
