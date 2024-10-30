import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './ReactTemplate.module.scss';
import type { IReactTemplateProps } from './IReactTemplateProps';
import { escape } from '@microsoft/sp-lodash-subset';

const ReactTemplate: React.FC<IReactTemplateProps> = ({
    description,
    isDarkTheme,
    environmentMessage,
    hasTeamsContext,
    userDisplayName,
  }) => {
    const [data, setData] = useState<string | null>(null);

  // Simulate componentDidMount
  useEffect(() => {
    console.log('Component mounted');
    
    // Fetch initial data or assign a value
    const initialData = `Welcome message for ${escape(userDisplayName)}`;
    setData(initialData);

    // Cleanup function to simulate componentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  }, [userDisplayName]); // Dependency to ensure it runs if userDisplayName changes

  // Simulate componentDidUpdate
  useEffect(() => {
    console.log('Component updated');

    // Assign new data based on description
    const updatedData = `Updated description: ${escape(description)}`;
    setData(updatedData);
  }, [description]); // Runs when description changes

  return (
    <section className={`${styles.reactTemplate} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <img
          alt=""
          src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')}
          className={styles.welcomeImage}
        />
        <h2>Well done, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <div>
          Web part property value: <strong>{escape(description)}</strong>
        </div>
      </div>
      {data && <div>{data}</div>} {/* Displaying the assigned data */}
      <div>
        <h3>Welcome to SharePoint Framework!</h3>
        <p>
          The SharePoint Framework (SPFx) is an extensibility model for Microsoft Viva, Microsoft Teams, and SharePoint. It's the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting, and industry-standard tooling.
        </p>
        <h4>Learn more about SPFx development:</h4>
        <ul className={styles.links}>
          <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
          <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
        </ul>
      </div>
    </section>
  );
};

export default ReactTemplate;