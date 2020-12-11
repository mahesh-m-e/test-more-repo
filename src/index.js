import React from 'react'
import styles from './styles.module.css'
import 'antd/dist/antd.css';
import { Button } from "antd";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const CopyButton = ({text, ...rest}) => <Button {...rest}>{text || 'Button'}</Button>
