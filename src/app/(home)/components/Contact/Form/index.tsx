export const ContactForm = () => {
  return (
    <form>
      <div className="contactRow">
        <div className="col-sm-12">
          <input type="text" className="formControl" placeholder="Name" />
        </div>
        <div className="col-sm-12">
          <input type="text" className="formControl" placeholder="Phone" />
        </div>
        <div className="col-sm-12">
          <input type="text" className="formControl" placeholder="Email" />
        </div>
      </div>
      <div className="formGroup mb-4">
        <textarea
          className="formControl"
          rows={5}
          id="comment"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="formButton btn-block" type="submit">
        Send Now!
      </button>
    </form>
  );
};
