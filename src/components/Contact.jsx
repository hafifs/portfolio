import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Get in Touch
        </h2>
      </div>
      <form className="max-w-md mx-auto space-y-4">
        <input
          className="flex w-full h-10 px-4 py-2 text-sm transition-colors border rounded-md shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:outline-none focus:ring-1"
          placeholder="Name"
          type="text"
        />
        <input
          className="flex w-full h-10 px-4 py-2 text-sm transition-colors border rounded-md shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:outline-none focus:ring-1"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="flex min-h-[80px] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md border px-4 py-2 shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1"
          placeholder="Message"
        ></textarea>
        <button
          className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black/80"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
