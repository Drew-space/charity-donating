"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

import { Input } from "./ui/input";

import z from "zod/v3";
import { error } from "console";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { email } from "zod/v4-mini";
import dynamic from "next/dynamic";

const schema = z.object({
  email: z.string().email(),
  name: z.string(),
  phone: z.string().min(10),
  amount: z.number().min(100),
});

type formData = z.infer<typeof schema>;
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false },
);

const Hero = () => {
  const [open, setOpen] = useState(false);

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const email = watch("email");
  const amount = watch("amount");

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    currency: "NGN",

    metadata: {
      custom_fields: [
        {
          display_name: "Email",
          variable_name: "email",
          value: email,
        },
        {
          display_name: "Amount",
          variable_name: "amount",
          value: amount,
        },
      ],
    },

    text: "Donate",
    onSuccess: () => {
      setOpen(false);
      alert("Thank you for donating");
    },
    onClose: () => alert("Are you sure you want to close"),
  };

  return (
    <div className="relative w-full h-100 md:h-132.5">
      <Image
        src="/images/hero.avif"
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              className="text-white font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Clean Water,
              <br />
              Brighter Futures
            </h1>

            <p
              className="text-white mt-4 font-medium
              text-sm sm:text-base md:text-lg max-w-xl"
            >
              A community-driven effort to bring clean sustainable water to 100
              villages in Nigeria by {new Date().getFullYear()}
            </p>

            <Dialog open={open} onOpenChange={setOpen}>
              <form>
                <DialogTrigger asChild>
                  <button
                    className="mt-6 bg-[#5aaa3a] text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold "
                    onClick={() => setOpen(true)}
                  >
                    Donate now
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Donate Now</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <div className="">
                      <Input placeholder="Name" {...register("name")} />
                      <p className="text-red-500 text-sm">
                        {errors.name?.message}
                      </p>
                    </div>

                    <div className="">
                      <Input placeholder="Email" {...register("email")} />
                      <p className="text-red-500 text-sm">
                        {errors.email?.message}
                      </p>
                    </div>
                    <div className="">
                      <Input
                        placeholder="Amount"
                        {...register("amount", { valueAsNumber: true })}
                      />
                      <p className="text-red-500 text-sm">
                        {errors.amount?.message}
                      </p>
                    </div>
                    <div className="">
                      <Input
                        placeholder="Phone-Number"
                        {...register("phone")}
                      />
                      <p className="text-red-500 text-sm">
                        {errors.phone?.message}
                      </p>
                    </div>
                  </div>

                  <DialogFooter className="flex items-center">
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    {email && amount !== undefined && (
                      <div className="" onClick={() => setOpen(false)}>
                        <PaystackButton
                          {...componentProps}
                          className="bg-[#5aaa3a] text-white rounded-md py-2 px-2"
                          text="Donate"
                        />
                      </div>
                    )}
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
