import React from 'react'
import styles from './styles.module.css'
import PdfDocumentEditorComponent from './SyncfusionPdfViewer/index';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const PdfDocumentComponent = ({...rest}) => <PdfDocumentEditorComponent {...rest}/>;