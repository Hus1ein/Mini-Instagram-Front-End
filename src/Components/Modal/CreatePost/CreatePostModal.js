import React from "react";
import Modal from "../Modal";
import styles from "./CreatePostModal.module.css";

class CreatePostModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show}>
                <div className={styles.body}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile"/>
                            <p className="help-block">Example block-level help text here.</p>
                        </div>
                    </form>
                    <div>
                        <button className="btn btn-success" onClick={this.props.submit}>Create post</button>
                    </div>
                </div>
            </Modal>
        );
    }

}

export default CreatePostModal;