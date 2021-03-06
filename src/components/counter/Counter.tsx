import React, { useState } from 'react';
import styles from './Counter.module.css';
import { Typography, Button} from 'antd';

interface PropsType {
    max: number; //max 为传入的最大capacity
}
export const Counter: React.FC<PropsType> = ({max}) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.component}>
                <Typography.Text className={styles["title"]}>Counter</Typography.Text>
                <Button 
                    className={styles["button-reset"]} 
                    onClick={() => setCount(0)}
                >
                    Reset
                </Button>
                 <Typography.Text className={styles["capacity"]}>
                     Capacity: {max}
                </Typography.Text>
                <div className={styles["count"]}>{count}</div>
                <div className={styles["message"]}>
                    <div>
                        {
                            (count === max) && 
                            <Typography.Text 
                                className={styles.inner}
                            >
                                Max capacity is reached
                            </Typography.Text>
                        }
                    </div>
                    <div>
                        {
                            (count === 0) && 
                            <Typography.Text 
                                className={styles.inner}
                            >
                                Current value is 0, Please press button +
                            </Typography.Text>
                        }
                    </div>
                </div>
                <div style={{height: 200}}>
                    <Button.Group >
                        <Button 
                            className={styles['button-changedata']} 
                            onClick={() => count > 0 && setCount(count - 1)} 
                        >-</Button>
                        <Button 
                            className={styles['button-changedata']} 
                            onClick={() => count < max && setCount(count + 1)}
                        >+</Button>
                    </Button.Group>
                </div>
        </div>
   )
}