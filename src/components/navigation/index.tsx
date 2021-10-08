import React from 'react';
import styles from './navigation.module.scss';

export const Navigation = (): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Pokedex</h2>
        </div>
    );
};
