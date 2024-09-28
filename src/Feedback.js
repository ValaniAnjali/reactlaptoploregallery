import React from 'react';
import './Feedback.css'; 

const Feedback = () => {
    return (
        <div>
            <h3 className="feedback-title">Provide Us Feedback..and Let Us Know Your Opinion</h3>
            <div className="feedback-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" name="comment" className="textarea" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
