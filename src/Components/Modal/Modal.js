import React from 'react';

import styles from './Modal.module.css';

class Modal extends React.Component {

    render() {

        return(
            <div>
                <div className= {this.props.show ? `${styles.myModalOpened} ${styles.myModal}` : styles.myModal} aria-hidden="true">
                    <div className={styles.myModalDialog}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }

}

export default Modal;