"use client";

import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import sendingMail from "../fetch-api";
import { Inputs } from "../lib/definitions-type";

// const MailRegExp: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const ContactForm: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      reset();
      const result = await sendingMail(data);

      if (result.status === 200)
        toast.info("Sent a letter!", {
          theme: "dark",
          transition: Bounce,
        });

      if (result.status === 500) throw new Error("something went wrong");
    } catch {
      toast.error("Something went wrong!", {
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-x-6 w-full">
        <input
          type="text"
          placeholder="name"
          {...(register("name"), { required: true })}
          className="input h-12 md:h-14 mb-5 md:mb-0"
        />
        {errors.name && <span>This is required</span>}
        <input
          type="text"
          placeholder="email"
          {...(register("email"), { pattern: "" })}
          className="input h-12 md:h-14"
        />
        {errors.email && <span>This is required</span>}
      </div>
      <input
        type="text"
        placeholder="subject"
        {...(register("subject"), { required: true })}
        className="input h-12 md:h-14"
      />
      <textarea
        placeholder="message"
        {...(register("message"), { required: true, maxLength: 120 })}
        className="textarea"
      ></textarea>
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
      >
        <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let`s talk
        </span>
        <BsArrowRight className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </form>
  );
};

export default ContactForm;
