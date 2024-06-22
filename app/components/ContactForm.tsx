"use client";

import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Bounce, toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import sendingMail from "../fetch-api";
import { Inputs } from "../lib/definitions-type";

const MailRegExp: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const ContactForm: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      reset();
      const result = await sendingMail(data);

      if (result.status === 200)
        toast.info("Sent a letter!", {
          theme: "dark",
          transition: Bounce,
        });

      if (result.status === 500) throw new Error();
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
        <div className="block w-[340px]">
          <input
            {...register("name", {
              required: "Name required.",
              maxLength: {
                value: 10,
                message: "This input exceed maxLength 10.",
              },
            })}
            type="text"
            placeholder="name"
            className="input h-12 md:h-14 mb-5 md:mb-0"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-[10px] mt-2 text-accent">
                  {message}
                </p>
              ))
            }
          />
        </div>
        <div className="block w-[340px]">
          <input
            {...register("email", {
              required: "Email required.",
              pattern: {
                value: MailRegExp,
                message:
                  "Valid e-mail can contain only latin letters, numbers, '@' and '.'",
              },
            })}
            type="text"
            placeholder="email"
            className="input h-12 md:h-14"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-[10px] mt-2 text-accent">
                  {message}
                </p>
              ))
            }
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="subject"
        {...register("subject", {
          required: "Subject required.",
          maxLength: { value: 20, message: "This input exceed maxLength 20." },
        })}
        className="input h-12 md:h-14"
      />
      <ErrorMessage
        errors={errors}
        name="subject"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className="text-[10px] mt-2 text-accent">
              {message}
            </p>
          ))
        }
      />
      <textarea
        placeholder="message"
        {...register("message", {
          required: "Message required.",
          maxLength: { value: 20, message: "This input exceed maxLength 20." },
        })}
        className="textarea"
      ></textarea>
      <ErrorMessage
        errors={errors}
        name="message"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className="text-[10px] mb-2 text-accent">
              {message}
            </p>
          ))
        }
      />
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let`s talk
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </form>
  );
};

export default ContactForm;
