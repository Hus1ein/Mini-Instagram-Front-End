import React from "react";
import Modal from "../Modal";
import styles from "./CreatePostModal.module.css";

class CreatePostModal extends React.Component {

    state = {
        image: null,
        text: null
    };

    onImageChange = (event) => {
        let image = event.target.files[0];
        this.setState({
            image: image
        })
    };

    onTextChange = (event) => {
        let text = event.target.value;
        this.setState({
            text: text
        });
    };

    render() {
        return (
            <Modal show={this.props.show}>
                <div className={styles.body}>
                    <form>
                        <div className="form-group">
                            <p>What do you want to talk about?</p>
                            <textarea className="form-control" rows="10" onChange={this.onTextChange}/>
                        </div>
                        <div className="form-group">
                            <input type="file" id="exampleInputFile" onChange={this.onImageChange}/>
                        </div>
                    </form>
                    <div>
                        <button className={`${styles.btnSubmit} ${"btn"} ${"btn-success"}`} onClick={() => this.props.submit(this.state.image, this.state.text)}>Create post</button>
                        <button className={`${styles.btnCancel} ${"btn"} ${"btn-danger"}`} onClick={this.props.cancel}>Cancel</button>
                    </div>
                </div>
            </Modal>
        );
    }

}

export default CreatePostModal;