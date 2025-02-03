import React, { Component } from 'react';
import { Header, Icon, Container, Grid } from 'semantic-ui-react'

export class Title extends Component {
    render() {
        return (
        <Header className="Title" as="h1">    
          <Icon name={this.props.icon} size='mini' />
          <Header.Content>{this.props.name}</Header.Content>
        </Header>);
    }
}

export class EducationBlock extends Component {
    render() {
        const listItems = this.props.details.map((detail) =>
            <Container className="Education-detail">{detail}</Container>
        );
        return (
            <div>
                <Header as="h3" className="Education-block">    
                <Icon name='university' />
                <Header.Content>{this.props.name}</Header.Content>
                </Header>
                {listItems}
                <br />
            </div>
        );
    }
}

export class PublicationBlock extends Component {
    highlightAuthors(authors) {
        const idx = authors.indexOf('Jihoon Ko');
        if (idx < 0){
            return (
                <div className="Publication-detail">{authors}</div>
            );
        }else{
            return (
                <div className="Publication-detail">{authors.substring(0, idx)}
                <span className="Publication-author-me">Jihoon Ko</span>
                {authors.substring(idx + 9)}
                </div>
            );
        }
    }

    generateDetails(props) {
        var objs = [];
        for (const [key, value] of Object.entries(this.props.details)) {
          objs.push(<span> | </span>);
          if(value){
              objs.push(<a href={value}>{key}</a>);
          }else{
              objs.push(<span>{key}</span>);
          }
        }
        return (
            <div className="Publication-detail">
                <span className="Publication-conf"><a href={this.props.conflink}>{this.props.confname}</a></span>
                {" [ "}
                {<a href={this.props.paper}>paper</a>}
                {objs} 
                {" ] "}
            </div>
            );
    }

    render() {
        return (
            <div>
                <Grid>
                <Grid.Column className="Publication-num">
                    {this.props.idx}
                </Grid.Column>
                <Grid.Column className="Publication-text">
                    <Header as="h3" className="Publication-block">    
                    <Header.Content>{this.props.name}</Header.Content>
                    </Header>
                    {this.highlightAuthors(this.props.authors)}
                    {this.generateDetails(this.props)}
                </Grid.Column>
                </Grid>
                
                <br />
            </div>
        );
    }
}

export class AwardBlock extends Component {
    render() {
        const listItems = this.props.details.map((detail) =>
            <Container className="Education-detail">{detail}</Container>
        );
        return (
            <div>
                <Header as="h3" className="Award-block">
                <Header.Content>{this.props.name}</Header.Content>
                </Header>
                {listItems}
                <br />
            </div>
        );
    }
}

export class ICPCBlock extends Component {
    render() {
        const listItems = this.props.details.map((detail) =>
            <Container className="Education-detail">{detail}</Container>
        );
        return (
            <div>
                <Header as="h3" className="Award-block">
                <Header.Content><a href="https://icpc.global/ICPCID/6R1AJDK3DF8F">{this.props.name}</a></Header.Content>
                </Header>
                {listItems}
                <br />
            </div>
        );
    }
}

export class TeachingBlock extends Component {
    generateDetails(lectures) {
        var objs = [];
        for (const [key, value] of Object.entries(lectures)) {
            objs.push(<span>{" | "}</span>)
            if(value){
              objs.push(<a href={value}>{key}</a>);
          }else{
              objs.push(<span>{key}</span>);
          }
        }
        return objs;
    }

    render() {
        return (
            <div className="Teaching-block">
                <Header as="h3" className="Publication-block">    
                <Header.Content>{this.props.name}</Header.Content>
                </Header>
                <div className="Publication-detail">
                    <span className="Publication-conf">{this.props.role}
                    </span>
                    {this.generateDetails(this.props.lectures)}
                </div>
                <br />
            </div>
        );
    }
}

/*
export class ABC extends Component {
    render() {
        return (<Segment>Bye!</Segment>);
    }
}*/