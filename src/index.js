import React from 'react'
import styles from './styles.module.css'
import 'antd/dist/antd.css';
import { Button, Input } from "antd";
import PdfDocumentEditorComponent from './SyncfusionPdfViewer/index';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const CopyButton = ({text, ...rest}) => <Button {...rest}>{text || 'Button'}</Button>

export const CopyInput = ({...rest}) => <Input {...rest}></Input>;

export const PdfDocumentComponent = ({...rest}) => <PdfDocumentEditorComponent {...rest}/>;