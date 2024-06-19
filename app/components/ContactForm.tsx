"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { Inputs } from "../lib/definitions-type";

const ContactForm: FC = () => {
  const { register, handleSubmit, watch, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-x-6 w-full">
        <input
          type="text"
          placeholder="name"
          {...register("name")}
          className="input h-12 md:h-14 mb-5 md:mb-0"
        />
        <input
          type="text"
          placeholder="email"
          {...register("email")}
          className="input h-12 md:h-14"
        />
      </div>
      <input
        type="text"
        placeholder="subject"
        {...register("subject")}
        className="input h-12 md:h-14"
      />
      <textarea
        placeholder="message"
        {...register("message")}
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
