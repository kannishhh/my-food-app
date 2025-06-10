const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact US Page</h1>
      <form>
        <input
          type="name"
          className="border border-black p-2 m-2 rounded"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded"
          placeholder="message"
        ></input>
        <button className="border border-black p-2 m-2 rounded bg-black text-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
