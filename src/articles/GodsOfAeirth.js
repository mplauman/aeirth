import React, { useEffect, useState } from 'react';
import FatesEnd from '../maps/FatesEnd';
import InformationDrawer from '../components/InformationDrawer';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const GodsOfAeirth = () => {
  const [content, setContent] = useState('Loading...');

  useEffect(
    () => {
      const loadContent = async () => {
        const path = await import('../assets/markdown/Gods of Aeirth.md');
        const content = await fetch(path.default);
        const text = await content.text();

        setContent(text);
      }

      loadContent();
    },
    [content]
  )

  return (
    <>
      <FatesEnd/>
      <InformationDrawer title='Gods of Aeirth'>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}/>
      </InformationDrawer>
    </>
  )
}

export default GodsOfAeirth;