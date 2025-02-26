import Card from "./Card";

const Title = () => (
  <>
    Contact <strong className="text-secondary font-semibold">Me</strong>
  </>
);

const ContactMe = ({ ...props }) => {
  return (
    <Card id="contact" title={<Title />} {...props}>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe9aTeD-nLcricxIJqZJ6HM92mYfhZ9t2YR6cFAdfI-35mNAg/formResponse"
        method="POST"
        className="flex flex-col gap-4 text-sm"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="entry.854186259"
            className="w-full rounded-md mt-1 bg-stone-900 text-white px-4 py-2 border border-stone-700"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="entry.1290661794"
            className="w-full rounded-md mt-1 bg-stone-900 text-white px-4 py-2 border border-stone-700"
          />
        </div>
        <div>
          <label htmlFor="text">Message</label>
          <textarea
            id="text"
            name="entry.1878296838"
            rows={3}
            className="w-full rounded-md mt-1 bg-stone-900 text-white px-4 py-2 border border-stone-700"
            placeholder="Write something..."
          ></textarea>
        </div>
        <button className="bg-secondary py-2 text-center text-black block w-full rounded-md">
          Send
        </button>
      </form>
    </Card>
  );
};

export default ContactMe;
