const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black dark:bg-grid-white/[0.05]">
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
              
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-zinc-600 text-white font-bold rounded-md hover:bg-zinc-700 dark:bg-zinc-500 dark:hover:bg-zinc-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
